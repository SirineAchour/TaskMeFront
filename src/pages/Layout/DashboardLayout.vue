<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <notifications></notifications>

    <side-bar class="sidebar-nav">
      
      <sidebar-link :to="dashboard">
        <div class="items item1">
          <i class="fas fa-hashtag"></i>
          <p>Dashboard</p>
        </div>
      </sidebar-link>
      <sidebar-link v-if="client" to="/client/newtask">
        <div class="items item2">
          <i class="fas fa-plus"></i>
          <p>New Task</p>
        </div>
      </sidebar-link>
      <sidebar-link v-else to="/worker/tasks">
        <div class="items item2">
          <i class="fas fa-thumbtack"></i>
          <p>Current Tasks</p>
        </div>
      </sidebar-link>
      <sidebar-link v-if="client" to="/client/postadd">
        <div class="items item3">
          <i class="fas fa-audio-description"></i>
          <p>Post Ad</p>
        </div>
      </sidebar-link>
      <sidebar-link v-else to="/worker/ads">
        <div class="items item3">
          <i class="fas fa-audio-description"></i>
          <p>Current Ads</p>
        </div>
      </sidebar-link>
      <sidebar-link :to="history">
        <div class="items item4">
          <i class="fas fa-history"></i>
          <p>History</p>
        </div>
      </sidebar-link>

            <sidebar-link :to="user_update">
        <div class="items item5">
          <i class="fas fa-user fa-xs "></i>
          <p>User Profile</p>
        </div>
      </sidebar-link>
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>

   <!--   <fixed-plugin :color.sync="sidebarBackground"> </fixed-plugin>-->

      <dashboard-content :user_id="1234"> </dashboard-content>

     <!-- <content-footer v-if="!$route.meta.hideFooter"></content-footer>-->
    </div>
  </div>
</template>

<script>
import TopNavbar from "./TopNavbar.vue";
//import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
//import FixedPlugin from "./Extra/FixedPlugin.vue";

export default {
  components: {
    TopNavbar,
    DashboardContent,
   // ContentFooter,
  //  FixedPlugin
  },
  props :{
    client: {
      type : Boolean
    },
  },
  data(){
    return{
      dashboard:"",
      history:"",
      user_update:"",
    }
  },
  updated(){
    var type=""
    if(this.client){
      type="client"
    }
    else{
      type="worker"
      }
    this.dashboard="/"+type+"/dashboard-"+type
    this.history="/"+type+"/history"
    this.user_update="/"+type+"/user"

    console.log(" type :"+type);
    console.log(" dashboard link : "+this.dashboard)
    console.log(" history link : "+this.history)
    console.log(" user update link : "+this.user_update)

    console.log("client prop : "+this.client)
  }
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
}

.items:hover {
  color: white;
}

p:hover{
  color: white;
}
</style>
