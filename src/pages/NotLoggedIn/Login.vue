<template>
  <span>
    <button type="button" class="btn" @click="show">Login</button>

    <modal name="Login" height="auto" :scrollable="true" :draggable="true" width="550px" :adaptive="true">
      <div id="login">
        
        <h1 class="h3 mb-3 font-weight-normal">Login</h1>
        
        <form @submit.prevent="login">
          <label class="sr-only" for="userr">
            Username : 
            </label>
            <input
              id="userr"
              type="text"
              name="username"
              v-model="input.username"
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
            <br /><br />
            <button type="submit" class="btn btn-lg btn-block">Log In</button>
        </form>
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
          username : '' ,
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
    login() { //token stuff
    }
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
  color: #FFFFFF;
  background-color: #337ab7;
}
button:hover{
  color: #FFFFFF;
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
</style>