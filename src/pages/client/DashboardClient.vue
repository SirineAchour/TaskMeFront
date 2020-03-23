<template>
  <div class="content">
    <!-- TASKS -->
    <div class="md-layout md-gutter md-alignment-center">
      <h3 class="md-layout-item">Tasks :</h3>
    </div>
    <div class="md-layout md-gutter">
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-30"
        v-for="task in tasks" :key="task.id"
      >
        <chart-card
          :chart-type="'Line'"
          icon="person"
        >
          
          <template slot="content">
            <center class="title">
              <h3><md-icon> directions_run </md-icon> {{task.name}}</h3>
            </center>
            <center class="category"><h4>category</h4>

              {{task.date}} <br />
              {{task.place}} <br />
              {{task.price}} <br /><br>
              <div  v-if="task.worker_found" class="worker_found"><i class=" fas fa-exclamation-circle fa-sm"></i> worker found</div>
              <div v-else class="worker_not_found"><i class=" fas fa-exclamation-circle fa-sm"></i> worker not found yet</div>
            </center>
            <div>
            </div>
            <center>
              <br>
              <button data-background-color="red" class="btn btn-sm">done</button> <!-- done -->
              <button data-background-color="red" class="btn btn-sm">delete</button> <!-- cancel -->
              <button data-background-color="red" class="btn btn-sm">report</button> <!-- report -->
            </center>
          </template>

          <template slot="footer">
            <span class="stats">
              <md-icon>access_time</md-icon>
              created {{task.creation_date}} ago
            </span>
          </template>
          
        </chart-card>
      </div>
    </div>
    <hr class="dashed">
    <!-- ADS -->
    <div class="md-layout md-gutter md-alignment-center">
      <h3 class="md-layout-item">Ads :</h3>
    </div>
    <div class="md-layout md-gutter scrolling-wrapper">
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-30"
        v-for="ad in ads" :key="ad.id"
      >
        <chart-card
        >
          <template slot="content">
            <center class="title">
              <h3><md-icon> local_play </md-icon> {{ad.name}}</h3>
            </center>
            <center class="category"><h4>{{ad.price}}</h4>
              {{ad.deets}}
              <br /><br>
              <div  v-if="ad.worker_found" class="worker_found"><i class=" fas fa-exclamation-circle fa-sm"></i> worker found</div>
              <div v-else class="worker_not_found"><i class=" fas fa-exclamation-circle fa-sm"></i> worker not found yet</div>
              <br>
              <button data-background-color="red" class="btn btn-sm">done</button> <!-- done -->
              <button data-background-color="red" class="btn btn-sm">delete</button> <!-- cancel -->
            </center>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>access_time</md-icon>
              posted {{ad.creation_date}} ago
            </div>
          </template>
        </chart-card>
      </div>
    </div>
  </div>
</template>

<script>
import { ChartCard } from "@/components";

export default {
  components: {
    ChartCard
  },
  data() {
    return {
      tasks: [
        {
          id : "1",
          name : "task 1",
          price : "1 $",
          date : "1/1/1",
          place : "location 1",
          creation_date : " 1 day",
          worker_found : true,
        },
        {
          id : "2",
          name : "task 2",
          price : "2 $",
          date : "2/2/2",
          place : "location 2",
          creation_date : " 2 weeks",
          worker_found : false,
        }
      ],
      ads : [
        {
          id : "1",
          name : "ad 1",
          price : "1 $",
          deets : "deeeeeeeeeeeeetaaaaaaaaaaillllllls",
          creation_date : " 1 day",
          worker_found : false,
        },
        {
          id : "2",
          name : "ad 1",
          price : "1 $",
          deets : "deeeeeeeeeeeeetaaaaaaaaaaillllllls",
          creation_date : " 1 day",
          worker_found : true,
        },
        {
          id : "3",
          name : "ad 2",
          price : "2 $",
          deets : "deeeeeeeeeeeeeeeeeeeeettttttttts",
          creation_date : " 2 weeks",
          worker_found : true,
        }
      ]
    }
  }
};
</script>

<style scoped>
hr {
  border: 1px dashed rgb(202, 201, 201);
  margin : 0px;
}
.worker_not_found{
  color: rgb(46, 46, 46);
}
.title{
  font-weight: bold;
}

h4{
  color: black;
}
i{
  margin-left: 5px;
}

.worker_found{
  color : #45bd81;
}
</style>
