<template>
  <div class="wrapper back" :class="{ 'nav-open': $sidebar.showSidebar }">
    <side-bar class="sidebar-nav">
      <sidebar-link v-if="client" to="/client">
        <div
          class="items item1"
          @mouseover="icon_color_in(0)"
          @mouseout="icon_color_out(0)"
        >
          <i style="color: #2c3e50ce;" class="fas fa-hashtag"></i>
          <p>Homepage</p>
        </div>
      </sidebar-link>
      <sidebar-link v-else to="/worker">
        <div
          class="items item1"
          @mouseover="icon_color_in(0)"
          @mouseout="icon_color_out(0)"
        >
          <i style="color: #2c3e50ce;" class="fas fa-hashtag"></i>
          <p>Homepage</p>
        </div>
      </sidebar-link>

      <sidebar-link v-if="client" to="/client/newtask">
        <div
          class="items item2"
          @mouseover="icon_color_in(1)"
          @mouseout="icon_color_out(1)"
        >
          <i style="color: #2c3e50ce;" class="fas  fa-plus"></i>
          <p>New Task</p>
        </div>
      </sidebar-link>
      <sidebar-link v-else to="/worker/tasks">
        <div
          class="items item2"
          @mouseover="icon_color_in(1)"
          @mouseout="icon_color_out(1)"
        >
          <i style="color: #2c3e50ce" class="fas  fa-thumbtack"></i>
          <p>Current Tasks</p>
        </div>
      </sidebar-link>

      <sidebar-link v-if="client" to="/client/postadd">
        <div
          class="items item3"
          @mouseover="icon_color_in(2)"
          @mouseout="icon_color_out(2)"
        >
          <i style="color: #2c3e50ce;" class="fas  fa-audio-description"></i>
          <p>Post Ad</p>
        </div>
      </sidebar-link>
      <sidebar-link v-else to="/worker/ads">
        <div
          class="items item3"
          @mouseover="icon_color_in(2)"
          @mouseout="icon_color_out(2)"
        >
          <i style="color: #2c3e50ce;" class="fas  fa-audio-description"></i>
          <p>Current Ads</p>
        </div>
      </sidebar-link>

      <sidebar-link v-if="client" to="/client/history">
        <div
          class="items item4"
          @mouseover="icon_color_in(3)"
          @mouseout="icon_color_out(3)"
        >
          <i style="color: #2c3e50ce;" class="fas  fa-history"></i>
          <p>History</p>
        </div>
      </sidebar-link>
      <sidebar-link v-else to="/worker/history">
        <div
          class="items item4"
          @mouseover="icon_color_in(3)"
          @mouseout="icon_color_out(3)"
        >
          <i style="color: #2c3e50ce;" class="fas  fa-history"></i>
          <p>History</p>
        </div>
      </sidebar-link>

      <sidebar-link v-if="client" to="/client/user">
        <div
          class="items item5"
          @mouseover="icon_color_in(4)"
          @mouseout="icon_color_out(4)"
        >
          <i style="color: #2c3e50ce;" class="fas  fa-user fa-xs "></i>
          <p>Edit Profile</p>
        </div>
      </sidebar-link>
      <sidebar-link v-else to="/worker/user">
        <div
          class="items item5"
          @mouseover="icon_color_in(4)"
          @mouseout="icon_color_out(4)"
        >
          <i style="color: #2c3e50ce;" class="fas  fa-user fa-xs "></i>
          <p>User Profile</p>
        </div>
      </sidebar-link>
      <div class="side-bottom">
        <span>
          <i style="color: #2c3e50ce; margin-right:0px;" class="fas  fa-user fa-xs "></i>
          <p style="margin-left : 0px">Profile</p>
          <i style="color: #2c3e50ce;margin-right:0px;" class="fas fa-sign-out-alt fa-xs"></i>
          <p style="margin-left : 0px">Logout</p>
        </span>
      </div>
    </side-bar>

    <div class="main-panel">
      <dashboard-content> </dashboard-content>

      <!-- <content-footer v-if="!$route.meta.hideFooter"></content-footer>-->
    </div>
  </div>
</template>

<script>
//import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";

export default {
  components: {
    DashboardContent,
    // ContentFooter,
  },
  props: {
    client: {
      type: Boolean,
    },
  },
  data() {
    return {};
  },
  methods: {
    icon_color_in(i) {
      document.getElementsByTagName("p")[i].style["color"] = "white";
      document.getElementsByTagName("i")[i].style["color"] = "white";
    },
    icon_color_out(i) {
      document.getElementsByTagName("p")[i].style["color"] = "#2c3e50";
      document.getElementsByTagName("i")[i].style["color"] = "#2c3e50ce";
    },
  },
};
</script>

<style scoped>
.items:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  height: 100%;
  width: 3px;
  background-color: #1c1c1c;
  -webkit-transition: width 0.1s ease-in;
  -moz-transition: width 0.1s ease-in;
  -ms-transition: width 0.1s ease-in;
  transition: width 0.1s ease-in;
}

.items {
  display: inline-block;
  width: 100%;
}
.item1:before {
  background-color: #ec1b5a;
}
.item2:before {
  background-color: #337ab7;
}
.item3:before {
  background-color: #45bd81;
}
.item4:before {
  background-color: #f8552c;
}
.item5:before {
  background-color: #973fad;
}

.items:hover:before {
  width: 100%;
  -webkit-transition: width 0.1s ease-in;
  -moz-transition: width 0.1s ease-in;
  -ms-transition: width 0.1s ease-in;
  transition: width 0.1s ease-in;
}

.wrapper {
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
  min-height: 100vh;
}
p {
  text-align: left;
}

.back {
  background: rgb(255, 232, 235);
  background: linear-gradient(
    0deg,
    rgba(255, 232, 235, 0.840756285424326) 5%,
    rgba(109, 213, 250, 0.15448177562040444) 50%,
    rgba(0, 110, 185, 0.14887953472404591) 100%
  );

  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.side-bottom{
  position: absolute;
  bottom : 0;
  left: 0;
  margin : 10px;
  margin-left: 20px;
}
</style>
