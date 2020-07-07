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
        class="md-layout-item md-medium-size-33 md-xsmall-size-100 md-size-33"
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
                    task.worker_found,
                    task.worker_name,
                    task.worker_id,
                    task.worker_phone
                  )
                "
              /><br />
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
                v-if="task.worker_found"
                data-background-color="blue"
                class="btn btn-sm"
                @click="
                  done(
                    task.id,
                    task.client,
                    task.worker_id,
                    task.creation_date,
                    'task'
                  )
                "
              >
                done
              </button>
              <button
                v-else
                disabled
                data-background-color="blue"
                class="btn btn-sm"
              >
                done
              </button>
              <button
                data-background-color="blue"
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
              created {{ task.creation_date }} 
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
        class="md-layout-item md-medium-size-33 md-xsmall-size-100 md-size-33"
        v-for="ad in ads"
        :key="ad.ad.id"
      >
        <chart-card>
          <template slot="content">
            <center class="title">
              <h3><md-icon> local_play </md-icon> {{ ad.ad.title }}</h3>
            </center>
            <center class="category">
              <h4>{{ ad.ad.price }}</h4>

              {{ ad.ad.date }} <br />
              {{ad.address.country}}, {{ad.address.city}}, {{ad.address.street}}, {{ad.address.postal_code}}, {{ad.address.house_number}} <br />
              <input
                v-if="ad.worker != undefined"
                type="button"
                value="view details"
                class="btn color-me btn-sm"
                @click="
                  viewPost(
                    ad.ad.id,
                    '',//ad.ad.title,
                    '',
                    ad.ad.price,
                    ad.ad.date,
                    ad.address.country+', '+ad.address.city+', '+ad.address.streen+', '+ad.address.postal_code+', '+ad.address.house_number,
                    ad.ad.description,
                    ad.ad.worker_found,
                    ad.worker.worker_name,
                    ad.worker.worker_id,
                    ad.worker.worker_phone

                  )
                "/>
                <input
                v-else
                type="button"
                value="view details"
                class="btn color-me btn-sm"
                @click="
                  viewPost(
                    ad.ad.id,
                    '',//ad.ad.title,
                    '',
                    ad.ad.price,
                    ad.ad.date,
                    ad.address.country+', '+ad.address.city+', '+ad.address.streen+', '+ad.address.postal_code+', '+ad.address.house_number,
                    ad.ad.description,
                    ad.ad.worker_found,
                    '',
                    '',
                    ''
                  )
                "/>
                <br />
              <div v-if="ad.ad.worker_found" class="worker_found">
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
              v-if="ad.worker != undefined"
                data-background-color="blue"
                class="btn btn-sm"
                @click="done(ad.ad.id, '', ad.worker.worker_id, ad.ad.creation_date, 'ad')"
              >
                done
              </button>
              <button
                v-else
                disabled
                data-background-color="blue"
                class="btn btn-sm"
                
              >
                done
              </button>
              <button
                data-background-color="blue"
                class="btn btn-sm"
                @click="
                  report(ad.ad.id, ''/*ad.client*/, ''/*ad.worker*/, ad.ad.creation_date, 'ad')
                "
              >
                report
              </button>

              <button
                data-background-color="blue"
                class="btn btn-sm"
                @click="cancel(ad.ad.id, ''/*ad.client*/, ''/*ad.worker*/, ad.ad.creation_date, 'ad')"
              >
                cancel
              </button>
            </center>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>access_time</md-icon>
              posted {{ ad.ad.creation_date }}
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
        @delete_thing="donee"
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

    <modal
      name="View"
      height="auto"
      :scrollable="true"
      :draggable="false"
      width="350px"
      :adaptive="true"
    >
      <Details type="client" :post="post"> </Details>
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
    Details,
  },

  data() {
    return {
      id: "",
      post_type: "",
      client: "",
      worker: "",
      creation_date: "",
      post: {},
      tasks: [],
      ads: [],
    };
  },
  mounted() {
    if (localStorage.id == "" || localStorage.type == "worker") {
      this.$router.push("/");
    }
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
              if(post["worker"] == undefined){
                post["worker"] = {
                  worker_name: "",
                  worker_id: "",
                  worker_number : "",
                }
              }
              var ta = {
                id: post["post"]["id"],
                name: rps["data"]["data"]["subject"],
                category: rps["data"]["data"]["categories"]["name"],
                price: post["post"]["price"]+"$",
                date: post["post"]["date"],
                client: localStorage,
                place: post["address"]["country"]+", "+post["address"]["city"]+", "+post["address"]["street"]+", "+post["address"]["postal_code"]+", "+post["address"]["house_number"],
                description: post["post"]["description"],
                worker_found: post["post"]["worker_found"],
                worker_name: post["worker"]["worker_name"],
                worker_id: post["worker"]["worker_id"],
                worker_phone: post["worker"]["worker_number"],
                creation_date: post["post"]["created_at"],
                state: post["post"]["state"]
              };
              this.tasks.push(ta);
            });
        });
      });
    axios
      .get(
        "http://localhost/TaskMeBack/public/api/ads_user_current/" +
          localStorage.id
      )
      .then((response) => {
        this.ads = response["data"]["data"];
      })
      .catch((error) => {
        alert("Something went Wrong");
      });
  },
  methods: {
    done(id, client, worker, creation_date, post_type) {
      this.id = id;
      this.post_type = post_type;
      this.client = localStorage.id;
      this.worker = worker;
      this.creation_date = creation_date;
      this.$modal.show("Done");
    },
    hide_done() {
      this.$modal.hide("Done");
    },
    viewPost(
      id,
      title,
      category,
      price,
      date,
      place,
      details,
      worker_found,
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
        worker_found: worker_found,
        worker_name: "hey hi",
        worker_id: cin,
        worker_phone: phone,
      };
      this.$modal.show("View");
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
    donee(id, type) {
      var tt = type + "s";
      for (var i = 0; i < this[tt].length; i++) {
        if(type == 'ad'){
          if (this[tt][i].ad.id === id) {
          this[tt].splice(i, 1);
          }
        }
        else{
          if (this[tt][i].id === id) {
          this[tt].splice(i, 1);
          }
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
.color-me {
  background-color: lavender;
  color: rgb(78, 75, 75);
  padding: 1px 5px 1px 5px;
  margin: 5px;
}
</style>
