<template>
  <div>
    <md-table v-model="ads" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="ID">{{ item.ad.id }}</md-table-cell>
        <md-table-cell md-label="$">{{ item.ad.price }}</md-table-cell>
        <md-table-cell md-label="Date">{{ item.ad.date }}</md-table-cell>
        <md-table-cell md-label="Location">
          {{item.address.country}}, {{item.address.city}}, {{item.address.street}}, {{item.address.postal_code}}, {{item.address.house_number}}
        </md-table-cell>
        <md-table-cell md-label="Worker Found">
          <span v-if="item.ad.worker_found == 0"> No </span>
          <span v-else> Yes </span>
        </md-table-cell>
        
        <md-table-cell md-label="Worker Name">
          <span v-if="item.worker && item.worker.worker_name"> {{ item.worker.worker_name }} </span>
          <span v-else> - </span>
        </md-table-cell>
        <md-table-cell md-label="Worker Phone">
          <span v-if="item.worker && item.worker.worker_phone"> {{ item.worker.worker_phone }} </span>
          <span v-else> - </span>
        </md-table-cell>
        <md-table-cell md-label="State">
          <span v-if="item.ad.state == 0" > not done </span>
          <span v-if="item.ad.state == 1" > done </span>
          <span v-if="item.ad.state == 2" > cancelled </span>
          </md-table-cell>
       <!-- <md-table-cell md-label="Info">{{ item.description }}</md-table-cell>-->
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: "ordered-table",
  props: {
    tableHeaderColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      selected: [],
      ads: []
    };
  },
  created(){
    axios.get('http://localhost/TaskMeBack/public/api/ads_by_user/'+localStorage.id)
    .then((response) => {
      this.ads = response["data"]["data"];
      });
  }
};
</script>
