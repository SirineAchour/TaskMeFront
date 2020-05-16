<template>
  <div class="wrap">
    <div class="div1">
      <div class="md-layout">
        <span
          class=" md-layout-item md-medium-size-50 md-xsmall-size-50 md-size-50"
          style="text-align:left;"
        >
          <a href="#steps" class="btn sss" style="color: #414141;">
            Step-by-Step Guide
          </a>
        </span>
        <span
          class="md-layout-item md-medium-size-50 md-xsmall-size-50 md-size-50"
          style="text-align:right;"
          ><Login
        /></span>
      </div>
      <img :src="imgLogo" alt="logo" height="100" width="100" />
      <br><br>
      <span style="font-family: 'Permanent Marker';font-size:60px;">
          Task Me 
      </span>
      <br />
      <About />

      <br />
      <SignUp />
    </div>

    <div id="steps" class="div2 md-layout">
      <div class="client">
        <div style="font-size:27px;">Client</div>
<br>
        <div class="flip-card ">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img
                src="../assets/img/stepa.jpg"
                alt="Avatar"
                style="width:180px;height:180px;border-radius: 50%;"
              />
            </div>
            <div class="flip-card-back">
              <br />
              <p class="step_p">
                <strong>Sign up as a Client</strong> <br />
                Creating a client account allows you to look for people to
                accomplish certain tasks for you as well as post ads to be
                answered by workers.
              </p>
            </div>
          </div>
        </div>
<br>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img
                src="../assets/img/stepb.jpg"
                alt="Avatar"
                style="width:180px;height:180px;border-radius: 50%;"
              />
            </div>
            <div class="flip-card-back">
              <br />
              <p class="step_p">
                <strong>New task</strong> <br />
                When you create a task, we'll match you with a worker. <br />
                Once the work is done, a rating process takes place.
              </p>
            </div>
          </div>
        </div>
<br>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img
                src="../assets/img/stepc.jpg"
                alt="Avatar"
                style="width:180px;height:180px;border-radius: 50%;"
              />
            </div>
            <div class="flip-card-back">
              <br />
              <p class="step_p">
                <strong>Post ad </strong> <br />
                Once an ad is posted, workers get to choose whether to take on
                the job or to reject it.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="worker">
        <div style="font-size:27px;">Worker</div>
<br>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img
                src="../assets/img/stepab.jpg"
                alt="Avatar"
                style="width:180px;height:180px;border-radius: 50%;"
              />
            </div>
            <div class="flip-card-back">
              <br />
              <p class="step_p">
                <strong>Sign up as a worker</strong> <br />
                Creating a worker account allows you to take on jobs posted by
                client accounts.
              </p>
            </div>
          </div>
        </div>
<br>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img
                src="../assets/img/stepbb.jpg"
                alt="Avatar"
                style="width:180px;height:180px;border-radius: 50%;"
              />
            </div>
            <div class="flip-card-back">
              <br />
              <p class="step_p">
                <strong>Browse tasks</strong> <br />
                While browsing tasks, you can choose which ones to take on.
                <br />
                You can then go to Current tasks to view the ones you're
                currently working on.
              </p>
            </div>
          </div>
        </div>
<br>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img
                src="../assets/img/stepcb.jpg"
                alt="Avatar"
                style="width:180px;height:180px;border-radius: 50%;"
              />
            </div>
            <div class="flip-card-back">
              <br />
              <p class="step_p">
                <strong>Browse ads</strong> <br />
                While browsing ads, you can choose which ones to take on. <br />
                You can then go to Current Ads to view the ones you're currently
                working on.
              </p>
            </div>
          </div>
        </div>
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
      imgLogo: require("@/assets/img/mini-logo.png"),
    };
  },
  mounted() {
    document.getElementsByTagName("body")[0].classList.add("bg");
  },
  destroyed() {
    document.getElementsByTagName("body")[0].classList.remove("bg");
  },
  created() {
    if (this.$session.exists()) {
      this.$router.push("/" + localStorage.type);
    }
  },
};
</script>

<style>
* {
  text-align: center;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
}

::-webkit-scrollbar-track {
  -webkit-box-shadow: none !important;
  background-color: transparent;
}
::-webkit-scrollbar {
  width: 3px !important;
  background-color: transparent;
}
::-webkit-scrollbar-thumb {
  background-color: transparent;
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
  background: rgb(122, 139, 159);
  background: linear-gradient(
    180deg,
    rgba(122, 139, 159, 0.8995798148360907) 0%,
    rgba(51, 122, 183, 0.6026610473290879) 59%,
    rgba(133, 190, 238, 0.8211484422870711) 100%
  );
  width: 100%;
  height: 100%;
  overflow: auto;
  min-height: 100vh;
  overflow-y: hidden;
}
.client,
.worker {
  width: 50%;
  height: 100%;
  min-height: 100vh;
  text-align: center;
  color: white;
  font-size: 24px;
  padding-top: 20px;
  float: left;
}
.worker {
  border-left: 2px dashed white;
}
.sss {
  background-color: white;
  font-size: 16px;
  border: 2px solid rgba(238, 174, 202, 0.8687674899061186);
  text-align: left;
  margin-top: 20px;
  margin-bottom: 0;
}
.sss:hover {
  background-color: rgba(238, 174, 202, 0.8687674899061186);
}

.flip-card {
  background-color: transparent;
  width: 180px;
  height: 180px;
  perspective: 1000px;
  /*margin: 10px;*/
  display: block;
  margin-left: auto;
  margin-right: auto;
  /*  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  -webkit-border-radius: 99em;
  -moz-border-radius: 99em;
  border-radius: 99em;
  border: 5px solid #eee;
  box-shadow: 0 3px 2px rgba(0, 0, 0, 0.3);*/
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 50%;
}

.flip-card-front {
  background-color: #bbb;
  color: black;
}

.flip-card-back {
  background-color: rgba(51, 122, 183);
  color: white;
  transform: rotateY(180deg);
}

.step_p {
  padding: 11px;
  padding-top: 1px;
  margin-top: 0;
  font-size: 12px;
  margin: 0;
}

strong {
  font-weight: bold;
  font-size: 13px;
}

html {
  scroll-behavior: smooth;
}
</style>