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
        :key="ad.ad.id"
      >
        <chart-card>
          <template slot="content">
            <center class="title">
              <h3><md-icon> local_play </md-icon> {{ ad.ad.name }}</h3>
            </center>
            <center class="category">
              <h4>{{ ad.ad.price }}</h4>

              {{ ad.ad.date }} <br />
              {{ad.address.country}}, {{ad.address.city}}, {{ad.address.street}}, {{ad.address.postal_code}}, {{ad.address.house_number}} <br />
              <input
                type="button"
                value="view details"
                class="btn color-me btn-sm"
                @click="
                  viewPost(
                    ad.ad.id,
                    ad.ad.title,
                    '',
                    ad.ad.price,
                    ad.ad.date,
                    ad.address.country+', '+ad.address.city+', '+ad.address.streen+', '+ad.address.postal_code+', '+ad.address.house_number,
                    ad.ad.description,
                    '',//ad.client.client_name,
                    '',//ad.client.client_id,
                    '',//ad.client.client_phone
                  )
                "/>
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
                  report(ad.ad.id, '', '', ad.ad.creation_date, 'ad')
                "
              >
                report
              </button>

              <button
                data-background-color="red"
                class="btn btn-sm"
                @click="cancel(ad.ad.id, 'ad')"
              >
                cancel
              </button>
            </center>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>access_time</md-icon>
              posted {{ ad.ad.creation_date }} ago
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
      creation_date:"",
      post :{},
      ads: [],
    };
  },
  created(){
    axios.get('http://localhost/TaskMeBack/public/api/ads_by_user/'+localStorage.id)
    .then((response) => {
      this.ads = response["data"]["data"];
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
