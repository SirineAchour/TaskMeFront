<template>
  <md-card>
    <md-card-header data-background-color="blue">
      <h4 class="title">Sign Up</h4>
      <p class="category">as client or smth</p>
    </md-card-header>

    <md-card-content>
      <div class="md-layout">
        <div class="md-layout-item md-small-size-100 md-size-50">
          <md-field>
            <label>First Name</label>
            <md-input type="text" class="form-control"></md-input>
            <div class="invalid-feedback">
              Name please
            </div>
          </md-field>
        </div>
        <div class="md-layout-item md-small-size-100 md-size-50">
          <md-field>
            <label>Last Name</label>
            <md-input type="text"></md-input>
          </md-field>
        </div>
        <div class="md-layout-item md-small-size-100 md-size-33">
          <md-field>
            <label>ID</label>
            <md-input type="text"></md-input>
          </md-field>
        </div>
        <div class="md-layout-item md-small-size-100 md-size-67">
          <md-field>
            <label>Email Address</label>
            <md-input type="email"></md-input>
          </md-field>
        </div>
        <div class="md-layout-item md-small-size-100 md-size-100">
          <md-field>
            <label>Password</label>
            <md-input type="password"></md-input>
          </md-field>
        </div>
        <div class="form-check md-layout-item md-small-size-100 md-size-100">
          <span style="margin-right:20px;"> Gender :</span>
          <label class="form-check-label radio-inline" for="gridRadios1_client">
            <input
              name="gender"
              type="radio"
              id="gridRadios1_client"
              value="option1"
              checked
            />
            Female
          </label>
          <label class="form-check-label radio-inline" for="gridRadios2_client">
            <input
              name="gender"
              type="radio"
              id="gridRadios2_client"
              value="option2"
            />

            Male
          </label>
          <label class="form-check-label radio-inline" for="gridRadios3_client">
            <input
              name="gender"
              type="radio"
              id="gridRadios3_client"
              value="option3"
            />
            Other
          </label>
        </div>
        <div class="md-layout-item md-small-size-100 md-size-100 stuff">
          <label
            for="dob_client"
            class="col-form-label"
            style="margin-right:20px;"
            >Birth date :</label
          >
          <input id="dob_client" type="date" />
        </div>

        <div
          class="md-layout-item md-small-size-15 md-size-15 stuff"
          style="padding-top:7px;"
        >
          Phone :
        </div>
        <div class="md-layout-item md-small-size-70 md-size-70 stuff">
          <vue-tel-input placeholder=""> </vue-tel-input>
        </div>

        <center
          class="md-layout-item md-small-size-100 md-size-70 form-group contract-client"
        >
          <br />
          <input
            class="form-check-input"
            type="checkbox"
            id="contract_check_client"
          />
          <label class="form-check-label" for="contract_check_client">
            Example checkbox checkbox checkbox checkbox
          </label>
        </center>
        <div class="md-layout-item md-size-100 text-right">
          <md-button class="md-raised" data-background-color="blue">
            Sign up
          </md-button>
        </div>
      </div>
    </md-card-content>
  </md-card>
</template>

<script>
export default {
  name: "SignUpClient",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.radio-inline {
  margin: 20px;
}
.stuff {
  margin-bottom: 10px;
  margin-top: 10px;
}
.contract-client {
  color: gray;
}
</style>
