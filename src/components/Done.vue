<template>
    <div class="wrapper">
        <h2> Done ! </h2>
        
        <div class="md-layout">
            <span class="plz-rate">
              Please rate the {{client_worker}} :
            </span>
            <rate :length="5" v-model="rating" :readonly="false" />
            <button
              class="btn btn-sm align-self-start mr-auto"
              @click='hide'
              
            >
              cancel
            </button>
            <button
              class="btn btn-sm align-self-end ml-auto"
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
            default : "0"
        },
        client_worker:{
            type: String,
            default : "worker"
        }
    },
    methods:{
        done(){
            console.log("this "+this.type+" ("+this.id+") is done with a rating : "+this.rating);
            this.hide();
        },
        hide(){
            this.$emit("hide")
        }
    },
}
</script>

<style scoped>
.plz-rate{
  margin-top: 9px;
  margin-left: 20px;
}
button{
    color: white;
    background-color: #ec1b5aa6;
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