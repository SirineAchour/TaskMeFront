<template>
  <div class="wrapper">
    <h2>Done !</h2>

    <div class="md-layout">
      <span class="plz-rate"> Please rate the {{ client_worker }} : </span>
      <rate :length="5" v-model="rating" :readonly="false" />
      <button class="btn btn-sm align-self-start mr-auto done" @click="hide">
        cancel
      </button>
      <button class="btn btn-sm align-self-end ml-auto done" @click="done">
        done
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "done",
  data() {
    return {
      rating: "5",
    };
  },
  props: {
    type: {
      type: String,
    },
    id: {
      type: Number,
    },
    client_worker: {
      type: String,
      default: "worker",
    },
    client: {
      type: String,
    },
    worker: {
      type: Number,
    },
    creation_date: {
      type: String,
    },
    table: {
      type: Array,
    },
    color: {
      type: String,
      default: "#337ab7",
    },
  },
  methods: {
    done() {
        if(localStorage.type=="client" && !this.worker){
            this.hide();
            return;
        }
        var info = {
          id: this.id,
          state: 1,
          rating: this.rating,
        };
        if (localStorage.type == "client") {
          var url = "http://localhost/TaskMeBack/public/api/editPostState";
          if(this.type == 'ad'){
            url = "http://localhost/TaskMeBack/public/api/editAdState";
          }
          axios.post(
            url,
            JSON.stringify(info),
            {
              headers: {
                "Content-Type": "application/json",
              }
            }
          );
          info.id = this.worker;
        } else {
          info.id = this.client;
        }
        axios.post(
          "http://localhost/TaskMeBack/public/api/addRating",
          JSON.stringify(info),
          {
            headers: {
              "Content-Type": "application/json",
            }
          }
        );
        console.log(this.id)
        console.log(this.type)
        this.$emit("done_thing", this.id, this.type);
      this.hide();
    },
    hide() {
      this.$emit("hide");
    },
  },
  mounted() {
    document.getElementsByClassName("done")[0].style[
      "background-color"
    ] = this.color;
    document.getElementsByClassName("done")[1].style[
      "background-color"
    ] = this.color;
  },
};
</script>

<style scoped>
.plz-rate {
  margin-top: 9px;
  margin-left: 20px;
}
button {
  color: white;
  margin: 10px;
  margin-top: 20px;
  width: 59px;
  height: 31px;
}
.wrapper {
  margin: 10px;
}
h2 {
  margin-left: 20px;
  margin-bottom: 5px;
}
button:hover {
  color: white;
}
</style>
