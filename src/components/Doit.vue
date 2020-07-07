<template>
    <div class="wrapper">
        <h2 v-if="this.post=='task'"> Do  {{post}}  </h2>
        <h2 v-else> Answer this ad </h2>
        <div>
            <span>
            Are you sure you want to take up this {{post}} ?
            </span>
            <br>
            <div>
            <button
              class="btn btn-sm"
              @click='hide'
              style="float: left;"
            >
              No
            </button>
            <button
              class="btn btn-sm"
              @click="yess"
              style="float: right;"
            >
              Yes
            </button>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name:"doit",
    props:{
        post : {
            type : String,
        },
        id : {
            type :Number
        },
        client:{
            type : String,
        },
        worker:{
            type : String,
        },
        creation_date:{
            type : String,
        }
    },
    methods : {
        yess(){
            var info={
                "id" : this.id,
                "client" : this.client,
                "worker" : this.worker,
                "creation_date" : this.creation_date,
            }
            axios.post(
                "http://localhost/TaskMeBack/public/api/editAdWorker",
                JSON.stringify({
                    id: this.id,
                    worker_id: parseInt(localStorage.id)
                }),
                {
                    headers: {
                        "Content-Type": "application/json",
                    }
                }
            );
            
            
            this.$emit("delete_thing",this.id,this.post);
            this.hide();
        }
        ,
        hide(){
            this.$emit("hide");
        }
    },
}
</script>

<style scoped>
button{
    color: white;
    background-color: #337ab7;
    margin: 10px;
    margin-top: 20px;
    width: 50px;
    height: 31px;
}
.wrapper{
    margin: 10px;
}
h2{
    margin-left: 30px;
    margin-bottom: 5px;
}
span{
    margin-left: 20px;
}
button:hover{
    color: white;
}
</style>