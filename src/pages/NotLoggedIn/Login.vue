<template>
  <span>
    <div class="cr cr-top cr-right" @click="show">Login</div>
    <modal
      name="Login"
      height="auto"
      :scrollable="true"
      :draggable="true"
      width="550px"
      :adaptive="true"
    >
      <div id="login">
        <h2>Login</h2>

        <span>
          <label class="sr-only" for="userr">
            Email :
          </label>
          <input
            id="userr"
            type="text"
            name="username"
            v-model="input.email"
            placeholder="Email"
            class="form-control"
          />
          <br />
          <label class="sr-only" for="passs">
            Password :
          </label>
          <input
            id="passs"
            type="password"
            name="password"
            v-model="input.password"
            placeholder="Password"
            class="form-control"
          />
          <br />
          <div class="wrong_login">Wrong password or username</div>
          <div class="wrong_login">
            Please provide your username and password
          </div>
          <br />

          <div>
            <button class="btn ll" @click="login">Log In</button>
          </div>
        </span>
      </div>
    </modal>
  </span>
</template>

<script>
export default {
  name: "Login",
  components: {},
  data() {
    return {
      input: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    show() {
      this.$modal.show("Login");
    },
    hide() {
      this.$modal.hide("Login");
    },
    login(e) {
      e.preventDefault();
      this.input.email = this.input.email.trim();
      if (this.input.email == "" || this.input.password.trim() == "") {
        document.getElementsByClassName("wrong_login")[1].style.display =
          "block";
        return;
      } else {
        document.getElementsByClassName("wrong_login")[1].style.display =
          "none";
      }
      var user = {
        email: this.input.email.trim(),
        password: this.input.password.toString(),
      };
console.log(user)
      axios
        .post(
          "http://localhost/TaskMeBack/public/api/login",
          JSON.stringify(user),
          {
              headers: {
                "Content-Type": "application/json",
              },
            }
        )
        .then((response) => {
          localStorage.api_token = response["data"]["data"]["api_token"];
          localStorage.type = response["data"]["data"]["user_type"];
          localStorage.id = response["data"]["data"]["info"]["user_id"];
          this.$router.push("/" + localStorage.type);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
* {
  text-align: center;
  color: #2c3e50;
}
button {
  margin-left: 10px;
  margin-right: 10px;
  width: 90px;
  height: auto;
  color: #ffffff;
  background-color: #337ab7;
}
button:hover {
  color: #ffffff;
}
#login {
  width: 500px;
  border: 1px solid #cccccc;
  background-color: #ffffff;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 20px;
}

.ll {
  width: 150px;
}

.wrong_login {
  display: none;
  color: red;
}

.logg {
  background-color: white;
  font-size: 16px;
  color: #414141;
  border: 2px solid rgba(238, 174, 202, 0.8687674899061186);
  margin-top: 20px;
  margin-bottom: 0;
  margin-right: 0;
}
.logg:hover {
  color: white;
  background-color: rgba(238, 174, 202, 0.8687674899061186);
}
</style>