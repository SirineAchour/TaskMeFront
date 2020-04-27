<template>
  <div class="wrapper">
    <br />
    <md-card>
      <md-card-header data-background-color="blue">
        <h4 class="title">New Task</h4>
        <p class="category">
          Please provide as many details as possible as to avoid
          misunderstandings
        </p>
      </md-card-header>

      <md-card-content>
        <div class="md-layout">
          <div class="md-layout-item md-small-size-50 md-size-30">
            <br />
            <select
              class="form-control form-control-lg"
              name="category"
              id="validationCustom03"
              @change="ChangecatList()"
              required
              style="border : 1px solid grey;"
            >
              <option value="" disabled selected>Category </option>
              <option
                v-for="category in categories_tasks"
                :key="category.name"
                :value="category.name"
                >{{ category.name }}</option
              >
            </select>
            <div class="invalid-feedback">
              <i
                class="fas fa-exclamation-triangle fa-xs"
                style="color : rgba(223, 1, 1, 0.781);"
              ></i>
              &nbsp;Please provide a category.
            </div>
          </div>

          <div class="md-layout-item md-small-size-50 md-size-30">
            <br />
            <select
              class="form-control form-control-lg"
              id="validationCustom04"
              name="activity"
              required
              @change="taskPrice"
              style="border : 1px solid grey;"
            >
              <option value="" disabled selected> Task </option>
            </select>
          </div>

          <div class="md-layout-item md-small-size-100 md-size-40">
            <md-field>
              <label>Price : {{ prix }}</label>
              <md-input type="text" class="padd" disabled></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-50 md-size-50">
            <md-field>
              <label>Date</label>
              <md-input type="text" class="padd" v-model="date"></md-input>
              <span class="md-helper-text">dd-mm-yyyy</span>
            </md-field>
            <div class="invalid-feedback">
              <i
                class="fas fa-exclamation-triangle fa-xs"
                style="color : rgba(223, 1, 1, 0.781);"
              ></i>
              &nbsp;Please set a date.
            </div>
          </div>
          <div class="md-layout-item md-small-size-50 md-size-50">
            <md-field>
              <label>Place</label>
              <md-input type="text" class="padd" v-model="place"></md-input>
            </md-field>
            <div class="invalid-feedback">
              <i
                class="fas fa-exclamation-triangle fa-xs"
                style="color : rgba(223, 1, 1, 0.781);"
              ></i>
              &nbsp;Please specify a place.
            </div>
          </div>

          <div class="md-layout-item md-small-size-100 md-size-100">
            <br />
            <textarea
              class="txtarea padd"
              type="text"
              rows="5"
              cols="150"
              placeholder="Details"
            ></textarea>
          </div>

          <div class="md-layout-item md-size-100 text-right">
            <md-button
              class="md-raised"
              data-background-color="blue"
              @click="send"
              >New Task</md-button
            >
          </div>
        </div>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: "",
      place: "",
      prix: "",
      categories_tasks: [],
      selected_task_id: "",
    };
  },
  methods: {
    send() { //working on it 
      var date = this.date.trim();
      var place = this.place.trim();
      var ok = true;
      if (place == "") {
        document.getElementsByClassName("invalid-feedback")[2].style[
          "display"
        ] = "block";
        ok = false;
      } else {
        document.getElementsByClassName("invalid-feedback")[2].style[
          "display"
        ] = "none";
      }

      if (date == "") {
        document.getElementsByClassName("invalid-feedback")[1].style[
          "display"
        ] = "block";
        ok = false;
      } else {
        document.getElementsByClassName("invalid-feedback")[1].style[
          "display"
        ] = "none";
      }

      var cat = document.getElementsByTagName("select")[0].value;
      
      if (cat == "") {
        document.getElementsByClassName("invalid-feedback")[0].style[
          "display"
        ] = "block";
        ok = false;
      } else {
        document.getElementsByClassName("invalid-feedback")[0].style[
          "display"
        ] = "none";
      }
      if (ok) {
        axios
          .post(
            "http://localhost/TaskMeBack/public/api/post",
            JSON.stringify({
              id: "",
              task_id: this.task_id, // task number in list
              client_id: localStorage.id,
              worker_found: false,
              worker_id: "",
              date: this.date,
              description: document.getElementsByClassName("txtarea")[0].value,
              address_id: this.place,
              issues: "",
              state: "new",
            })
          )
          .catch(function(error) {
            console.log(error);
          });
      }
    },
    taskPrice() { //done
      var select_task = document.getElementById("validationCustom04");
      var select_category=document.getElementById("validationCustom03")
      var opt = select_task.options[select_task.selectedIndex];
      for(let i=0; i!=this.categories_tasks.length;i++){
        if(select_category.options[select_category.selectedIndex].text==this.categories_tasks[i].name){
          for(let j=0; j!=this.categories_tasks[i].tasks.length; j++){
            if(select_task.options[select_task.selectedIndex].text==this.categories_tasks[i].tasks[j].subject){
              this.selected_task_id=this.categories_tasks[i].tasks[j].id;
              this.prix = this.categories_tasks[i].tasks[j].price;
            }
          }
          
        }
      }
      
    },
    ChangecatList() { //done
      var catList = document.getElementById("validationCustom03");
      var actList = document.getElementById("validationCustom04");
      var selCat = catList.options[catList.selectedIndex].value;
      while (actList.options.length) {
        actList.remove(0);
      }
      for (i = 0; i != this.categories_tasks.length; i++) {
        if (this.categories_tasks[i].name == selCat)
          var tas = this.categories_tasks[i].tasks;
      }

      if (tas) {
        var i;
        for (i = 0; i < tas.length; i++) {
          var ta = new Option(tas[i].subject, i);
          actList.options.add(ta);
        }
      }
      this.taskPrice();
    },
  },
  created() {
    axios
      .get("http://localhost/TaskMeBack/public/api/categories")
      .then((response) => {
        this.categories_tasks = [];
        var categories = response["data"]["data"];
        categories.forEach((category) => {
          axios
            .get(
              "http://localhost/TaskMeBack/public/api/tasks_by_category/" +
                category.name
            )
            .then((response) => {
              this.categories_tasks.push({
                name: category.name,
                tasks: response["data"]["data"],
              });
            });
        });
      });
  },
};
</script>
<style scoped>
* {
  text-align: left;
}
.wrapper {
  margin-left: 148px;
  margin-right: 148px;
}
.scrolling-wrapper {
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
}
.card {
  display: inline-block;
}
.txtarea {
  border: 1px solid rgba(0, 0, 0, 0.308);
  width: 100%;
  padding: 4px;
  margin: 5px;
}
</style>
