<template>
  <div>
    <br><br><br>
    <img alt="logo" src="C:/Users/HP/Downloads/vue-material-dashboard-master/vue-material-dashboard-master/src/assets/img/vue-logo.png" />
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
  created () {
            var test=false;
      //check session stuff 
      if(test) {
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
