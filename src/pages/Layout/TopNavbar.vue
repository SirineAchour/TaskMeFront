<template>
  <md-toolbar md-elevation="0" class="md-transparent">
    <div class="md-toolbar-row">
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
        </div>
      </div>
    </div>
  </md-toolbar>
</template>

<script>
export default {
  methods: {
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    }
  }
};
</script>

<style lang="css">
*{
  font-family: Inconsolata,Cabin, Avenir, Helvetica, Arial, sans-serif;
  font-size: 17px;
}
</style>
