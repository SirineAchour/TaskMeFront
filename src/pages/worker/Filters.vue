<template>
  <div class="md-layout" >
      <div
        class="md-layout-item md-medium-size-10 md-xsmall-size-0 md-size-10"
      ></div>
    <div class="filter-wrapper md-layout-item md-medium-size-80 md-xsmall-size-100 md-size-80">
      <div class="md-layout">
        <div
          class="filter-input md-layout-item md-medium-size-13 md-xsmall-size-13 md-size-13"
        >
        <v-select :options="countries" placeholder="Country" class="white-it-out"></v-select>
        
        </div>
        <div
          class="filter-input md-layout-item md-medium-size-13 md-xsmall-size-13 md-size-13"
        >
          <v-select :options="cities" placeholder="City" class="white-it-out"></v-select>
        </div>
        <div
          v-if="this.task"
          class="filter-input md-layout-item md-medium-size-13 md-xsmall-size-13 md-size-13"
        >
          <v-select :options="categories" placeholder="Categories" class="white-it-out"></v-select>
        </div>
        <div
          class="filter-input md-layout-item md-medium-size-13 md-xsmall-size-13 md-size-13"
        >
          <v-select :options="[1,2,3,4,5]" placeholder="Min Rating" class="white-it-out"></v-select>
        </div>
        <div
          class="filter-input md-layout-item md-medium-size-13 md-xsmall-size-13 md-size-13"
        >
          <input type="date" style="margin-top: 6px;" />
        </div>

        <div
          class="action-btns md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
        >
          <button type="reset" class="btn">
            Reset
          </button>
          <button type="submit" class="btn">
            Search
          </button>
        </div>
      </div>
    </div>
    <div
        class="md-layout-item md-medium-size-10 md-xsmall-size-0 md-size-10"
      ></div>
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"><br> </div>
  </div>
</template>

<script>
export default {
  props:{
    task:{
      type : Boolean,
    },
  }
};
</script>

<style scoped>
.filter-wrapper {
  border: 0.5px solid black;
  padding: 10px;
  border-radius: 5px;
  width: 700px;

  
}
.action-btns {
  padding-top: 5px;
  padding-bottom: 5px;
  text-align: right;
}

.white-it-out{
  background-color:white;
  border-radius: 5px;
}
.filter-input{
  padding: 5px;
}
</style>
