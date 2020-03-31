<template>
  <div>
    <br>
    <img :src="imgLogo" alt="logo" height="300" width="300" />
    <br>
    <br>
    <About />
    <NotLoggedIn/>
  </div>
</template>

<script>
import NotLoggedIn from "./NotLoggedIn/NotLoggedIn.vue";
import About from "./NotLoggedIn/About.vue";


export default {
  name: "Homepage",
  components: {
    NotLoggedIn,
    About
  },
  data(){
    return {
      imgLogo: require("@/assets/img/logo-2.png")
    }
  },
  created () {
      var test=false;
      //check session stuff 
      if(test) {
      $emit.
      this.$router.push("/client");
      }
  }
};
</script>

<style scoped>
* {
  text-align: center;
  color: #2c3e50; 
}

</style>
