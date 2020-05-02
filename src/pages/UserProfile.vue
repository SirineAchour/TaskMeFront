<template>
  <div class="md-layout" style="padding-top:0px;margin-top:2px;">
    <div
      class="md-layout-item md-medium-size-70 md-xsmall-size-100 md-size-70"
      style="margin-top:0px;"
    >
      <br />
      <md-card>
        <md-card-header data-background-color="green">
          <h4 style="text-align:center;">Edit Profile</h4>
        </md-card-header>

        <md-card-content>
          <div class="md-layout">
            <div class="md-layout-item md-small-size-100 md-size-33">
              <md-field>
                <label>ID: {{ user.cin }}</label>
                <md-input disabled></md-input>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-33">
              <md-field>
                <label>First Name: {{ user.prenom }}</label>
                <md-input type="text" disabled></md-input>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-33">
              <md-field>
                <label>Last Name: {{ user.nom }}</label>
                <md-input type="text" disabled></md-input>
              </md-field>
            </div>

            <div v-if="this.type=='worker'" class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
                <label>Country: {{ user.country }}</label>
                <md-input type="text" v-model="country"></md-input>
              </md-field>
          </div>
          <div v-if="this.type=='worker'" class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
                <label>City: {{ user.city }}</label>
                <md-input type="text" v-model="city"></md-input>
              </md-field>
          </div>
            <div class="md-layout-item md-small-size-100 md-size-50">
              <md-field>
                <label>Email Address</label>
                <md-input
                  v-model="email_update"
                  type="email"
                  :placeholder="user.email"
                ></md-input>
              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100 md-size-50">
              <md-field>
                <label>Password</label>
                <md-input type="password" v-model="password_update"></md-input>
              </md-field>
            </div>

            <div
              class="md-layout-item md-small-size-15 md-size-15 stuff"
              style="padding-top:7px;"
            >
              Phone :
            </div>
            <div class="md-layout-item md-small-size-80 md-size-80 stuff">
              <vue-tel-input :placeholder="user.phone" v-model="tel_update">
              </vue-tel-input>
            </div>

            <div class="md-layout-item md-small-size-100 md-size-100 stuff">
              <label
                for="dob_client"
                class="col-form-label stuff"
                style="margin-right:35px;"
                >Birth date :</label
              >
              <input id="dob_client" type="date" :value="user.birthday" />
            </div>
            <div class="md-layout-item md-small-size-100 md-size-67">
              <span style="margin-right:20px;" class="padd">Gender : </span>
              <label
                class="form-check-label radio-inline padd"
                for="female_client_edit"
              >
                <input
                  name="gender"
                  type="radio"
                  id="female_client_edit"
                  value="option1"
                  class="padd"
                />
                Female
              </label>
              <label
                class="form-check-label radio-inline padd"
                for="male_client_edit"
              >
                <input
                  name="gender"
                  type="radio"
                  id="male_client_edit"
                  value="option2"
                  class="padd"
                />

                Male
              </label>
              <label
                class="form-check-label radio-inline padd"
                for="other_client_edit"
              >
                <input
                  name="gender"
                  type="radio"
                  id="other_client_edit"
                  value="option3"
                  class="padd"
                />
                Other
              </label>
            </div>

          <div v-if="this.type=='worker'" class="md-layout-item md-small-size-100 md-size-100">
            
            <drag-selector
              v-model="skillSet"
              @change="handleDragSelectorChange"
              class="drag-selector"

            > Skillset : <span class="empty_space"> ____ </span>
              <drag-selector-item
                v-for="(item, index) in skills"
                :value="item"
                :key="index"
                class="drag-selector__item"
                @click="selected_item(item)"
              >
                {{ item.name }}
              </drag-selector-item>
              <br>
              <div class="unselect">
                unselect all
              </div>
            </drag-selector>
         
        </div>
            <div class="md-layout-item md-size-100 text-right">
              <md-button
                class="md-raised"
                data-background-color="green"
                @click="update"
                >Update Profile</md-button
              >
            </div>
          </div>
        </md-card-content>
      </md-card>
    </div>
    <div class="md-layout-item md-medium-size-30 md-xsmall-size-100 md-size-30">
      <br />
      <md-card class="md-card-profile">
        <div class="md-card-avatar">
          <img class="img" :src="user.cardUserImage" />
        </div>

        <md-card-content>
          <h6
            v-if="user.verified"
            class="category text-gray"
            style="text-align:center;"
          >
            verified
          </h6>
          <h6 v-else class="category text-gray" style="text-align:center;">
            not verified
          </h6>
          <h4 class="card-title" style="text-align:center;">
            {{ user.nom }} {{ user.prenom }}
          </h4>
          <h6 class="category text-gray" style="text-align:center;">
            {{ user.cin }}
          </h6>
          <rate
            :length="5"
            :value="user.rating"
            :readonly="true"
            style="text-align:center;"
          />
        </md-card-content>
      </md-card>

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
      skills : [],
      skillSet: [],
      type : "",
      email_update: "",
      password_update: "",
      tel_update: "",
      birthday_update: "",
      user: {
        cardUserImage: require("@/assets/img/faces/marc.jpg"),
        rating: "3",
        prenom: "Name",
        nom: "Lastname",
        verified: true,
        cin: "12556321",
        email: "",
        phone: "12345678",
        birthday: "1998-12-03",
        city : "",
        country : "",
      },
    };
  },
  mounted() {
    axios
      .get("http://localhost/TaskMeBack/public/api/user" + localStorage.id)
      .then((response) => (this.user = response["data"]["data"]));
    this.nom = "Lastname";
    this.prenom = "Firstname";
    this.verified = "true";
    this.cin = "125456321";
    this.rating = "3";
    this.cardUserImage = require("@/assets/img/faces/marc.jpg");
    this.email = "emaiiil@email.email";
    this.phone = "87654321";
    this.birthday = "1998-12-03"; 
    this.country="";
    this.city="";
    var gender = "male";
    document.getElementById(gender + "_client_edit").checked = true;
    this.type=localStorage.type;
    if(this.type=="worker"){
    axios
      .get("http://localhost/TaskMeBack/public/api/categories")
      .then((response) => {
        var categories = response["data"]["data"];
        categories.forEach((category) => {
          this.skills.push({
            "name": category.name
          })
            
        });
      });}
  },
  methods: {
    update() {
      var gender;
      if (document.getElementById("female_client_edit").checked == true)
        gender = "female";
      else if (document.getElementById("male_client_edit").checked == true)
        gender = "male";
      else gender = "other";
      var update_info = {
        id: localStorage.id,
        email: this.email_update,
        password: this.password_update,
        phone: this.tel_update,
        birthday: this.birthday_update,
      };
      axios.post(
        "http://localhost/TaskMeBack/public/api/user_update/" + localStorage.id,
        this.user
      );
    },
  },
};
</script>

<style scoped>
.empty_space{
  opacity: 0;
}
* {
  text-align: left;
}
.radio-inline {
  margin: 20px;
}
.padd {
  padding-top: 15px;
}
.stuff {
  margin-top: 20px;
}
.drag-selector {
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  padding: 10px;
  margin-top: 2px;
  cursor: default;
}

.drag-selector__item {
  width: auto;
  height: 30px;
  margin: 2px;
  margin-top: 0px;
  padding: 7px;
  border-radius: 4px;
  border: 1px solid #45bd81;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: black;
}
.drag-selector__item:hover {
  cursor: pointer;
}
.drag-selector__item.selected {
  background-color: #45bd81;
  color: white;
}
.unselect{
  border-radius: 4px;
  color: white;
  background-color: rgba(223, 1, 1, 0.781);
  width: auto;
  height: 30px;
  margin: 3px;
  margin-top: 0px;
  padding: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.white-box {
  width: auto;
  height: 200px;
  margin-top: 15px;
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
