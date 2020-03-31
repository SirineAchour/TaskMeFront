<template>
  <div class="wrapper">
    <h2>Report</h2>
    <div>
      <center>
        <br />
        <input class="form-check-input" type="checkbox" id="issue1" />
        <label class="form-check-label" for="issue1">
          Worker never showed up
        </label>
<br>
        <input class="form-check-input" type="checkbox" id="issue2"  />
        <label class="form-check-label" for="issue2">
          Issue 2
        </label>
<br>
        <input class="form-check-input" type="checkbox" id="issue3"  />
        <label class="form-check-label" for="issue3">
          Issue 3
        </label>
<br>
        <input class="form-check-input" type="checkbox" id="other" @change="other" />
        <label class="form-check-label" for="other">
          Other ?
        </label>
<br><br>
        <textarea v-if="otherr" cols="50" placeholder=">> Other issues">
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
    }
  },
  data(){
      return{
          otherr : false,
      }
  },
  methods: {
    report() {
        var issues = document.getElementsByClassName("form-check-input")
      console.log(
        "report this " +
          this.type +
          " (" +
          this.id +
          ") for : ");
        issues.forEach(function(issue){
            if (issue.checked){
                if(issue.id=="other"){
                    console.log(document.getElementsByTagName("textarea")[0].value)
                }
                console.log(issue.id)
            }
        })
      this.hide();
    },
    hide() {
      this.$emit("hide");
    },
    other(){
        if(this.otherr)
            this.otherr=false;
        else
            this.otherr=true
    }
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
