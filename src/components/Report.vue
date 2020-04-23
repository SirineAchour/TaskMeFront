<template>
  <div class="wrapper">
    <h2>Report</h2>
    <div>
      <center>
        <br>
        <textarea cols="50" placeholder=">>Issues" id="report_t">
        </textarea>
      </center>
    </div>

    <div>
      <button class="btn btn-sm" @click="hide" style="float: left; background-color:#797979a6;">
        Cancel
      </button>
      <button class="btn btn-sm" @click="report" style="float: right; background-color:red;">
        Report
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "report",
  props: {
    type: {
      type: String
    },
    id: {
      type: String
    },
    client:{
            type : String,
        },
    worker:{
       type : String,
    },
        creation_date:{
            type : String,
        },
  },
  data(){
      return{
     }
  },
  methods: {
    report() {
      var info={
                "id" : this.id,
                "client" : this.client,
                "worker" : this.worker,
                "creation_date" : this.creation_date,
                "report" : document.getElementById("report_t").textContent,
            }
            axios.get('http://localhost/Taskme/public/api/'+this.type+'/report',JSON.stringify(info));
      this.hide();
    },
    hide() {
      this.$emit("hide");
    },
  }
};
</script>

<style scoped>
button {
  color: white;
  background-color: #ec1b5aa6;
  margin: 10px;
  margin-top: 20px;
  width: 59px;
  height: 31px;
}
button:hover{
    color: white;
}
.wrapper {
  margin: 10px;
}
h2 {
  margin-left: 20px;
  margin-bottom: 0px;
}
</style>
