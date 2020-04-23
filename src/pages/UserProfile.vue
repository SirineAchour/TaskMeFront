<template>
  <div class="content md-layout" style="padding-top:0px;margin-top:2px;">
    <div class="md-layout-item md-medium-size-70 md-xsmall-size-100 md-size-70" style="margin-top:0px;"> 
        <md-card>
          <md-card-header data-background-color="purple">
            <h4 class="title">Edit Profile</h4>
            <!--<p class="category">Complete your profile</p>-->
          </md-card-header>

          <md-card-content>
            <div class="md-layout">
              <div class="md-layout-item md-small-size-100 md-size-33">
                <md-field>
                  <label>ID: {{user.cin}}</label>
                  <md-input disabled></md-input>
                </md-field>
              </div>
              <div class="md-layout-item md-small-size-100 md-size-33">
                <md-field>
                  <label>First Name: {{user.firstName}}</label>
                  <md-input type="text" disabled></md-input>
                </md-field>
              </div>
              <div class="md-layout-item md-small-size-100 md-size-33">
                <md-field>
                  <label>Last Name: {{user.LastName}}</label>
                  <md-input type="text" disabled></md-input>
                </md-field>
              </div>
              <div class="md-layout-item md-small-size-100 md-size-50">
                <md-field>
                  <label>Email Address</label>
                  <md-input v-model="email_update" type="email" :placeholder="user.email"></md-input>
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
                <vue-tel-input :placeholder="user.phone" v-model="tel_update"> </vue-tel-input>
              </div>
              <div class="md-layout-item md-small-size-100 md-size-100 stuff">
                <label
                  for="dob_client"
                  class="col-form-label stuff"
                  style="margin-right:35px;"
                  >Birth date :</label
                >
                <input id="dob_client" type="date" :value="user.birthday"/>
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

              <div class="md-layout-item md-size-100 text-right">
                <md-button class="md-raised" data-background-color="purple" @click="update"
                  >Update Profile</md-button
                >
              </div>
            </div>
          </md-card-content>
        </md-card>
    </div>
    <div class="md-layout-item md-medium-size-30 md-xsmall-size-100 md-size-30">
      <br>
      <md-card class="md-card-profile">
        <div class="md-card-avatar">
          <img class="img" :src="user.cardUserImage" />
        </div>

        <md-card-content>
          <h6 v-if="user.verified" class="category text-gray">verified</h6>
          <h6 v-else class="category text-gray">not verified</h6>
          <h4 class="card-title">{{ nom }} {{ prenom }}</h4>
          <h6 class="category text-gray">{{ cin }}</h6>
          <rate :length="5" :value="user.rating" :readonly="true" />
        </md-card-content>
      </md-card>
    </div>
  </div>
</template>

<script>
export default {
  props : {
    email_update : String,
    password_update : String,
    tel_update : String,
    birthday_update : String,
  },
  data() {
    return {
      user : 
    {    cardUserImage: require("@/assets/img/faces/marc.jpg"),
        rating: "3",
        prenom: "Name",
        nom: "Lastname",
        verified: true,
        cin: "12556321",
        email:"",
        phone : "12345678",
        birthday : "1998-12-03"}
    }
  },
  created() {
    // fill e stuff here
    
    this.nom="Lastname";
    this.prenom="Firstname";
    this.verified="true";
    this.cin="125456321";
    this.rating="3";
    this.cardUserImage=require("@/assets/img/faces/marc.jpg");
    this.email="emaiiil@email.email";
    this.phone="87654321";
    this.birthday="1998-12-03";
  },
  mounted(){
      //gender !!!!!!!all dom stuff must be fl mounted
  /*  var id=""
    axios
          .get('http://localhost/Taskme/public/api/user'+id)
          .then(response => (this.user = response["data"]["data"]))
    var gender="male";
    document.getElementById(gender+"_client_edit").checked = true;*/
  },
  methods :{
    update(){
      
      console.log("it works yay");
      console.log("email_update : "+ this.email_update);
      console.log("password_update : "+ this.password_update);
      console.log("tel_update : "+ this.tel_update);
      console.log("birthday : "+ this.birthday);
      if(document.getElementById("female_client_edit").checked == true)
        console.log("female");
      else if(document.getElementById("male_client_edit").checked == true)
        console.log("male");
        else 
          console.log("other");
      
    }
  }
};
</script>

<style scoped>
.radio-inline {
  margin: 20px;
}
.padd {
  padding-top: 15px;
}
.stuff {
  margin-top: 20px;
}
</style>