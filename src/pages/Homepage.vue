<template>
  <div class="wrap">
    <div class="div1">
      <scrollactive class="my-nav">
        <span class="sss btn " style="color: #414141;"
          ><a href="#//" class="scrollactive-item" style="color: #414141;">Step-by-Step Guide</a></span
        >
        <span><Login /></span>
      </scrollactive>

      <img :src="imgLogo" alt="logo" height="300" width="300" />
      <br />
      <br />
      <About />

      <br />
      <SignUp />
    </div>

    <div id="//" class="div2">
      <div class="client">
        client
      </div>

      <div class="worker">
        worker
      </div>
    </div>
  </div>
</template>

<script>
import Login from "./NotLoggedIn/Login.vue";
import SignUp from "./NotLoggedIn/SignUp.vue";
import About from "./NotLoggedIn/About.vue";

export default {
  name: "Homepage",
  components: {
    Login,
    SignUp,
    About,
  },
  data() {
    return {
      imgLogo: require("@/assets/img/logo-2.png"),
    };
  },
  created() {
    console.log("localStorage.id : " + localStorage.id);
    if (localStorage.id != "" && false) {
      this.$emit.this.$router.push("/" + localStorage.type);
    }
  },
  mounted() {
    document.getElementsByTagName("body")[0].classList.add("bg");
  },
  destroyed() {
    document.getElementsByTagName("body")[0].classList.remove("bg");
  },
};
</script>

<style>
* {
  text-align: center;
}

.bg {
  background-image: url("../assets/img/b10.jpg");

  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.my-nav {
  text-align: left;
}

.wrap {
  width: 100%;
  height: 100%;
}

.div1 {
  width: 100%;
  height: 100%;
  min-height: 100vh;
}

.div2 {
 background: rgb(122,139,159);
 opacity: 0.9;
/*background: linear-gradient(180deg, rgba(122,139,159,0.8995798148360907) 0%, rgba(233,137,194,0.8519607672170431) 64%, rgba(255,219,245,0.8911764534915528) 100%); */
  width: 100%;
  height: 100%;
  overflow: auto;
  min-height: 100vh;
}
.client,.worker{
  width: 50%;
  height: 100%;
  min-height: 100vh;
  text-align: center;
  color: white;
  font-size: 24px;
  padding-top: 20px;
  float: left;
}
.worker{
  border-left:2px dashed white;
}
.sss {
  background-color: white;
  font-size: 16px;
  border: 2px solid rgba(238, 174, 202, 0.8687674899061186);
  margin-left: 30px;
  margin-top: 20px;
  margin-bottom: 0;
}
.sss:hover {
  background-color: rgba(238, 174, 202, 0.8687674899061186);
}

</style>
