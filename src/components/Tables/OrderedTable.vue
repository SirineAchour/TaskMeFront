<template>
  <div>
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="ID">{{ item.id }}</md-table-cell>
        <md-table-cell md-label="$">{{ item.price }}</md-table-cell>
        <md-table-cell md-label="Date">{{ item.date }}</md-table-cell>
        <md-table-cell md-label="Location">{{ item.place }}</md-table-cell> <!-- Can be unspecified -->
        <md-table-cell md-label="Responses">{{ item.responses }}</md-table-cell>
        <md-table-cell md-label="State">{{ item.state }}</md-table-cell>
        <md-table-cell md-label="Info">{{ item.info }}</md-table-cell>
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
      users: [
        {
          id: 1,
          name: "Dakota Rice",
          price: "$36,738",
          place: "Niger",
          date: "15/02/2020",
          responses: "25",
          state: "done",
          info: "no issues",
        },
        {
          id: 2,
          name: "Dakota Rice",
          price: "$36,738",
          place: "Niger",
          date: "15/02/2020",
          responses: "25",
          state: "done",
          info: "no issues",
        },
        {
          id: 3,
          name: "Dakota Rice",
          price: "$36,738",
          place: "Niger",
          date: "15/02/2020",
          responses: "25",
          state: "done",
          info: "no issues",
        }
      ]
    };
  },
  created(){
    axios.get('http://localhost/Taskme/public/api/history/ads/'+localStorage.id)
    .then((response) => (this.tasks = response["data"]["data"]));
  }
};
</script>
