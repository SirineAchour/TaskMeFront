<template>
  <md-card>
    <md-card-header data-background-color="blue">
      <h4 class="title">Sign Up</h4>
      <p class="category">as client </p>
    </md-card-header>

    <md-card-content>
      <span class="uneditable">
        <i class="fas fa-exclamation-triangle fa-xs" style="color : rgba(223, 1, 1, 0.781);"></i>
        first name, last name and id fields are uneditable
      </span>
      <form class="md-layout" @submit="signup">
        <div class="md-layout-item md-small-size-100 md-size-100">
          <md-field>
            <label >Username</label>
            <md-input type="text" class="form-control" required v-model="username" id="username" ></md-input>
            <span
              class="md-helper-text invalid-feedback"
              style="color : rgba(223, 1, 1, 0.781);"
              id="used"
              ><i class="fas fa-exclamation-triangle fa-xs"></i>
              Username already in use 
            </span>
            <span
              class="md-helper-text valid-feedback"
              style="color : green;"
              id="free"
            >
              <i class="fas fa-check fa-xs"></i>
              Available username </span
            >
          </md-field>
        </div>
        <div class="md-layout-item md-small-size-100 md-size-50">
          <md-field>
            <label>First Name</label>
            <md-input type="text" class="form-control" required v-model="first_name"></md-input>
          </md-field>
        </div>
        <div class="md-layout-item md-small-size-100 md-size-50">
          <md-field>
            <label>Last Name</label>
            <md-input type="text" required v-model="last_name"></md-input>
          </md-field>
        </div>
        <div class="md-layout-item md-small-size-100 md-size-33">
          <md-field>
            <label>ID</label>
            <md-input type="text" required v-model="id"></md-input>
          </md-field>
        </div>
        <div class="md-layout-item md-small-size-100 md-size-67">
          <md-field>
            <label>Email Address</label>
            <md-input type="email" required id="mail" v-model="email"></md-input>
            <span
              class="md-helper-text invalid-feedback"
              style="color : rgba(223, 1, 1, 0.781);"
              id="invalid"
              ><i class="fas fa-exclamation-triangle fa-xs"></i>
              Please provide a valid email
            </span>
            <span
              class="md-helper-text valid-feedback"
              style="color : green;"
              id="valid"
            >
              <i class="fas fa-check fa-xs"></i>
              Valid email</span
            >
          </md-field>
        </div>
        <div class="md-layout-item md-small-size-100 md-size-100">
          <md-field>
            <label>Password</label>
            <md-input type="password" id="pass" required v-model="password"></md-input>
          </md-field>
        </div>
        <div class="md-layout-item md-small-size-100 md-size-100">
          <md-field>
            <label>Confirm password</label>
            <md-input type="password" id="confirm_password" required></md-input>
            <span
              class="md-helper-text invalid-feedback"
              style="color : rgba(223, 1, 1, 0.781);"
              id="wrong"
              ><i class="fas fa-exclamation-triangle fa-xs"></i>Wrong
              password</span
            >
            <!-- 7 -->
            <span
              class="md-helper-text valid-feedback"
              style="color : green;"
              id="correct"
            >
              <i class="fas fa-check fa-xs"></i>
              Correct</span
            >
          </md-field>
        </div>
        <div class="form-check md-layout-item md-small-size-100 md-size-100">
          <span style="margin-right:20px;"> Gender :</span>
          <label class="form-check-label radio-inline" for="gridRadios1_worker">
            <input
              name="gender"
              type="radio"
              id="gridRadios1_worker"
              value="option1"
              checked
            />
            Female
          </label>
          <label class="form-check-label radio-inline" for="gridRadios2_worker">
            <input
              name="gender"
              type="radio"
              id="gridRadios2_worker"
              value="option2"
            />

            Male
          </label>
          <label class="form-check-label radio-inline" for="gridRadios3_worker">
            <input
              name="gender"
              type="radio"
              id="gridRadios3_worker"
              value="option3"
            />
            Other
          </label>
        </div>
        <div class="md-layout-item md-small-size-100 md-size-100 stuff">
          <label
            for="dob_worker"
            class="col-form-label"
            style="margin-right:20px;"
            >Birth date :</label
          >
          <input id="dob_worker" type="date" required v-model="birth_date"/>
        </div>

        <div
          class="md-layout-item md-small-size-15 md-size-15 stuff"
          style="padding-top:7px;"
        >
          Phone :
        </div>
        <div class="md-layout-item md-small-size-70 md-size-70 stuff">
          <vue-tel-input placeholder="" required v-model="phone" > </vue-tel-input>
        </div>

<!--        <center
          class="md-layout-item md-small-size-100 md-size-70 form-group contract-worker"
        >
          <br />
          <input
            class="form-check-input"
            type="checkbox"
            id="contract_check_worker"
            required
          />
          <label class="form-check-label" for="contract_check_worker">
            Example checkbox checkbox checkbox checkbox
          </label>
        </center> -->
        <div class="md-layout-item md-size-100 text-right">
          <button
            class="md-raised btn"
            data-background-color="blue"
            type="submit"
            style="color: white"
          >
            Sign up
          </button>
        </div>
      </form>
    </md-card-content>
  </md-card>
</template>

<script>
export default {
  name: "SignUpClient",
  data() {
    return {
      username : "",
      first_name : "",
      last_name : "",
      birth_date : "",
      phone : "",
      email : "",
      id : "",
      password : "",
      check_valid_email: true,
      check_valid_password: true,
      check_valid_username : true,
      pass: "",
      con_pass: "",
    };
  },
  methods: {
    valid_mail(e) {
      var mail = e.target.value;
      var mail_input = document.getElementById("mail");

      if (mail != "") {
        if (mail_input.checkValidity()) {
          document.getElementById("valid").classList.add("displayed");
          document.getElementById("invalid").classList.remove("displayed");
          this.check_valid_email=true;
        } else {
          document.getElementById("invalid").classList.add("displayed");
          document.getElementById("valid").classList.remove("displayed");
          this.check_valid_email=false;
        }
      }
    },
    confirm_p(e) {
      var con_pass = document.getElementById("confirm_password").value;
      var pass = document.getElementById("pass").value;
      if (pass != "" && con_pass != "") {
        if (con_pass == pass) {
          document.getElementById("correct").classList.add("displayed");
          document.getElementById("wrong").classList.remove("displayed");
                    this.check_valid_password=true;
        } else {
          document.getElementById("correct").classList.remove("displayed");
          document.getElementById("wrong").classList.add("displayed");
                    this.check_valid_password=false;

        }
      }
    },
    check_username_availability(input){
     //idk
      return true;
    },
    check_username(){
        if (this.check_username_availability(document.getElementById("username").value)) {
          document.getElementById("free").classList.add("displayed");
          document.getElementById("used").classList.remove("displayed");
          this.check_valid_username=true;
        } else {
          document.getElementById("used").classList.add("displayed");
          document.getElementById("free").classList.remove("displayed");
          this.check_valid_username=false;
        }
    },
    signup(e){
      e.preventDefault();
      if(this.check_valid_password && this.check_valid_email && this.check_valid_username){
        var gender="";
          var ele = document.getElementsByName('gender'); 
          for(var i = 0; i < ele.length; i++) { 
            if(ele[i].checked) 
            gender = ele[i].getAttribute("id");
          } 
          if(gender == "gridRadios3_worker") gender="other";
          if(gender == "gridRadios2_worker") gender="male";
          if(gender == "gridRadios1_worker") gender="female";
        var client = {
          "username" : this.username,
          "firstname" : this.first_name,
          "last_name" : this.last_name,
          "gender" : gender,
          "birth_date" : this.birth_date,
          "phone" : this.phone,
          "email" : this.email,
          "id" : this.id, //cin 
          "password" : this.password,
        };
        var this_var=this;
          axios
          .get('http://localhost/Taskme/public/api/client/signup',JSON.stringify(client))
          .then(response => { 
            if(response["data"]["data"]!=""){
              localStorage.id=this.username;
              localStorage.type="client";
              this_var.$router.push("/client");
            }  
            return;
          }).catch(function (error) {
            console.log(error);
          });
      }else{
        console.log("dont submit")
      }
    }
  },
  mounted() {
    var confirm_password = document.getElementById("confirm_password");
    confirm_password.addEventListener("input", this.confirm_p);
    var password = document.getElementById("pass");
    pass.addEventListener("input", this.confirm_p);

    var email = document.getElementById("mail");
    email.addEventListener("input", this.valid_mail);

    document.getElementById("username").addEventListener("focusout", this.check_username);
  }
};
</script>

<style scoped>
*{
  text-align: left;
}
.radio-inline {
  margin: 20px;
}
.stuff {
  margin-bottom: 10px;
  margin-top: 10px;
}
.contract-worker {
  color: gray;
}
.displayed {
  display: block;
}
i {
  margin-right: 5px;
}

.uneditable {
  color: rgba(223, 1, 1, 0.781);
}
</style>