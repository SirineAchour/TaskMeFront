<template>
    <div>
      <md-table v-model="tasks" :table-header-color="tableHeaderColor">
        <md-table-row slot="md-table-row" slot-scope="{ item }">
          <md-table-cell md-label="Task">{{ item.name }}</md-table-cell>
          <md-table-cell md-label="Category">{{ item.category }}</md-table-cell>
          <md-table-cell md-label="$">{{ item.price }}</md-table-cell>
          <md-table-cell md-label="Date">{{ item.date }}</md-table-cell>
          <md-table-cell md-label="Location">{{ item.place }}</md-table-cell>
          <md-table-cell md-label="State">{{ item.state }}</md-table-cell>
          <!-- Done Canceled ongoing -->
          <md-table-cell md-label="Info">{{ item.info }}</md-table-cell>
        </md-table-row>
      </md-table>
    </div>
</template>

<script>
export default {
  name: "simple-table",
  props: {
    tableHeaderColor: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      selected: [],
      tasks: [
        {
          name: "task 1",
          price: "$36",
          category: "pets",
          place: "tunisia, sousse, smth",
          date: "12/12/2020",
          state: "on going",
          info: "no issues",
        },
        {
          name: "task 2",
          price: "$36",
          category: "cleaning",
          place: "tunisia, sousse, smth",
          date: "12/12/2020",
          state: "done",
          info: "no issues",
        },
        {
          name: "task 3",
          price: "$36",
          category: "gardening",
          place: "tunisia, sousse, smth",
          date: "12/12/2020",
          state: "done",
          info: "work not done well",
        },
      ],
    };
  },
  created() {
    axios
      .get(
        "http://localhost/TaskMeBack/public/api/history/tasks/" +
          localStorage.id
      )
      .then((response) => (this.tasks = response["data"]["data"]));
  },
};
</script>
<style scoped></style>
