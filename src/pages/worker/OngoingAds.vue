<template>
  <div class="content" style="padding-top:2px;">
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
              <h3><md-icon> local_play </md-icon> {{ ad.name }}</h3>
            </center>
            <center class="category">
              
              <h4>{{ ad.date }}</h4>
              <h4>{{ ad.place }}</h4>
              <h4>{{ ad.price }}</h4>
              {{ ad.details }}

              <br /><br />
              <button
                data-background-color="red"
                class="btn btn-sm"
                @click="done(ad.id, 'ad')"
              >
                done
              </button>

              <button
                data-background-color="red"
                class="btn btn-sm"
                @click="
                  report(ad.id, ad.client, ad.worker, ad.creation_date, 'ad')
                "
              >
                report
              </button>

              <button
                data-background-color="red"
                class="btn btn-sm"
                @click="cancel(ad.id, 'ad')"
              >
                cancel
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
        color="#ed2f75"
      ></done>
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
        @hide="hide_cancel"
        :id="id"
        client_worker="worker"
        color="#ed2f75"
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
        type="ad"
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
      ads: [
        {
          id: "1",
          name: "ad 1",
          price: "1 $",
          details: "deeeeeeeeeeeeetaa aaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaillllllls",
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
  created(){/*
    if (!this.$session.exists() || localStorage.type=="client") {
      this.$router.push('/')
    }*/
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
