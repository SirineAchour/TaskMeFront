<template>
  <div class="content" style="padding-top:0px;margin-top:0px;">
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
              <h4>{{ task.category }}</h4>

              {{ task.date }} <br />
              {{ task.place }} <br />
              {{ task.price }} <br /><br />
              <div v-if="task.worker_found" class="worker_found">
                <i class=" fas fa-exclamation-circle fa-sm worker_found"></i>
                worker found
              </div>
              <div v-else class="worker_not_found">
                <i
                  class=" fas fa-exclamation-circle fa-sm worker_not_found"
                ></i>
                worker not found yet
              </div>
            </center>
            <div></div>
            <center>
              <br />
              <button
                data-background-color="blue"
                class="btn btn-sm"
                @click="
                  done(
                    task.id,
                    task.client,
                    task.worker,
                    task.creation_date,
                    'task'
                  )
                "
              >
                done
              </button>
              <button
                data-background-color="blue"
                class="btn btn-sm"
                @click="
                  report(
                    task.id,
                    task.client,
                    task.worker,
                    task.creation_date,
                    'task'
                  )
                "
              >
                report
              </button>
              <button
                data-background-color="blue"
                class="btn btn-sm"
                @click="
                  cancel(
                    task.id,
                    task.client,
                    task.worker,
                    task.creation_date,
                    'task'
                  )
                "
              >
                delete
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
    </div>
    <hr class="dashed" />
    <!-- ADS -->
    <div class="md-layout scrolling-wrapper">
      <h3
        class="md-layout-item md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
        style="text-align: left;"
      >
        Ads :
      </h3>
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-30"
        v-for="ad in ads"
        :key="ad.id"
      >
        <chart-card>
          <template slot="content">
            <center class="title">
              <h3><md-icon> local_play </md-icon> {{ ad.title }}</h3>
            </center>
            <center class="category">
              <h4>{{ ad.price }}</h4>
              {{ ad.details }}
              <br /><br />
              <div v-if="ad.worker_found" class="worker_found">
                <i class=" fas fa-exclamation-circle fa-sm worker_found"></i>
                worker found
              </div>
              <div v-else class="worker_not_found">
                <i
                  class=" fas fa-exclamation-circle fa-sm worker_not_found"
                ></i>
                worker not found yet
              </div>
              <br />
              <button
                data-background-color="blue"
                class="btn btn-sm"
                @click="
                  done(ad.id, ad.client, ad.worker, ad.creation_date, 'ad')
                "
              >
                done
              </button>

              <button
                data-background-color="blue"
                class="btn btn-sm"
                @click="
                  report(ad.id, ad.client, ad.worker, ad.creation_date, 'ad')
                "
              >
                report
              </button>
              <button
                data-background-color="blue"
                class="btn btn-sm"
                @click="
                  cancel(ad.id, ad.client, ad.worker, ad.creation_date, 'ad')
                "
              >
                delete
              </button>
            </center>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>access_time</md-icon>
              posted {{ ad.creation_date }} ago
            </div>
          </template>
        </chart-card>
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
        :client="client"
        :worker="worker"
        :creation_date="creation_date"
        client_worker="worker"
        @done_thing="donee"
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
        :post="post_type"
        :id="id"
        :client="client"
        :worker="worker"
        :creation_date="creation_date"
        client_worker="client"
        @hide="hide_cancel"
        @delete_thing="deletee"
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
        :type="post_type"
        :client="client"
        :worker="worker"
        :creation_date="creation_date"
        :client_worker="worker"
      >
      </report>
    </modal>
  </div>
</template>

<script>
import { ChartCard } from "@/components";
import Done from "../../components/Done.vue";
import Cancel from "../../components/Cancel.vue";
import Report from "../../components/Report.vue";

export default {
  components: {
    ChartCard,
    Done,
    Cancel,
    Report,
  },

  data() {
    return {
      id: "",
      post_type: "",
      client: "",
      worker: "",
      creation_date: "",
      tasks: [
        {
          id: "1",
          name: "task 1",
          category: "task category",
          date: "task date",
          place: "task place",
          price: "2 $",
          details: "deeeeeeeeeeeeetaaaaaaaaaaillllllls",
          creation_date: " 2 minutes",
          worker_found: true,
        },
      ],
      ads: [
        {
          id: "1",
          name: "ad 1",
          price: "1 $",
          details: "deeeeeeeeeeeeetaaaaaaaaaaillllllls",
          creation_date: " 1 day",
          worker_found: false,
        },
      ],
    };
  },
  created() {
    axios
      .get(
        "http://localhost/TaskMeBack/public/api/tasks/client/" + localStorage.id
      )
      .then((response) => {
        this.tasks = response["data"]["data"];
      });
    axios
      .get(
        "http://localhost/TaskMeBack/public/api/ads/client/" + localStorage.id
      ) //mafammech l route
      .then((response) => {
        this.ads = response["data"]["data"];
      });
  },
  methods: {
    done(id, client, worker, creation_date, post_type) {
      this.id = id;
      this.post_type = post_type;
      this.client = client;
      this.worker = worker;
      this.creation_date = creation_date;
      this.$modal.show("Done");
    },
    hide_done() {
      this.$modal.hide("Done");
    },

    cancel(id, client, worker, creation_date, post_type) {
      //popup
      this.id = id;
      this.post_type = post_type;
      this.client = client;
      this.worker = worker;
      this.creation_date = creation_date;
      this.$modal.show("Cancel");
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
    deletee(id, type) {
      var tt = type + "s";
      for (var i = 0; i < this[tt].length; i++) {
        if (this[tt][i].id === id) {
          this[tt].splice(i, 1);
        }
      }
    },
    donee(id, type) {
      var tt = type + "s";
      for (var i = 0; i < this[tt].length; i++) {
        if (this[tt][i].id === id) {
          this[tt].splice(i, 1);
        }
      }
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
.worker_not_found {
  color: rgb(46, 46, 46);
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

.worker_found {
  color: #45bd81;
}

button {
  margin: 7px;
  width: 59px;
  height: 31px;
}
</style>