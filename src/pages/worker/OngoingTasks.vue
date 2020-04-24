<!-- Ongoing tasks -->
<template>
    <div class="wrapper" style="padding-top:0px;margin-top:2px;">
<div class="md-layout md-gutter md-alignment-center" style="margin-top:0px;">
      <h3 class="md-layout-item">Tasks :</h3>
    </div>
    <div class="md-layout md-gutter">
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-30"
        v-for="task in tasks"
        :key="task.id"
      >
        <chart-card :chart-type="'Line'" icon="person">
          <template slot="content">
            <center class="title">
              <h3><md-icon> directions_run </md-icon> {{ task.name}}</h3>
            </center>
            <center class="category">
              <h4>{{task.category}}</h4>

              {{ task.date }} <br />
              {{ task.place }} <br />
              {{ task.price }} <br /><br />
              <div v-if="task.worker_found" class="worker_found">
                <i class=" fas fa-exclamation-circle fa-sm"></i> worker found
              </div>
            </center>
            <div></div>
            <center>
              <br />
              <button
                data-background-color="red"
                class="btn btn-sm"
                @click="cancel(task.id,'task')"
              >
                cancel
              </button>
              <button
                data-background-color="red"
                class="btn btn-sm"
                @click="done(task.id,'task')"
              >
                done
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
    <modal
      name="Done"
      height="auto"
      :scrollable="true"
      :draggable="false"
      width="400px"
      :adaptive="true"
    >

      <done v-on:hide="hide_done" :id="id" :type="post_type" :client_worker="client"> </done>
    </modal>

    <modal
      name="Cancel"
      height="auto"
      :scrollable="true"
      :draggable="false"
      width="400px"
      :adaptive="true"
    >
      <cancel :post="post_type" @hide="hide_cancel" :id="id" :client_worker="worker"> </cancel>
    </modal>
 
    </div>
</template>

<script>
import { ChartCard } from "@/components";
import Done from "D:/GL3/GL3/Semestre 2/Processus Unifiés/TaskMeFront/src/components/Done.vue";
import Cancel from "D:/GL3/GL3/Semestre 2/Processus Unifiés/TaskMeFront/src/components/Cancel.vue";

export default {
  components: {
    ChartCard,
    Done,
    Cancel,
  },
  data() {
    return {
        worker : "worker",
        client : "client",
      post_type : "",
      id: "",
      tasks: [
        {
          id: "1",
          name: "task 1",
          category: "task category",
          date : "task date",
          place: "task place",
          price: "2 $",
          deets: "deeeeeeeeeeeeetaaaaaaaaaaillllllls",
          creation_date: " 2 minutes",
          worker_found: true
        }
      ],
      ads: [
        {
          id: "1",
          name: "ad 1",
          price: "1 $",
          deets: "deeeeeeeeeeeeetaaaaaaaaaaillllllls",
          creation_date: " 1 day",
          worker_found: false
        }
      ]
    };
  },
  mounted() {
    /* var id=""   // idk how this is gonna work yet 
    axios
          .get('http://localhost/Taskme/public/api/tasks'+id)
          .then(response => (this.tasks = response["data"]["data"]))
    axios
          .get('http://localhost/Taskme/public/api/ads'+id) //mafammech l route
          .then(response => (this.ads = response["data"]["data"]))*/
  },
  created() {
    // check session stuff
  },
  methods: {
    done(id,type) {
      this.id=id;
      this.post_type=type;
      this.$modal.show("Done");
      
    },
    hide_done() {

      this.$modal.hide("Done");
    },


    cancel(id,type) {
      //popup
      this.id=id;
      this.post_type=type;
      this.$modal.show("Cancel");
      // cant cancel if worker started the job
      //
    },
    hide_cancel(){
      this.$modal.hide("Cancel");
    },
  }
};
</script>

<style scoped>
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
  width:59px;
  height:31px;
}
.wrapper{
    margin-left: 15px;
}

</style>
