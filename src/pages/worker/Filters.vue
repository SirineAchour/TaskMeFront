<template>
  <div class="md-layout" >
      <div
        class="md-layout-item md-medium-size-15 md-xsmall-size-0 md-size-15"
      ></div>
    <div class="filter-wrapper md-layout-item md-medium-size-70 md-xsmall-size-100 md-size-70">
      <div class="md-layout">
        <div
          class="filter-input md-layout-item md-medium-size-13 md-xsmall-size-13 md-size-1"
        >
        <v-select :options="countries" placeholder="Country" class="white-it-out"></v-select>
        
        </div>
        <div
          class="filter-input md-layout-item md-medium-size-13 md-xsmall-size-13 md-size-13"
        >
          <v-select :options="cities" placeholder="City" class="white-it-out"></v-select>
        </div>
        <div
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
          Date
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
        class="md-layout-item md-medium-size-15 md-xsmall-size-0 md-size-15"
      ></div>
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"><br> </div>
  </div>
</template>

<script>
export default {};
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
</style>
