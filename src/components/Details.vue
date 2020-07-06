<template>
  <div class="view">
    <div v-if="this.post.category != ''">
      <h3 style="font-weight:bold;">Task : {{ this.post.title }} <br /></h3>
      <h4>Category : {{ this.post.category }} <br /></h4>
    </div>
    <h3 v-else style="font-weight:bold;">
      Title : {{ this.post.title }} <br />
    </h3>
    <strong> Date : </strong> {{ this.post.date }} <br />
    <strong> Place : </strong> {{ this.post.place }} <br />
    <strong> Pay : </strong> {{ this.post.price }} <br />
    <span v-if="this.type == 'client'">
      <span v-if="this.post.worker_found == true">
        <strong>Worker Name :</strong> {{ this.post.worker_name }} <br />
        <strong>Worker ID : </strong>{{ this.post.worker_id }} <br />
        <strong>Worker Phone Number : </strong>{{ this.post.worker_phone }}
        <br />
      </span>
      <span v-else> <strong>Worker :</strong> not found yet <br /> </span>
    </span>
    <span v-if="this.type == 'worker'">
      <span v-if="this.post.client_name!=null">
        <strong>Client Name :</strong> {{ this.post.client_name }} <br />
        <strong>Client ID : </strong>{{ this.post.client_id }} <br />
        <strong>Client Phone Number : </strong>{{ this.post.client_phone }}
        <br />
      </span>
    </span>
    <strong>Details : </strong>
    <br />
    <div style="margin-left:20px; text-align:left;">
      {{ this.post.details }}
    </div>
    <br />
  </div>
</template>

<script>
export default {
  name: "details",
  props: {
    post: {
      type: Object,
    },
    type: {
      type: String,
    },
  },
  created(){
    console.log("in Details.vue");
    console.log(this.post);
    console.log(this.type);
  }
};
</script>

<style scoped>
.view {
  margin: 10px;
  padding: 10px;
  padding-top: 0px;
  text-align: left;
  /*border: 1px solid lightskyblue;*/
  background-color: #ffffff;
}
</style>
