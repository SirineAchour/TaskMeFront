<template>
  <div class="wrapper md-layout">
    <div class="md-layout-item md-small-size-70 md-size-70">
      <md-card>
        <md-card-header
          data-background-color="red"
          style="text-align : center;"
        >
          <h4 class="title">Post Ad</h4>
          <p class="category">
            Please provide as many details as possible as to avoid
            misunderstandings
          </p>
        </md-card-header>

        <md-card-content>
          <div class="md-layout">
            <div class="md-layout-item md-small-size-100 md-size-70">
              <md-field>
                <label>Title</label>
                <md-input type="text" class="padd" v-model="title"></md-input>
                <span class="md-helper-text"
                  >a short and simple title helps</span
                >
              </md-field>
              <div class="invalid-feedback">
                <i
                  class="fas fa-exclamation-triangle fa-xs"
                  style="color : rgba(223, 1, 1, 0.781);"
                ></i>
                &nbsp;Please specify a title.
              </div>
            </div>

            <div class="md-layout-item md-small-size-100 md-size-30">
              <md-field>
                <label>Pay</label>
                <md-input type="text" class="padd" v-model="price"></md-input>
              </md-field>
              <div class="invalid-feedback">
                <i
                  class="fas fa-exclamation-triangle fa-xs"
                  style="color : rgba(223, 1, 1, 0.781);"
                ></i>
                &nbsp;Please specify the payment.
              </div>
            </div>
            <div class="md-layout-item md-small-size-33 md-size-33 ">
              <md-field>
                <label>Date</label>
                <md-input type="text" class="padd" v-model="date"></md-input>
                <span class="md-helper-text">yyyy-mm-dd</span>
              </md-field>
              <div class="invalid-feedback">
                <i
                  class="fas fa-exclamation-triangle fa-xs"
                  style="color : rgba(223, 1, 1, 0.781);"
                ></i>
                &nbsp;Please specify a date.
              </div>
            </div>
            <div class="md-layout-item md-small-size-33 md-size-33">
              <md-field>
                <label>Country</label>
                <md-input type="text" class="padd" v-model="country"></md-input>
              </md-field>
              <div class="invalid-feedback">
                <i
                  class="fas fa-exclamation-triangle fa-xs"
                  style="color : rgba(223, 1, 1, 0.781);"
                ></i>
                &nbsp;Please specify a country.
              </div>
            </div>
            <div class="md-layout-item md-small-size-33 md-size-33">
              <md-field>
                <label>City</label>
                <md-input type="text" class="padd" v-model="city"></md-input>
              </md-field>
              <div class="invalid-feedback">
                <i
                  class="fas fa-exclamation-triangle fa-xs"
                  style="color : rgba(223, 1, 1, 0.781);"
                ></i>
                &nbsp;Please specify a city.
              </div>
            </div>

            <div class="md-layout-item md-small-size-33 md-size-33">
              <md-field>
                <label>Street</label>
                <md-input type="text" class="padd" v-model="street"></md-input>
              </md-field>
              <div class="invalid-feedback">
                <i
                  class="fas fa-exclamation-triangle fa-xs"
                  style="color : rgba(223, 1, 1, 0.781);"
                ></i>
                &nbsp;Please specify a street.
              </div>
            </div>

            <div class="md-layout-item md-small-size-33 md-size-33">
              <md-field>
                <label>Postal Code </label>
                <md-input type="text" class="padd" v-model="postal_code"></md-input>
              </md-field>
              <div class="invalid-feedback">
                <i
                  class="fas fa-exclamation-triangle fa-xs"
                  style="color : rgba(223, 1, 1, 0.781);"
                ></i>
                &nbsp;Please specify a postal code.
              </div>
            </div>

            <div class="md-layout-item md-small-size-33 md-size-33">
              <md-field>
                <label>House Number </label>
                <md-input type="text" class="padd" v-model="house_number"></md-input>
              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100 md-size-100">
              <br />
              <textarea
                class="txtarea padd"
                type="text"
                rows="5"
                placeholder="Details"
              ></textarea>
            </div>

            <div class="md-layout-item md-size-100 text-right">
              <md-button
                class="md-raised"
                data-background-color="red"
                @click="post"
                >Post</md-button
              >
            </div>
          </div>
        </md-card-content>
      </md-card>
    </div>
    <div class="md-layout-item md-small-size-30 md-size-30">
      <div class="white-box">
        ad space
      </div>
      <div class="white-box">
        ad space
      </div>
      <div class="white-box">
        ad space
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: "",
      country: "",
      city : "",
      street : "",
      house_number : "",
      postal_code : "",
      price: "",
      title: "",
    };
  },
  created(){
 /*   if (!this.$session.exists() || localStorage.type=="worker") {
      this.$router.push('/');
      return;
    }*/
  },
  methods: {
    post() {
      var date = this.date.trim();
      var country = this.country.trim();
      var city = this.city.trim();
      var postal_code = this.postal_code.trim();
      var street = this.street.trim();
      var price = this.price.trim();
      var title = this.title.trim();
      var ok = true;
if (country == "") {
        document.getElementsByClassName("invalid-feedback")[3].style[
          "display"
        ] = "block";
        ok = false;
      } else {
        document.getElementsByClassName("invalid-feedback")[3].style[
          "display"
        ] = "none";
      }

      if (city == "") {
        document.getElementsByClassName("invalid-feedback")[4].style[
          "display"
        ] = "block";
        ok = false;
      } else {
        document.getElementsByClassName("invalid-feedback")[4].style[
          "display"
        ] = "none";
      }

      if (postal_code == "") {
        document.getElementsByClassName("invalid-feedback")[5].style[
          "display"
        ] = "block";
        ok = false;
      } else {
        document.getElementsByClassName("invalid-feedback")[5].style[
          "display"
        ] = "none";
      }

      if (street == "") {
        document.getElementsByClassName("invalid-feedback")[6].style[
          "display"
        ] = "block";
        ok = false;
      } else {
        document.getElementsByClassName("invalid-feedback")[6].style[
          "display"
        ] = "none";
      }

      if (date == "") {
        document.getElementsByClassName("invalid-feedback")[2].style[
          "display"
        ] = "block";
        ok = false;
      } else {
        document.getElementsByClassName("invalid-feedback")[2].style[
          "display"
        ] = "none";
      }

      if (price == "") {
        document.getElementsByClassName("invalid-feedback")[1].style[
          "display"
        ] = "block";
        ok = false;
      } else {
        document.getElementsByClassName("invalid-feedback")[1].style[
          "display"
        ] = "none";
      }

      if (title == "") {
        document.getElementsByClassName("invalid-feedback")[0].style[
          "display"
        ] = "block";
        ok = false;
      } else {
        document.getElementsByClassName("invalid-feedback")[0].style[
          "display"
        ] = "none";
      }
      if (ok) {
        axios
          .post(
            "http://localhost/TaskMeBack/public/api/ad",
            JSON.stringify({
              client_id: localStorage.id,
              date: date,
              description: document.getElementsByClassName("txtarea")[0].value,
              country: this.country.trim(),
              city: this.city.trim(),
              postal_code: this.postal_code.trim(),
              street: this.street.trim(),
              house_number: this.house_number.trim(),
              price: price,
              title: this.title
            }
            ),
            {
              headers: {
                "Content-Type": "application/json"
              }
            }
          ).then((response)=>{
            this.$router.push("/" + localStorage.type);
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    },
  },
};
</script>

<style scoped>
.wrapper {
  margin-left: 28px;
  margin-right: 28px;
  margin-top: 25px;
}
.txtarea {
  border: 1px solid rgba(0, 0, 0, 0.308);
  width: 98%;
  padding: 5px;
  margin: 5px;
}
* {
  text-align: left;
}
.white-box {
  width: 240px;
  height: 145px;
  margin-top: 25px;
  margin-left: 40px;
  margin-right: auto;
  text-align: center;
  background: rgba(255, 255, 255, 0.9);
  padding: 30px;
  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
  border-radius: 5px;
}
</style>
