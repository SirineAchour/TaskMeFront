<template>
  <div class="wrapper">
    <br>
    <md-card>
      <md-card-header data-background-color="blue">
        <h4 class="title" >New Task</h4>
        <p class="category">
          Please provide as many details as possible as to avoid
          misunderstandings
        </p>
      </md-card-header>

      <md-card-content>
        <div class="md-layout">
          <div class="md-layout-item md-small-size-50 md-size-30">
            <br />
            <select
              class="form-control form-control-lg"
              name="category"
              id="validationCustom03"
              @change="ChangecatList()"
              required
              style="border : 1px solid grey;"
            >
              <option value="" disabled selected>Category </option>
              <option value="Care">Care</option>
              <option value="Cleaning">Cleaning</option>
              <option value="Computer">Computer related</option>
              <option value="Errands">Errands</option>
              <option value="Events">Events</option>
              <option value="Gardening">Gardening</option>
              <option value="Organizing">Organizing</option>
              <option value="Res/App">Reservations/Appointments</option>
              <option value="Other">Other...</option>
            </select>
            <div class="invalid-feedback">
              <i class="fas fa-exclamation-triangle fa-xs" style="color : rgba(223, 1, 1, 0.781);"></i> &nbsp;Please provide a category.
            </div>
          </div>

          <div class="md-layout-item md-small-size-50 md-size-30">
            <br />
            <select
              class="form-control form-control-lg"
              id="validationCustom04"
              name="activity"
              required
              @change="taskPrice"
              style="border : 1px solid grey;"
            >
              <option value="" disabled selected> Task </option>
            </select>
          </div>

          <div class="md-layout-item md-small-size-100 md-size-40">
            <md-field>
              <label>Price : {{ prix }}</label>
              <md-input type="text" class="padd" disabled></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-50 md-size-50">
            <md-field>
              <label>Date</label>
              <md-input type="text" class="padd" v-model="date"></md-input>
              <span class="md-helper-text">dd-mm-yyyy</span>
            </md-field>
            <div class="invalid-feedback">
              <i class="fas fa-exclamation-triangle fa-xs" style="color : rgba(223, 1, 1, 0.781);"></i> &nbsp;Please set a date.
            </div>
          </div>
          <div class="md-layout-item md-small-size-50 md-size-50">
            <md-field>
              <label >Place</label>
              <md-input type="text" class="padd" v-model="place"></md-input>
            </md-field>
            <div class="invalid-feedback">
              <i class="fas fa-exclamation-triangle fa-xs" style="color : rgba(223, 1, 1, 0.781);"></i> &nbsp;Please specify a place.
            </div>
          </div>

          <div class="md-layout-item md-small-size-100 md-size-100">
            <br />
            <textarea
              class="txtarea padd"
              type="text"
              rows="5"
              cols="150"
              placeholder="Details"
            ></textarea>
          </div>

          <div class="md-layout-item md-size-100 text-right">
            <md-button class="md-raised" data-background-color="blue" @click="send"
              >New Task</md-button
            >
          </div>
        </div>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date :"",
      place: "",
      prix: "",
      catAndActs: {
        Care: [
          "Babysitting",
          "Dog walking",
          "Pet sitting",
          "Take an elderly person shopping"
        ],
        Cleaning: [
          "Clean boat",
          "Clean fridge",
          "Clean out attic/basement",
          "Clean pool and empty skimmers",
          "Clean room",
          "Clean up after a party",
          "Clean/organize gardening and yard tools",
          "Do Laundry",
          "Full house cleaning",
          "Polish/buff shoe collection",
          "Wash car",
          "Wash dishes"
        ],
        Computer: [
          "Enter data into an Excel doc",
          "Set up blog",
          "Teach basic computer skills"
        ],
        Errands: [
          "Buy tickets for an event",
          "Deliver car for maintenance and inspections",
          "Drive elderly parents to doctor's appointments",
          "Drive kids to soccer practice",
          "Grocery shopping run",
          "Pick up dry cleaning, alterations or clothing repairs",
          "Pick up from the airport or train station",
          "Pick-up and deliver anything you need",
          "Return library books (and get new ones)"
        ],
        Events: [
          "Bartend at a party",
          "DJ at an event",
          "Do magic tricks",
          "Grill at a barbecue",
          "Paint nails and do hair at a party for little girls",
          "Serve food at a house party"
        ],
        Gardening: [
          "Collect fruits",
          "Mow the lawn",
          "Plowing",
          "Trim trees",
          "Water plants"
        ],
        Manpower: [
          "Chop firewood",
          "Heavy lifting",
          "Move furniture",
          "Shovel snow"
        ],
        Organizing: [
          "Interior decorating",
          "Organize closet",
          "Organize garage",
          "Organize library",
          "Pack and unpack after a move"
        ],
        "Res/Apps": [
          "Make reservations",
          "Plan a vacation",
          "Schedule appointments"
        ],
        Other: [
          "Assemble furniture",
          "Guide a tour around town",
          "Hand out flyers around town",
          "Housesit",
          "Paint a room",
          "Provide personal shopping",
          "Set up yard toys (trampoline, swing set, etc)"
        ]
      }
    };
  },
  methods: {
    send(){
      var date=this.date.trim();
      var place=this.place.trim();
      var ok=true;
      if(place==""){
        document.getElementsByClassName("invalid-feedback")[2].style["display"]="block";
        ok=false;
      }
      else{
        document.getElementsByClassName("invalid-feedback")[2].style["display"]="none";
      }

      if(date==""){
        document.getElementsByClassName("invalid-feedback")[1].style["display"]="block";
        ok=false;
      }
      else{
        document.getElementsByClassName("invalid-feedback")[1].style["display"]="none";
      }

      var cat = document.getElementsByTagName("select")[0].value;
      var task = document.getElementsByTagName("select")[1].value;
      if(cat==""){
        document.getElementsByClassName("invalid-feedback")[0].style["display"]="block";
        ok=false;
      }
      else{
        document.getElementsByClassName("invalid-feedback")[0].style["display"]="none";
        
      }
      if(ok){
      axios
        .post('http://localhost/Taskme/public/api/task',JSON.stringify({
          'client_id' : localStorage.id,
          'category_name' : cat,
          'task_number': task, // task number in list 
          'date' : date,
          'details' : document.getElementsByClassName("txtarea")[0].value,
          'address_id' : place,
        }))
        .catch(function (error) {
          console.log(error);
      })}
    },
    taskPrice() {
      var sel = document.getElementById("validationCustom04");
      var opt = sel.options[sel.selectedIndex];
      this.prix = opt.text;
    },
    ChangecatList() {
      var catList = document.getElementById("validationCustom03");
      var actList = document.getElementById("validationCustom04");
      var selCat = catList.options[catList.selectedIndex].value;
      while (actList.options.length) {
        actList.remove(0);
      }
      var cats = this.catAndActs[selCat];
      if (cats) {
        var i;
        for (i = 0; i < cats.length; i++) {
          var cat = new Option(cats[i], i);
          actList.options.add(cat);
        }
      }
      this.taskPrice();
    },
  
  },
  created() {
    // check session stuff
    
  },
};
</script>
<style scoped>
*{
  text-align: left;
}
.wrapper {
  margin-left: 148px;
  margin-right: 148px;
}
.scrolling-wrapper {
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
}
.card {
  display: inline-block;
}
.txtarea {
  border: 1px solid rgba(0, 0, 0, 0.308);
  width: 100%;
  padding: 4px;
  margin: 5px;
}

</style>
