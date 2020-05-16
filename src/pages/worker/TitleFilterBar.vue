<template>
        <div class="md-layout">
      <h3
        class="md-layout-item md-medium-size-85 md-xsmall-size-85 md-size-85"
        style="text-align: left;margin-bottom:3px;"
      >
        &nbsp; Tasks :
      </h3>
      <h3 
        class="md-layout-item md-medium-size-10 md-xsmall-size-10 md-size-10"
        >
        <button
          class="btn more"
          style="width: 120px; height: auto;"
          @click="showFilters"
        >
         {{filters}}
        </button>
      </h3>
      <component 
        v-bind:is="filterComp" 
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
        style="text-align:center;"
      ></component>
        </div>
</template>

<script>
export default {
    
}
</script>