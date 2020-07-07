<template>
  <div>
    <md-table v-model="tasks" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Task">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Category">{{ item.category }}</md-table-cell>
        <md-table-cell md-label="$">{{ item.price }}</md-table-cell>
        <md-table-cell md-label="Date">{{ item.date }}</md-table-cell>
        <md-table-cell md-label="Location">{{ item.place }}</md-table-cell>
        <!-- <md-table-cell md-label="Info">{{ item.description }}</md-table-cell>-->
        <md-table-cell md-label="Worker Found">
          <span v-if="item.worker_found == 0"> No </span>
          <span v-else> Yes </span>
        </md-table-cell>
        <md-table-cell md-label="Worker Name">
          <span v-if="item.worker_name"> {{ item.worker_name }} </span>
          <span v-else> - </span>
        </md-table-cell>
        <md-table-cell md-label="Worker Phone">
          <span v-if="item.worker_phone"> {{ item.worker_phone }} </span>
          <span v-else> - </span>
        </md-table-cell>
        <md-table-cell md-label="State">
          <span v-if="item.state == 0"> not done </span>
          <span v-if="item.state == 1"> done </span>
          <span v-if="item.state == 2"> cancelled </span>
        </md-table-cell>
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
      tasks: [],
    };
  },
  mounted() {
    axios
      .get(
        "http://localhost/TaskMeBack/public/api/posts_by_user/" +
          localStorage.id
      )
      .then((response) => {
        response["data"]["data"].forEach((post) => {
          axios
            .get(
              "http://localhost/TaskMeBack/public/api/task/" +
                post["post"]["task_id"]
            )
            .then((rps) => {

              var ta = {
                id: post["post"]["id"],
                name: rps["data"]["data"]["subject"],
                category: rps["data"]["data"]["categories"]["name"],
                price: post["post"]["price"] + "$",
                date: post["post"]["date"],
                place:
                  post["address"]["country"] +
                  ", " +
                  post["address"]["city"] +
                  ", " +
                  post["address"]["street"] +
                  ", " +
                  post["address"]["postal_code"] +
                  ", " +
                  post["address"]["house_number"],
                description: post["post"]["description"],
                worker_found: post["post"]["worker_found"],
                creation_date: post["post"]["created_at"],
                state: post["post"]["state"],
              };
              if(ta.worker_found){
                ta.worker_name = post["worker"]["worker_name"]
                ta.worker_id = post["worker"]["worker_id"]
                ta.worker_phone = post["worker"]["worker_number"]
              }
              this.tasks.push(ta);
            });
        });
      });
  },
};
</script>
