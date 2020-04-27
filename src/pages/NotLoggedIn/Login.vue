<template>
  <span>
    <button type="button" class="btn" @click="show">Login</button>

    <modal name="Login" height="auto" :scrollable="true" :draggable="true" width="550px" :adaptive="true">
      <div id="login">
        
        <h2>Login</h2>
        
        <span>
          <label class="sr-only" for="userr">
            Id : 
            </label>
            <input
              id="userr"
              type="text"
              name="username"
              v-model="input.id"
              placeholder="Username"
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
            <div class="wrong_login">Please provide your username and password</div>
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
  name : "Login",
  components : {
  },
  data(){
      return{
        input : {
          id : '' ,
          password : '' 
        }
      };
  },
  methods: {
    show () {
      this.$modal.show('Login');
    },
    hide () {
      this.$modal.hide('Login');
    },
    login(e){
      e.preventDefault();
        this.input.id=this.input.id.trim();
        if( (this.input.id=="") || (this.input.password.trim()=="") ){
         document.getElementsByClassName("wrong_login")[1].style.display="block";
          return;
        }
        else{
          document.getElementsByClassName("wrong_login")[1].style.display="none";
        }
        var user={
          "user_id" : this.input.id, 
          "password": this.input.password
          }

        axios
          .get('http://localhost/TaskMeBack/public/api/login',JSON.stringify(user))
          .then(response => { 
            console.log(response["data"]["data"]);
            if (response["data"]["data"]==""){
              document.getElementsByClassName("wrong_login")[0].style.display="block";
            }
            else{
              localStorage.id=this.input.id;
              localStorage.type=response["data"]["data"]["type"]; //assuming li trajja3li info
              this.$router.push("/"+localStorage.type);
            }
          })
          .catch(function (error) {
            console.log(error);
      });
    },
}

}
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
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 20px;
        margin-bottom: 20px;
        padding: 20px;
}

.ll{
  width: 150px;
    }

.wrong_login{
  display: none;
  color: red;
}
</style>