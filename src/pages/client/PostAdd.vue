<template>
  <div class="wrapper">
    <md-card>
      <md-card-header data-background-color="green" style="text-align : center;">
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
              <md-input type="text" class="padd" v-model="title"></md-input>
              <span class="md-helper-text">a short and simple title helps</span>
            </md-field>
            <div class="invalid-feedback">
              <i class="fas fa-exclamation-triangle fa-xs" style="color : rgba(223, 1, 1, 0.781);"></i> &nbsp;Please specify a title.
            </div>
          </div>

          <div class="md-layout-item md-small-size-100 md-size-30">
            <md-field>
              <label>Price</label>
              <md-input type="text" class="padd" v-model="price"></md-input>
            </md-field>
            <div class="invalid-feedback">
              <i class="fas fa-exclamation-triangle fa-xs" style="color : rgba(223, 1, 1, 0.781);"></i> &nbsp;Please specify a price.
            </div>
          </div>
          <div class="md-layout-item md-small-size-50 md-size-50">
            <md-field>
              <label>Date</label>
              <md-input type="text" class="padd" v-model="date"></md-input>
              <span class="md-helper-text">dd-mm-yyyy</span>
            </md-field>
            <div class="invalid-feedback">
              <i class="fas fa-exclamation-triangle fa-xs" style="color : rgba(223, 1, 1, 0.781);"></i> &nbsp;Please specify a date.
            </div>
          </div>
          <div class="md-layout-item md-small-size-50 md-size-50">
            <md-field>
              <label>Place</label>
              <md-input type="text" class="padd" v-model="price"></md-input>
            </md-field>
            <div class="invalid-feedback">
              <i class="fas fa-exclamation-triangle fa-xs" style="color : rgba(223, 1, 1, 0.781);"></i> &nbsp;Please specify a place.
            </div>
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
  data() {
    return {
      date :"",
      place: "",
      price: "",
      title: "",
    }
  },
  methods: {
    post(){
      var date = this.date.trim();
      var place = this.place.trim();
      var price = this.price.trim();
      var title = this.title.trim();
      var ok=true;
      if(place==""){
        document.getElementsByClassName("invalid-feedback")[3].style["display"]="block";
        ok=false;
      }
      else{
        document.getElementsByClassName("invalid-feedback")[3].style["display"]="none";
      }

      if(date==""){
        document.getElementsByClassName("invalid-feedback")[2].style["display"]="block";
        ok=false;
      }
      else{
        document.getElementsByClassName("invalid-feedback")[2].style["display"]="none";
      }

      if(price==""){
        document.getElementsByClassName("invalid-feedback")[1].style["display"]="block";
        ok=false;
      }
      else{
        document.getElementsByClassName("invalid-feedback")[1].style["display"]="none";
      }

      if(title==""){
        document.getElementsByClassName("invalid-feedback")[0].style["display"]="block";
        ok=false;
      }
      else{
        document.getElementsByClassName("invalid-feedback")[0].style["display"]="none";
      }
      if(ok){
      axios
        .post('http://localhost/TaskMeBack/public/api/ad',JSON.stringify({
          'client_id' : localStorage.id,
          'date' : date,
          'details' : document.getElementsByClassName("txtarea")[0].value,
          'address_id' : place,
          'price' : price,
        }))
        .catch(function (error) {
          console.log(error);
      })}
    },
  }
    
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
*{
  text-align: left;
}
</style>
