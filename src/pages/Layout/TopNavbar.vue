<template>
  <md-toolbar md-elevation="0" class="md-transparent">
    <div class="md-toolbar-row">
      <div class="md-toolbar-section-start">
        <h3 class="md-title">{{ $route.name }}</h3>
      </div>
      <div class="md-toolbar-section-end">
        <md-button
          class="md-just-icon md-simple md-toolbar-toggle"
          :class="{ toggled: $sidebar.showSidebar }"
          @click="toggleSidebar"
        >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </md-button>

        <div class="md-collapse">
 <!--         <div class="search">
            <md-autocomplete
              
              :md-options="options"
              v-model="value"
            >
              <label>Search...</label>
            </md-autocomplete>
          </div> -->
          <md-list> <!-- IM NOT SURE HOW NOTIFICATIONS ARE GONNA WORK -->
            <li class="md-list-item">
              <div class="md-list-item-content">
                <drop-down>
                  <md-button
                    slot="title"
                    class="md-button md-just-icon md-simple"
                    data-toggle="dropdown"
                  >
                    <md-icon>notifications</md-icon>
                    <span class="notification">{{notifications_size}}</span>
                    <p class="hidden-lg hidden-md">Notifications</p>
                  </md-button>
                  <ul class="dropdown-menu dropdown-menu-right" >
                    <li v-for="(notification,index) in notifications" v-bind:key="index"><a href="#"> {{notification}}</a></li>
                  </ul>
                </drop-down>
              </div>
            </li>

            <li class="md-list-item">
              <div class="md-list-item-content">
                <drop-down>
                  <md-button
                    slot="title"
                    class="md-button md-just-icon md-simple"
                    data-toggle="dropdown"
                  >
                    <i class="material-icons">person</i>
                  </md-button>
                    <div
                      class="dropdown-menu dropdown-menu-right center-main-container" 
                      style="text-align:center;"
                    > <!-- idk kifech im gonna get l pic-->
                          <img class="img" :src="user.cardUserImage" width="80px" height="80px"/>

                          <h6 class="category text-gray">{{ user.verified }}</h6>
                          <h4 class="card-title">{{ user.firstName }} {{ user.LastName }}</h4>
                          <h6 class="category text-gray">{{ user.cin }}</h6>
                          <rate :length="5" :value="user.rating" :readonly="true"/>
                  </div>
                </drop-down>
              </div>
            </li>
          </md-list>
        </div>
      </div>
    </div>
  </md-toolbar>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      user : 
    {rating: "3",
    prenom: "Name",
    nom: "Lastname",
    verified: "Verified",
    cin: "12556321",
    cardUserImage: require("@/assets/img/faces/marc.jpg"),
    options : [],
    value : ""},
    
    notifications : [
      "found worker for task 1",
      "found worker for ad 1",
      "found worker for ad 2"
    ],
    notifications_size : 3,
    };
  },
  methods: {
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    }
  },
  mounted(){
    /*
    var id=""
    axios
          .get('http://localhost/TaskMeBack/public/api/notifcations'+id) // mafammech l route
          .then(response => (this.notifications = response["data"]["data"]))
    this.notifications_size=this.notifications.size
    axios
          .get('http://localhost/TaskMeBack/public/api/user'+id) // mafammech l route
          .then(response => (this.user = response["data"]["data"]))*/
  }
};
</script>

<style lang="css">
</style>
