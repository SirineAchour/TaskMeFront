<template>
  <div class="wrapper">
    <md-card>
      <md-card-header data-background-color="green">
        <h4 class="title">Post Add</h4>
        <p class="category">
          Please provide as many details as possible as to avoid
          misunderstandings
        </p>
      </md-card-header>

      <md-card-content>
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-70">
            <md-field>
              <label>Title</label>
              <md-input type="text" class="padd"></md-input>
              <span class="md-helper-text">a short and simple title helps</span>
            </md-field>
          </div>

          <div class="md-layout-item md-small-size-100 md-size-30">
            <md-field>
              <label>Price</label>
              <md-input type="text" class="padd"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-50 md-size-50">
            <md-field>
              <label>Date</label>
              <md-input type="text" class="padd"></md-input>
              <span class="md-helper-text">dd-mm-yyyy</span>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-50 md-size-50">
            <md-field>
              <label>Place</label>
              <md-input type="text" class="padd"></md-input>
            </md-field>
          </div>

          <div class="md-layout-item md-small-size-100 md-size-100">
            <br />
            <textarea
              class="txtarea padd"
              type="text"
              rows="10"
              cols="150"
              placeholder="Details"
            ></textarea>
          </div>

          <div class="md-layout-item md-size-100 text-right">
            <md-button
              class="md-raised"
              data-background-color="green"
              @click="post"
              >Post</md-button
            >
          </div>
        </div>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
.wrapper {
  margin-left: 148px;
  margin-right: 148px;
}
.txtarea {
  border: 1px solid rgba(0, 0, 0, 0.308);
  width: 100%;
  padding: 4px;
  margin: 5px;
}
</style>
