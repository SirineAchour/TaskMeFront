<template>
  <span>
  <button type="button" class="btn" @click="show" style="width:90px;">Sign Up</button>
    <modal name="SignUp" height="auto" width="400px">
      <div class="modal-body" id="wrapper">
        <button type="button" class="btn" @click="show_client" id="button1">
          Sign Up As Client
        </button>
        <button type="button" class="btn" @click="show_worker" id="button2">
          Sign Up As Worker
        </button>
      </div>
      <modal
        name="SignUpClient"
        height="auto"
        :scrollable="true"
        :draggable="false"
        width="600px"
        :adaptive="true"
        @before-close="beforeClose"
      >
        <SignUpClient />
      </modal>

      <modal
        name="SignUpWorker"
        height="auto"
        :scrollable="true"
        :draggable="false"
        width="600px"
        :adaptive="true"
        @before-close="beforeClose"
      >
        <SignUpWorker />
      </modal>
    </modal>
  </span>
</template>

<script>
import SignUpClient from "./SignUpClient.vue";
import SignUpWorker from "./SignUpWorker.vue";
export default {
  name: "SignUp",
  components: {
    SignUpClient,
    SignUpWorker
  },
  methods: {
    show() {
      this.$modal.show("SignUp");
    },
    hide() {
      this.$modal.hide("SignUp");
    },
    show_client() {
      this.$modal.show("SignUpClient");
    },
    hide_client() {
      this.$modal.hide("SignUpClient");
    },
    show_worker() {
      this.$modal.show("SignUpWorker");
    },
    hide_worker() {
      this.$modal.hide("SignUpWorker");
    },
    beforeClose() {
      this.hide();
    }
  }
};
</script>

<style scoped>
button {
  margin-left: 10px;
  margin-right: 10px;
  width: 200px;
  height: auto;
  color: #ffffff;
  background-color: #337ab7;
}
button:hover {
  color: #ffffff;
}
#sign {
  width: 500px;
  border: 1px solid #cccccc;
  background-color: #ffffff;
  margin: auto;
  margin-top: 20px;
  padding: 20px;
}
#wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
img{
  border: darkslategrey;
  border-width: 1px;
}
</style>
