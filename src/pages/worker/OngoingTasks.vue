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
              <h4>{{ task.category }}</h4>

              {{ task.date }} <br />
              {{ task.place }} <br />
              {{ task.price }} <br /><br />
              {{ task.details }} <br>
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
                  report(task.id, task.client, task.worker, task.creation_date, 'task')
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
    Report
  },
  data() {
    return {
      worker: "worker",
      client: "client",
      post_type: "",
      id: "",
      creation_date:"",
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
  mounted() {
    /* var id=""   // idk how this is gonna work yet 
    axios
          .get('http://localhost/TaskMeBack/public/api/tasks'+id)
          .then(response => (this.tasks = response["data"]["data"]))
    axios
          .get('http://localhost/TaskMeBack/public/api/ads'+id) //mafammech l route
          .then(response => (this.ads = response["data"]["data"]))*/
  },
  created() {
    // check session stuff
  },
  methods: {
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
</style>
