<template>
  <div class="content" style="padding-top:2px;">
    <!-- TASKS -->
    <div class="md-layout">
      <h3
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
        style="text-align: left;margin-bottom:0px;"
      >
        Tasks :
      </h3>
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-30"
        v-for="task in tasks"
        :key="task.id"
      >
        <chart-card :chart-type="'Line'" icon="person">
          <template slot="content">
            <center class="title">
              <h3><md-icon> directions_run </md-icon> {{ task.name }}</h3>
            </center>
            <center class="category">
              <h4>category</h4>

              {{ task.date }} <br />
              {{ task.place }} <br />
              {{ task.price }} <br />
              <input
                type="button"
                value="view details"
                class="btn color-me btn-sm"
                @click="
                  viewPost(
                    task.id,
                    task.name,
                    task.category,
                    task.price,
                    task.date,
                    task.place,
                    task.description,
                    task.client_name,
                    task.client_id,
                    task.client_phone
                  )
                "
              /><br /><br />
              <button
                data-background-color="purple"
                class="btn btn-sm"
                @click="done(task.id, 'task')"
              >
                done
              </button>

              <button
                data-background-color="purple"
                class="btn btn-sm"
                @click="
                  report(
                    task.id,
                    '',
                    '',
                    task.creation_date,
                    'task'
                  )
                "
              >
                report
              </button>

              <button
                data-background-color="purple"
                class="btn btn-sm"
                @click="cancel(task.id, 'task')"
              >
                cancel
              </button>
            </center>
          </template>

          <template slot="footer">
            <span class="stats">
              <md-icon>access_time</md-icon>
              created {{ task.creation_date }} ago
            </span>
          </template>
        </chart-card>
      </div>

      <div class="md-layout-item md-small-size-100 md-size-100">
        <div class="white-box">
          ad space
        </div>
      </div>
    </div>
    <modal
      name="Done"
      height="auto"
      :scrollable="true"
      :draggable="false"
      width="400px"
      :adaptive="true"
    >
      <done
        v-on:hide="hide_done"
        :id="id"
        :type="post_type"
        :client_worker="client"
        color="#973fad"
      >
      </done>
    </modal>

    <modal
      name="Cancel"
      height="auto"
      :scrollable="true"
      :draggable="false"
      width="400px"
      :adaptive="true"
    >
      <cancel
        post="task"
        @hide="hide_cancel"
        :id="id"
        :client_worker="worker"
        color="#973fad"
      >
      </cancel>
    </modal>

    <modal
      name="Report"
      height="auto"
      :scrollable="true"
      :draggable="false"
      width="400px"
      :adaptive="true"
    >
      <report
        v-on:hide="hide_report"
        :id="id"
        type="task"
        :client="client"
        :worker="worker"
        :creation_date="creation_date"
        client_worker="client"
      >
      </report>
    </modal>
    <modal
      name="View"
      height="auto"
      :scrollable="true"
      :draggable="false"
      width="350px"
      :adaptive="true"
    >
      <Details type='worker' :post="post">
      </Details>
    </modal>
  </div>
</template>

<script>
import { ChartCard } from "@/components";
import Done from "../../components/Done.vue";
import Cancel from "../../components/Cancel.vue";
import Report from "../../components/Report.vue";
import Details from "../../components/Details.vue";

export default {
  components: {
    ChartCard,
    Done,
    Cancel,
    Report,
    Details
  },
  data() {
    return {
      worker: "worker",
      client: "client",
      post_type: "",
      id: "",
      creation_date: "",
      post: {},
      tasks: []
    };
  },
  created() {
    axios
      .get(
        "http://localhost/TaskMeBack/public/api/posts_user_current/" +
          localStorage.id
      )
      .then((response) => {
      response["data"]["data"].forEach((post) => {
          axios
            .get(
              "http://localhost/TaskMeBack/public/api/task/" + post["post"]["task_id"]
            )
            .then((rps) => {
              
              var ta = {
                id: post["post"]["id"],
                name: rps["data"]["data"]["subject"],
                category: rps["data"]["data"]["categories"]["name"],
                price: post["post"]["price"]+"$",
                date: post["post"]["date"],
                place: post["address"]["country"]+", "+post["address"]["city"]+", "+post["address"]["street"]+", "+post["address"]["postal_code"]+", "+post["address"]["house_number"],
                description: post["post"]["description"],
                client_name: '', //client
                client_id: '', //client 
                client_phone: '', // client
                creation_date: post["post"]["created_at"],
                state: post["post"]["state"]
              };
              this.tasks.push(ta);
            });
      });
      });
  },
  methods: {
        viewPost(
      id,
      title,
      category,
      price,
      date,
      place,
      details,
      name,
      cin,
      phone
    ) {
      this.post = {
        id: id,
        title: title,
        category: category,
        price: price,
        date: date,
        place: place,
        details: details,
        client_name: name,
        client_id: cin,
        client_phone: phone,
      };
      this.$modal.show("View");
    },
    done(id, type) {
      this.id = id;
      this.post_type = type;
      this.$modal.show("Done");
    },
    hide_done() {
      this.$modal.hide("Done");
    },

    cancel(id, type) {
      //popup
      this.id = id;
      this.post_type = type;
      this.$modal.show("Cancel");
      // cant cancel if worker started the job
      //
    },
    hide_cancel() {
      this.$modal.hide("Cancel");
    },
    report(id, client, worker, creation_date, post_type) {
      // pop up
      this.id = id;
      this.post_type = post_type;
      this.client = client;
      this.worker = worker;
      this.creation_date = creation_date;
      this.$modal.show("Report");
    },
    hide_report() {
      this.$modal.hide("Report");
    },
  },
};
</script>

<style scoped>
.content {
  width: 100%;
}
hr {
  border: 1px dashed rgb(202, 201, 201);
  margin: 0px;
}
.title {
  font-weight: bold;
}

h4 {
  color: black;
}
i {
  margin-left: 5px;
}

button {
  margin: 7px;
  width: 59px;
  height: 31px;
}
.white-box {
  width: auto;
  height: 75px;
  margin-top: 25px;
  text-align: center;
  background: rgba(255, 255, 255, 0.9);
  padding: 30px;
  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
  border-radius: 5px;
}
.color-me {
  background-color: lavender;
  color: rgb(78, 75, 75);
  padding: 1px 5px 1px 5px;
  margin: 5px;
}
</style>