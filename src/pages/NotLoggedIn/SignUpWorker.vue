<template>
  <md-card>
    <md-card-header data-background-color="blue">
      <h4 class="title">Sign Up</h4>
      <p class="category">as worker</p>
    </md-card-header>

    <md-card-content>
      <span class="uneditable">
        <i
          class="fas fa-exclamation-triangle fa-xs"
          style="color : rgba(223, 1, 1, 0.781);"
        ></i>
        first name, last name and id fields are uneditable
      </span>
      <form class="md-layout" @submit="signup">
        <div class="md-layout-item md-small-size-100 md-size-50">
          <md-field>
            <label>First Name</label>
            <md-input
              type="text"
              class="form-control"
              required
              v-model="first_name"
            ></md-input>
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
            <md-input
              type="email"
              required
              id="mail"
              v-model="email"
            ></md-input>
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
        <div class="md-layout-item md-small-size-100 md-size-50">
          <md-field>
            <label>Country</label>
            <md-input type="text" required v-model="country"></md-input>
          </md-field>
        </div>
        <div class="md-layout-item md-small-size-100 md-size-50">
          <md-field>
            <label>City</label>
            <md-input type="text" required v-model="city"></md-input>
          </md-field>
        </div>
        <div class="md-layout-item md-small-size-100 md-size-100">
          <md-field>
            <label>Password</label>
            <md-input
              type="password"
              id="pass"
              required
              v-model="password"
            ></md-input>
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
          <input id="dob_worker" type="date" required v-model="birth_date" />
        </div>

        <div
          class="md-layout-item md-small-size-15 md-size-15 stuff"
          style="padding-top:7px;"
        >
          Phone :
        </div>
        <div class="md-layout-item md-small-size-70 md-size-70 stuff">
          <vue-tel-input placeholder="" required v-model="phone">
          </vue-tel-input>
        </div>

        <div class="md-layout-item md-small-size-100 md-size-100">
          Skillset :
          <drag-selector
            v-model="skillSet"
            @change="handleDragSelectorChange"
            class="drag-selector"
          >
            <drag-selector-item
              v-for="(item, index) in skills"
              :value="item"
              :key="index"
              class="drag-selector__item"
              @click="selected_item(item)"
            >
              {{ item.name }}
            </drag-selector-item>
            <br />
            <div class="unselect">
              unselect all
            </div>
          </drag-selector>
        </div>
        <div class="md-layout-item md-size-100 text-right">
          <button
            class="md-raised btn"
            data-background-color="blue"
            type="submit"
            style="color : white;"
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
  name: "SignUpWorker",
  data() {
    return {
      username: "",
      first_name: "",
      last_name: "",
      birth_date: "",
      phone: "",
      email: "",
      id: "",
      password: "",
      check_valid_email: true,
      check_valid_password: true,
      check_valid_username: true,
      pass: "",
      con_pass: "",
      country :"",
      city :"",
      skillSet: [],
      skills: [],
    };
  },
  methods: {
    handleDragSelectorChange(list) {
      console.log("list", list);
    },
    valid_mail(e) {
      var mail = e.target.value;
      var mail_input = document.getElementById("mail");

      if (mail != "") {
        if (mail_input.checkValidity()) {
          document.getElementById("valid").classList.add("displayed");
          document.getElementById("invalid").classList.remove("displayed");
          this.check_valid_email = true;
        } else {
          document.getElementById("invalid").classList.add("displayed");
          document.getElementById("valid").classList.remove("displayed");
          this.check_valid_email = false;
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
          this.check_valid_password = true;
        } else {
          document.getElementById("correct").classList.remove("displayed");
          document.getElementById("wrong").classList.add("displayed");
          this.check_valid_password = false;
        }
      }
    },
    check_username_availability(input) {
      //idk yet
      return true;
    },
    check_username() {
      if (
        this.check_username_availability(
          document.getElementById("username").value
        )
      ) {
        document.getElementById("free").classList.add("displayed");
        document.getElementById("used").classList.remove("displayed");
        this.check_valid_username = true;
      } else {
        document.getElementById("used").classList.add("displayed");
        document.getElementById("free").classList.remove("displayed");
        this.check_valid_username = false;
      }
    },
    signup(e) {
      e.preventDefault();
      if (
        this.check_valid_password &&
        this.check_valid_email &&
        this.check_valid_username
      ) {
        var gender = "";
        var ele = document.getElementsByName("gender");
        for (var i = 0; i < ele.length; i++) {
          if (ele[i].checked) gender = ele[i].getAttribute("id");
        }
        if (gender == "gridRadios3_worker") gender = "other";
        if (gender == "gridRadios2_worker") gender = "male";
        if (gender == "gridRadios1_worker") gender = "female";
        var worker = {
          username: this.username,
          firstname: this.first_name,
          last_name: this.last_name,
          gender: gender,
          birth_date: this.birth_date,
          phone: this.phone,
          email: this.email,
          id: this.id, //cin
          password: this.password,
          skillset: this.skillSet,
        };
        var this_var = this;
        axios
          .get(
            "http://localhost/TaskMeBack/public/api/worker/signup",
            JSON.stringify(worker)
          )
          .then((response) => {
            if (response["data"]["data"] != "") {
              localStorage.id = this.username;
              localStorage.type = "worker";
              this_var.$router.push("/worker");
            }
            return;
          })
          .catch(function(error) {
            console.log(error);
          });
      } else {
        console.log("dont submit");
      }
    },
  },
  mounted() {
    var confirm_password = document.getElementById("confirm_password");
    confirm_password.addEventListener("input", this.confirm_p);
    var password = document.getElementById("pass");
    pass.addEventListener("input", this.confirm_p);

    var email = document.getElementById("mail");
    email.addEventListener("input", this.valid_mail);

    document
      .getElementById("username")
      .addEventListener("focusout", this.check_username);

    axios
      .get("http://localhost/TaskMeBack/public/api/categories")
      .then((response) => {
        var categories = response["data"]["data"];
        categories.forEach((category) => {
          this.skills.push({
            name: category.name,
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

.back {
  position: fixed;
  top: 30px;
  right: 200px;
}

.back a {
  padding: 10px 20px;
  color: white;
  border-radius: 4px;
  background-color: #ff4081;
  text-decoration: none;
}
.unselect {
  border-radius: 4px;
  color: white;
  background-color: rgba(223, 1, 1, 0.781);
  width: auto;
  height: 30px;
  margin: 3px;
  padding: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
</style>
