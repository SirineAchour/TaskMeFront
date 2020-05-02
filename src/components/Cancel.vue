<template>
    <div class="wrapper">
        <h2>
            
             {{delete_remove}} {{post}}</h2>
        
        <div>
            <span>
            Are you sure you want to {{delete_remove}} this {{post}} ?
            </span>
            <br>
            <div>
            <button
              class="btn btn-sm cancel"
              @click='hide'
              style="float: left;"
            >
              No
            </button>
            <button
              class="btn btn-sm cancel"
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
    name:"cancel",
    props:{
        post : {
            type : String,
        },
        id : {
            type :String
        },
        delete_remove :{
            type: String,
            default: "Delete"
        },
        client_worker:{
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
        color:{
            type :  String,
            default : "#337ab7",
        }
    },
    methods : {
        yess(){
            if(this.client_worker=="client"){
                if(this.post=="task"){
                    axios.delete('http://localhost/TaskMeBack/public/api/post/'+this.id);
                }
            }
            this.$emit("delete_thing",this.id,this.post);
            this.hide();
        }
        ,
        hide(){
            this.$emit("hide");
        }
    },
    mounted(){
        if(this.client_worker!="client")
            this.delete_remove=="Remove"
        document.getElementsByClassName("cancel")[0].style["background-color"]=this.color;
        document.getElementsByClassName("cancel")[1].style["background-color"]=this.color;
    }
}
</script>

<style scoped>
button{
    color: white;
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