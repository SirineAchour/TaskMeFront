<template>
  <span>
    <button type="button" class="btn" @click="show_client" id="button1">
      Sign Up As Client
    </button>
    <span>
      or
    </span>
    <button type="button" class="btn" @click="show_worker" id="button2">
      Sign Up As Worker
    </button>
    <modal
      name="SignUpClient"
      height="auto"
      :scrollable="true"
      :draggable="false"
      width="600px"
      :adaptive="true"
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
    >
      <SignUpWorker />
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
    SignUpWorker,
  },
  methods: {
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
  },
};
</script>

<style scoped>
button {
  margin-left: 10px;
  margin-right: 10px;
  width: auto;
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
img {
  border: darkslategrey;
  border-width: 1px;
}
span {
  font-size: 19px;

  text-align: center;
  color: #414141;

  margin-bottom: 1 px;
  margin-top: 1 px;
}
</style>