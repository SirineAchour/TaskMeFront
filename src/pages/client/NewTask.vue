<template>
  <div class="wrapper md-layout">
    <div class="md-layout-item md-small-size-70 md-size-70">
      <md-card>
        <md-card-header data-background-color="purple">
          <h4 class="title">New Task</h4>
          <p class="category">
            Please provide as many details as possible as to avoid
            misunderstandings
          </p>
        </md-card-header>

        <md-card-content>
          <div class="md-layout">
            <div class="md-layout-item md-small-size-50 md-size-33">
              <br />
              
              <v-select 
                :options="categories"
                placeholder="Categories"
                id="validationCustom03"
                :value="selCat"
                v-model="selCat"
                v-on:input="ChangecatList"
                required
              ></v-select>

              <div class="invalid-feedback">
                <i
                  class="fas fa-exclamation-triangle fa-xs"
                  style="color : rgba(223, 1, 1, 0.781);"
                ></i>
                &nbsp;Please provide a category.
              </div>
            </div>

            <div class="md-layout-item md-small-size-50 md-size-33">
              <br />

<v-select 
:options="tasks"
                label="name"
                placeholder="Tasks"
                id="validationCustom04"
                name="activity"
                :value="selTask"
                v-model="selTask"
                v-on:input="taskId"
                required
              ></v-select>

            </div>

            <div class="md-layout-item md-small-size-100 md-size-33">
              <md-field>
                <label>Pay </label>
                <md-input type="text" class="padd" v-model="pay" ></md-input>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-33 md-size-33">
              <md-field>
                <label>Date</label>
                <md-input type="text" class="padd" v-model="date"></md-input>
                <span class="md-helper-text">yyyy-mm-dd</span>
              </md-field>
              <div class="invalid-feedback">
                <i
                  class="fas fa-exclamation-triangle fa-xs"
                  style="color : rgba(223, 1, 1, 0.781);"
                ></i>
                &nbsp;Please set a date.
              </div>
            </div>
            <div class="md-layout-item md-small-size-33 md-size-33">
              <md-field>
                <label>Country</label>
                <md-input type="text" class="padd" v-model="country"></md-input>
              </md-field>
              <div class="invalid-feedback">
                <i
                  class="fas fa-exclamation-triangle fa-xs"
                  style="color : rgba(223, 1, 1, 0.781);"
                ></i>
                &nbsp;Please specify a country.
              </div>
            </div>
            <div class="md-layout-item md-small-size-33 md-size-33">
              <md-field>
                <label>City</label>
                <md-input type="text" class="padd" v-model="city"></md-input>
              </md-field>
              <div class="invalid-feedback">
                <i
                  class="fas fa-exclamation-triangle fa-xs"
                  style="color : rgba(223, 1, 1, 0.781);"
                ></i>
                &nbsp;Please specify a city.
              </div>
            </div>

            <div class="md-layout-item md-small-size-33 md-size-33">
              <md-field>
                <label>Street</label>
                <md-input type="text" class="padd" v-model="street"></md-input>
              </md-field>
              <div class="invalid-feedback">
                <i
                  class="fas fa-exclamation-triangle fa-xs"
                  style="color : rgba(223, 1, 1, 0.781);"
                ></i>
                &nbsp;Please specify a street.
              </div>
            </div>

            <div class="md-layout-item md-small-size-33 md-size-33">
              <md-field>
                <label>Postal Code </label>
                <md-input type="text" class="padd" v-model="postal_code"></md-input>
              </md-field>
              <div class="invalid-feedback">
                <i
                  class="fas fa-exclamation-triangle fa-xs"
                  style="color : rgba(223, 1, 1, 0.781);"
                ></i>
                &nbsp;Please specify a postal code.
              </div>
            </div>

            <div class="md-layout-item md-small-size-33 md-size-33">
              <md-field>
                <label>House Number </label>
                <md-input type="text" class="padd" v-model="house_number"></md-input>
              </md-field>
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
                data-background-color="purple"
                @click="send"
                >New Task</md-button
              >
            </div>
          </div>
        </md-card-content>
      </md-card>
    </div>
    <div class="md-layout-item md-small-size-30 md-size-30">
      <div class="white-box">
        ad space
      </div>
      <div class="white-box">
        ad space
      </div>
      <div class="white-box">
        ad space
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selCat: "",
      selTask: "",
      date: "",
      country: "",
      city : "",
      street : "",
      house_number : "",
      postal_code : "",
      pay: "",
      categories: [],
      tasks: [],
      categories_tasks: [],
      selected_task_id: "",
    };
  },
  methods: {
    send() {
      //working on it
      var date = this.date.trim();
      var country = this.country.trim();
      var city = this.city.trim();
      var postal_code = this.postal_code.trim();
      var street = this.street.trim();
      var pay = this.pay.trim();
      var ok = true;
      if (country == "") {
        document.getElementsByClassName("invalid-feedback")[2].style[
          "display"
        ] = "block";
        ok = false;
      } else {
        document.getElementsByClassName("invalid-feedback")[2].style[
          "display"
        ] = "none";
      }

      if (city == "") {
        document.getElementsByClassName("invalid-feedback")[3].style[
          "display"
        ] = "block";
        ok = false;
      } else {
        document.getElementsByClassName("invalid-feedback")[3].style[
          "display"
        ] = "none";
      }

      if (postal_code == "") {
        document.getElementsByClassName("invalid-feedback")[4].style[
          "display"
        ] = "block";
        ok = false;
      } else {
        document.getElementsByClassName("invalid-feedback")[4].style[
          "display"
        ] = "none";
      }

      if (street == "") {
        document.getElementsByClassName("invalid-feedback")[5].style[
          "display"
        ] = "block";
        ok = false;
      } else {
        document.getElementsByClassName("invalid-feedback")[5].style[
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

      var cat = document.getElementById("validationCustom03").innerText;
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
        console.log(this.country.trim());
        var desc = document.getElementsByClassName("txtarea")[0].value;
        var pp = {
              task_id: this.selected_task_id, // task number in list
              client_id: parseInt(localStorage.id),
              date: this.date,
              description: desc,
              country: this.country.trim(),
              city: this.city.trim(),
              postal_code: parseInt(this.postal_code.trim()),
              street: this.street.trim(),
              house_number: parseInt(this.house_number.trim()),
              price: parseInt(this.pay.trim())
            };
        console.log(pp)
        axios
          .post(
            "http://localhost/TaskMeBack/public/api/post",
            JSON.stringify(
              pp),
            {
              headers: {
                "Content-Type": "application/json"
              }
            }
            
          )
          .catch(function(error) {
            console.log(error);
          });
      }
    },
    taskId() { 
      var select_task = document.getElementById("validationCustom04");
      var select_category = document.getElementById("validationCustom03");
      var opt = this.selTask;
      for (let i = 0; i != this.categories_tasks.length; i++) {
        if (
          this.selCat == this.categories_tasks[i].name
        ) {
          
          for (let j = 0; j != this.categories_tasks[i].tasks.length; j++) {
            if (
              opt == this.categories_tasks[i].tasks[j].subject
            ) {
              this.selected_task_id = this.categories_tasks[i].tasks[j].id;
            }
          }
        }
      }
    },
    ChangecatList() {
      var catList = document.getElementById("validationCustom03");
      this.tasks=[];
     
      for (let i = 0; i != this.categories_tasks.length; i++) {
        if (this.categories_tasks[i].name == this.selCat)
          var tas = this.categories_tasks[i].tasks;
      }
      if (tas) {
        for (let j=0; j < tas.length; j++) {
          var ta = new Option(tas[j].subject,j);
          this.tasks.push(ta.text);
        }
      }
     // this.selTask=this.tasks[0]
    }
  },
  created() {
    axios
      .get("http://localhost/TaskMeBack/public/api/categories")
      .then((response) => {
        this.categories_tasks = [];
        var categories = response["data"]["data"];
        categories.forEach((category) => {
          this.categories.push(category.name);
          axios
            .get(
              "http://localhost/TaskMeBack/public/api/tasks_by_category/" +
                category.name
            )
            .then((rsp) => {
              this.categories_tasks.push({
                name: category.name,
                tasks: rsp["data"]["data"],
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
  margin-left: 28px;
  margin-right: 28px;
  margin-top: 25px;
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

.white-box {
  width: 240px;
  height: 145px;
  margin-top: 25px;
  margin-left: 40px;
  margin-right: auto;
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
