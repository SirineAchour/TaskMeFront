<template>
    <div class="wrapper">
        <h2>
            
             {{delete_cancel}} {{post}} </h2>
        
        <div>
            <span>
            Are you sure you want to {{delete_cancel}} this {{post}} ?
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
              @click="yes"
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
    name:"cancel",
    props:{
        post : {
            type : String,
        },
        id : {
            type :String
        },
        delete_cancel :{
            type: String,
            default: "delete"
        },
        client_worker:{
            type: String,
            default: "client"
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
    methods : {
        yes(){
            console.log("delete this "+this.post+" :"+this.id)
            var info={
                "id" : this.id,
                "client" : this.client,
                "worker" : this.worker,
                "creation_date" : this.creation_date,
            }
            axios.get('http://localhost/Taskme/public/api/'+this.type+'/delete',JSON.stringify(info));
            this.hide();
        }
        ,
        hide(){
            this.$emit("hide");
        }
    },
    created(){
        if(this.client_worker=="client"){
            this.delete_cancel="delete"
        }
        else
            this.delete_cancel="cancel"
    }
}
</script>

<style scoped>
button{
    color: white;
    background-color: #ec1b5aa6;
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