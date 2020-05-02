<template>
  <div class="content" style="padding-top:0px;margin-top:2px;">
    <br>
    <div class="md-layout">
      <div
      style="margin-top:0px;"
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
      <center>
        <toggle-button
          :height="height"
          :width="width"
          v-model="toggleSwitch"
          @change="switchHandler"
          :color="{checked: '#f8542b9f', unchecked: '#f8542b9f'}"
          :sync="true"
          :labels="{ checked: 'Tasks', unchecked: 'Ads' }"
          :font-size="font_size"
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
  props:{
    height:{
      type : Number,
      default : 50,
    },
    width:{
      type : Number,
      default : 110,
    },
    font_size:{
      type : Number,
      default : 17,
    },
  },
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
