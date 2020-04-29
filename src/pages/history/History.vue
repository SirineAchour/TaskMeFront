<template>
  <div class="content" style="padding-top:0px;margin-top:2px;">
    <div class="md-layout">
      <div
      style="margin-top:0px;"
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
      <center>
        <toggle-button
          height="50"
          width="110"
          v-model="toggleSwitch"
          @change="switchHandler"
          :color="{checked: '#f8542b9f', unchecked: '#f8542b9f'}"
          :sync="true"
          :labels="{ checked: 'Tasks', unchecked: 'Ads' }"
          font-size="17"
        />
      </center>
      </div>
      
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
      
      <component :is='dynamic_comp'>   </component>
      </div>

    </div>
  </div>
</template>

<script>
import TaskHistory from "./TaskHistory.vue";
import AdHistory from "./AdHistory.vue";
export default {
  data() {
    return {
      toggleSwitch: true,
      dynamic_comp : "TaskHistory",
    };
  },
  components: {
    TaskHistory,
    AdHistory
  },
  methods: {
    switchHandler() {
      if(this.dynamic_comp=="AdHistory")
        this.dynamic_comp="TaskHistory";
      else 
        this.dynamic_comp="AdHistory";
    }
  }
};
</script>

<style scoped>

</style>
