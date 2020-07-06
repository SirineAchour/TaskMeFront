<template>
  <div class="content" style="padding-top:2px;">
    <div class="md-layout">
      <title-filter-bar title="Tasks :" class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"> </title-filter-bar>
      <div
        class="md-layout-item md-medium-size-33 md-xsmall-size-100 md-size-33"
        v-for="task in tasks"
        :key="task.id"
      >
        <chart-card :chart-type="'Line'" icon="person">
          <template slot="content" >
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
                    task.details,
                  )"
              /><br />
            </center>
            <div></div>
            <center>
              <br />
              <button
                data-background-color="blue"
                class="btn btn-sm"
                @click="doit(task.id, task.client, '', task.creation_date, 'task')"
              >
                do it!
              </button>

              <button
                data-background-color="blue"
                class="btn btn-sm"
                @click="remove(task.id, task.client, '', task.creation_date, 'task')"
              >
                remove
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
      <center
        class="md-layout-item md-medium-size-33 md-xsmall-size-100 md-size-33"
        style="margin-top:150px;"
        v-if="still_more_tasks"
      >
        <button class="btn more">
          more
        </button>
      </center>
    </div>
    <hr class="dashed" />
    <!-- ADS -->
    <div class="md-layout scrolling-wrapper">
      <title-filter-bar title="Ads :" class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"> </title-filter-bar>
      <div
        class="md-layout-item md-medium-size-33 md-xsmall-size-100 md-size-33"
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

              {{ ad.date }} <br />
              {{ ad.place }} <br />
              <input
                type="button"
                value="view details"
                class="btn color-me btn-sm"
                @click="
                  viewPost(
                    ad.id,
                    ad.title,
                    '',
                    ad.price,
                    ad.date,
                    ad.place,
                    ad.details,
                  )
                "/>
              <br /><br />
              <center>
                <button
                  data-background-color="blue"
                  class="btn btn-sm"
                  @click="doit(ad.id, ad.client, '', ad.creation_date, 'ad')"
                >
                  do it!
                </button>

                <button
                  data-background-color="blue"
                  class="btn btn-sm"
                  @click="remove(ad.id, ad.client, '', ad.creation_date, 'ad')"
                >
                  remove
                </button>
              </center>
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
      <center
        v-if="still_more_ads"
        class="md-layout-item md-medium-size-33 md-xsmall-size-100 md-size-33"
        style="margin-top:150px;"
      >
        <button class="btn more">
          more
        </button>
      </center>
    </div>

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
        client_worker="worker"
        @hide="hide_remove"
        @delete_thing="deletee"
      >
      </cancel>
    </modal>

    <modal
      name="Doit"
      height="auto"
      :scrollable="true"
      :draggable="false"
      width="400px"
      :adaptive="true"
    >
      <doit
        :post="post_type"
        :id="id"
        :client="client"
        :worker="worker"
        :creation_date="creation_date"
        @hide="hide_doit"
        @delete_thing="deletee"
      >
      </doit>
    </modal>

    <modal
      name="View"
      height="auto"
      :scrollable="true"
      :draggable="false"
      width="350px"
      :adaptive="true"
    >
      <View type='worker' :post="post">
      </View>
    </modal>

  </div>
</template>

<script>
import { ChartCard } from "@/components";
import  Cancel  from "../../components/Cancel.vue";
import  Doit  from "../../components/Doit.vue";
import View from "../../components/View.vue";
import TitleFilterBar from "./TitleFilterBar.vue";

export default {
  components: {
    ChartCard,
    Cancel,
    Doit,
    View,
    TitleFilterBar
  },
  data() {
    return {
      still_more_tasks: true,
      still_more_ads: false,
      id: "",
      post_type: "",
      client: "",
      worker: "",
      creation_date: "",
      post: {},
      tasks: [
        {
          id: "5",
          name: "task 1",
          category: "task category",
          date: "task date",
          place: "task place",
          price: "2 $",
          details:
            "deeeeeeeeeeeeetaaaaaaaaaaillllllls deeeeeeeeeeeeetaaaaaaaaaaillllllls \n deeeeeeeeeeeeetaaaaaaaaaaillllllls deeeeeeeeeeeeetaaaaaaaaaaillllllls",
          creation_date: " 2 minutes",
        },
        {
          id: "4",
          name: "task 1",
          category: "task category",
          date: "task date",
          place: "task place",
          price: "2 $",
          details:
            "deeeeeeeeeeeeetaaaaaaaaaaillllllls deeeeeeeeeeeeetaaaaaaaaaaillllllls \n deeeeeeeeeeeeetaaaaaaaaaaillllllls deeeeeeeeeeeeetaaaaaaaaaaillllllls",
          creation_date: " 2 minutes",
        },
        {
          id: "2",
          name: "task 1",
          category: "task category",
          date: "task date",
          place: "task place",
          price: "2 $",
          details: "deeeeeeeeeeeeetaaaaaaaaaaillllllls",
          creation_date: " 2 minutes",
        },
        {
          id: "3",
          name: "task 1",
          category: "task category",
          date: "task date",
          place: "task place",
          price: "2 $",
          details: "deeeeeeeeeeeeetaaaaaaaaaaillllllls",
          creation_date: " 2 minutes",
        },
        {
          id: "1",
          name: "task 1",
          category: "task category",
          date: "task date",
          place: "task place",
          price: "2 $",
          details: "deeeeeeeeeeeeetaaaaaaaaaaillllllls",
          creation_date: " 2 minutes",
        },
      ],
      ads: [
        {
          id: "2",
          title: "ad 2",
          price: "1 $",
          place: "place hey",
          date: " 12-12-2012",
          details: "deeeeeeeeeeeeetaaaaaaaaaaillllllls",
          creation_date: " 1 day",
        },
        {
          id: "1",
          title: "ad 1",
          price: "1 $",
          place: "place hey",
          date: " 12-12-2012",
          details: "deeeeeeeeeeeeetaaaaaaaaaaillllllls",
          creation_date: " 1 day",
        },
      ],
    };
  },
  mounted() {
    axios
      .get("http://localhost/TaskMeBack/public/api/tasks/"+localStorage.id)
      .then((response) => (this.tasks = response["data"]["data"]));
    axios
      .get("http://localhost/TaskMeBack/public/api/ads/"+localStorage.id)
      .then((response) => (this.ads = response["data"]["data"]));
  },
  methods:{
    viewPost(
      id,
      title,
      category,
      price,
      date,
      place,
      details,
    ) {
      this.post = {
        id: id,
        title: title,
        category: category,
        price: price,
        date: date,
        place: place,
        details: details,
      };
      this.$modal.show("View");
    },
    remove(id, client, worker, creation_date, post_type) {
      //popup
      this.id = id;
      this.post_type = post_type;
      this.client = client;
      this.worker = worker;
      this.creation_date = creation_date;
      this.$modal.show("Cancel");
    },
    doit(id, client, worker, creation_date, post_type) {
      //popup
      this.id = id;
      this.post_type = post_type;
      this.client = client;
      this.worker = worker;
      this.creation_date = creation_date;
      this.$modal.show("Doit");
    },
    hide_remove() {
      this.$modal.hide("Cancel");
    },
    hide_doit() {
      this.$modal.hide("Doit");
    },
    deletee(id,type){
      var tt=type+'s';
      for( var i = 0; i < this[tt].length; i++){ 
        if ( this[tt][i].id === id) {
          this[tt].splice(i, 1); 
        }
      }
    },
  },
  created(){/*
    if (!this.$session.exists() || localStorage.type=="client") {
      this.$router.push('/')
    }*/
  },
};
</script>

<style scoped>

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
  width: 66px;
  margin-left: 5px;
  margin-right: 5px;
}
.color-me {
  background-color: lavender;
  color: rgb(78, 75, 75);
  padding: 1px 5px 1px 5px;
  margin: 5px;
}
.more{
  border: 1px solid darkslategray;
  color: darkslategray;
text-align: center;
  
}

</style>
