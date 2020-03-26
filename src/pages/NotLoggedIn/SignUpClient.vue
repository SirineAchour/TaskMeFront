<template>
  <md-card>
    <md-card-header data-background-color="blue">
      <h4 class="title">Sign Up</h4>
      <p class="category">as client or smth</p>
    </md-card-header>

    <md-card-content>
      <span class="uneditable">
        <i class="fas fa-exclamation-triangle fa-xs"></i>
        first name, last name and id fields are uneditable
      </span>
      <form class="md-layout">
        <div class="md-layout-item md-small-size-100 md-size-50">
          <md-field>
            <label>First Name</label>
            <md-input type="text" class="form-control" required></md-input>
          </md-field>
        </div>
        <div class="md-layout-item md-small-size-100 md-size-50">
          <md-field>
            <label>Last Name</label>
            <md-input type="text" required></md-input>
          </md-field>
        </div>
        <div class="md-layout-item md-small-size-100 md-size-33">
          <md-field>
            <label>ID</label>
            <md-input type="text" required></md-input>
          </md-field>
        </div>
        <div class="md-layout-item md-small-size-100 md-size-67">
          <md-field>
            <label>Email Address</label>
            <md-input type="email" required id="mail"></md-input>
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
            <md-input type="password" id="pass" required></md-input>
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
          <input id="dob_worker" type="date" required />
        </div>

        <div
          class="md-layout-item md-small-size-15 md-size-15 stuff"
          style="padding-top:7px;"
        >
          Phone :
        </div>
        <div class="md-layout-item md-small-size-70 md-size-70 stuff">
          <vue-tel-input placeholder="" required> </vue-tel-input>
        </div>

        <center
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
        </center>
        <div class="md-layout-item md-size-100 text-right">
          <md-button
            class="md-raised"
            data-background-color="blue"
            type="submit"
          >
            Sign up
          </md-button>
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
      pass: "",
      con_pass: ""
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
        } else {
          document.getElementById("invalid").classList.add("displayed");
          document.getElementById("valid").classList.remove("displayed");
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
        } else {
          document.getElementById("correct").classList.remove("displayed");
          document.getElementById("wrong").classList.add("displayed");
        }
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
  }
};
</script>

<style scoped>
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
