<template>
  <div class="bg">
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
      if(localStorage.id!="") {
      this.$emit.this.$router.push("/"+localStorage.type);
      }
  }
};
</script>

<style scoped>
* {
  text-align: center;
  color: #2c3e50; 
}
div{
  height: 100%;
  width: 100%;
}


.bg {
  background-image: url("D:/GL3/GL3/Semestre 2/Processus Unifiés/TaskMeFront/src/assets/img/b7.jpg");

  /* Full height */
  height: 100%; 

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

</style>