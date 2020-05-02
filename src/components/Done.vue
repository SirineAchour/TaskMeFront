<template>
    <div class="wrapper">
        <h2> Done ! </h2>
        
        <div class="md-layout">
            <span class="plz-rate">
              Please rate the {{client_worker}} :
            </span>
            <rate :length="5" v-model="rating" :readonly="false"  />
            <button
              class="btn btn-sm align-self-start mr-auto done"
              @click='hide'
              
            >
              cancel
            </button>
            <button
              class="btn btn-sm align-self-end ml-auto done"
              @click="done"
            >
              done
            </button>
        </div>

    </div>
</template>

<script>
export default {
    name : "done",
    props:{
        type :{
            type: String,
        },
        id:{
            type : String,
        },
        rating :{
            type : String,
            default : "5"
        },
        client_worker:{
            type: String,
            default : "worker"
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
        table :{
            type : Array,
        },
        color :{
            type : String,
            default : "#337ab7",
        }
    },
    methods:{
        done(){
            var info={
                "id" : this.id,
                "client" : this.client,
                "worker" : this.worker,
                "creation_date" : this.creation_date,
                "rating" : this.rating,
            }
            axios.get('http://localhost/TaskMeBack/public/api/'+this.type+'/done/'+this.id,JSON.stringify(info));
            this.$emit("done_thing",this.id,this.type);
            this.hide();
        },
        hide(){
            this.$emit("hide")
        }
    },
    mounted(){
        document.getElementsByClassName("done")[0].style["background-color"]=this.color;
        document.getElementsByClassName("done")[1].style["background-color"]=this.color;
    }
}
</script>

<style scoped>
.plz-rate{
  margin-top: 9px;
  margin-left: 20px;
}
button{
    color: white;
    margin: 10px;
    margin-top: 20px;
    width: 59px;
    height: 31px;
}
.wrapper{
    margin: 10px;
}
h2{
    margin-left: 20px;
    margin-bottom: 5px;
}
button:hover{
    color: white;
}
</style>