<template>
  <div class="wrap">
    <div class="div1">
      <particles/>
      <div class="cr cr-top cr-left" @click="goToSteps">Guide</div>
      <Login />
      <br /><br /><br /><br />
      <div class="stufff">
        <div class="popout">
          <span>T</span>
          <span>A</span>
          <span>S</span>
          <span>K</span><br />

          <div style="padding-top:50px;">
            <span>M</span>
            <span>E</span>
          </div>
        </div>
        <About />

        <br />
        <SignUp />
<br>
        
      </div>
    </div>

    <div id="steps" class="div2 md-layout">
      <particles/>
      <div class="client">
        <div style="font-size:27px;">Client</div>
        <br />
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
                - Look for people to accomplish certain tasks for you <br>
                - Post ads to be answered by workers.
              </p>
            </div>
          </div>
        </div>
        <br />
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
                - Get matched you with a worker <br>
                - Once the work is done, a rating process takes place.
              </p>
            </div>
          </div>
        </div>
        <br />
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
        <br />
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
                Take on jobs posted by client accounts.
              </p>
            </div>
          </div>
        </div>
        <br />
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
                - Choose which tasks to take on. <br>
                - Go to Current tasks to view the ones you're currently
                working on.
              </p>
            </div>
          </div>
        </div>
        <br />
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
                - Choose which ads to take on. <br>
                - Go to Current Ads to view the ones you're currently working on.
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
import Particles from "./NotLoggedIn/Particles.vue";

export default {
  name: "Homepage",
  components: {
    Login,
    SignUp,
    About,
    Particles
  },
  data() {
    return {
      imgLogo: require("@/assets/img/mini-logo.png"),
    };
  },
  created() {
    //check
    if (localStorage.id!="" && localStorage.id!="undefined" && localStorage.api_token!="" && localStorage.api_token!="undefined") {
      this.$router.push("/" + localStorage.type);
    }
  },
  methods : {
    goToSteps(){
      window.location.hash="#steps";
      window.history.pushState("object or string", "Title", "/#/");
    }
  }
};
</script>

<style lang="scss">
.popout {
  font-weight: 900;
  font-size: 80px;
  padding-top: 20px;
  padding-bottom: 40px;
  padding-left: 10px;
  text-align: left;
  @keyframes ani {
    0% {
      transform: translate3d(0, 0, 0);
      text-shadow: 0em 0em 0 lightblue;
      color: black;
    }
    30% {
      transform: translate3d(0, 0, 0);
      text-shadow: 0em 0em 0 lightblue;
      color: black;
    }
    70% {
      transform: translate3d(0.08em, -0.08em, 0);
      text-shadow: -0.08em 0.08em lightblue;
      color: black;
    }
    100% {
      transform: translate3d(0.08em, -0.08em, 0);
      text-shadow: -0.08em 0.08em lightblue;
      color: black;
    }
  }
  span {
    position: relative;
    display: inline-block;
    animation: ani 2s infinite alternate cubic-bezier(0.86, 0, 0.07, 1);
    @for $i from 1 through 3 {
      &:nth-last-child(#{$i}n) {
        animation-delay: -1s * $i/3/2;
      }
    }
  }
}
* {
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
  text-align: center;
}

.div2 {
 background: rgb(126,173,251);
background: linear-gradient(0deg, rgba(126,173,251,0.5158263134355305) 0%, rgba(255,255,255,0) 100%); 
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
  color: #414141;
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
  background-color: rgb(73, 132, 184);
  color: white;
  transform: rotateY(180deg);
}

.step_p {
  padding: 11px;
  padding-top: 1px;
  margin-top: 0;
  font-size: 13px;
  margin: 0;
  
}

strong {
  font-weight: bold;
  font-size: 13px;
}

html {
  scroll-behavior: smooth;
}
.stufff {
  text-align: right;
  width: 70%;
  display: inline-block;
  border-style: solid;
  border-width: 1px;
  border-image: url("../assets/img/borderr.png")  30 ;
  padding: 20px;
}
.cr {
  width: 200px;
  padding: 16px;
  position: absolute;
  font-size: 20px;
  text-align: center;
  color: #f0f0f0;
  background-color: rgba(238, 174, 202, 0.8687674899061186);
  position: fixed;
}
.cr:hover {
  cursor: pointer;
}
.cr-top {
  top: 25px;
}
.cr-left {
  left: -50px;
}
.cr-right {
  right: -50px;
}
.cr-top.cr-left {
  transform: rotate(-45deg);
}
.cr-top.cr-right {
  transform: rotate(45deg);
}
</style>
