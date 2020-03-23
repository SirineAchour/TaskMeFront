<template>
<div >
    <br />
    <Login/> <SignUp />

</div>


</template>

<script>
import Login from "./Login.vue";
import SignUp from "./SignUp.vue";

export default {
  name : "NotLoggedIn",
  components : {
    Login,
    SignUp
  },
  methods : {
    swish(value){
      this.$emit('switch',value);
    }
  }
}
</script>

<style scoped>
button {
  margin-left: 10px;
  margin-right: 10px;
  font-size: 20px;
}
* {  
  text-align: center;
  color: #2c3e50;
}
</style>
