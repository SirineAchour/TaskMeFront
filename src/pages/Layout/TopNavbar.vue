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
          <div class="search">
            <md-autocomplete
              
              :md-options="options"
              v-model="value"
            >
              <label>Search...</label>
            </md-autocomplete>
          </div>
          <md-list>
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
                    >
                          <img class="img" :src="cardUserImage" width="80px" height="80px"/>

                          <h6 class="category text-gray">{{ verified }}</h6>
                          <h4 class="card-title">{{ nom }} {{ prenom }}</h4>
                          <h6 class="category text-gray">{{ cin }}</h6>
                          <rate :length="5" :value="rating" :readonly="true"/>
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
    rating: "3",
    prenom: "Name",
    nom: "Lastname",
    verified: "Verified",
    cin: "12556321",
    cardUserImage: require("@/assets/img/faces/marc.jpg"),
    options : [],
    value : "",
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
  }
};
</script>

<style lang="css">
</style>
