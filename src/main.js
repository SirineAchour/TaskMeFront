//importing axios
import axios from 'axios';
window.axios = axios;
axios.defaults.baseURL = 'http://localhost/TaskMeBack/public/';


import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App";
import VModal from 'vue-js-modal';
import rate from 'vue-rate';
import DateDropdown from 'vue-date-dropdown';
import VueTelInput from 'vue-tel-input';
import VueStar from 'vue-star';
import ToggleButton from 'vue-js-toggle-button';
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import VueDragSelector from "vue-drag-selector";


// bootstrap
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap-vue/dist/bootstrap-vue.css';

// router setup
import routes from "./routes/routes";

// Plugins
import GlobalComponents from "./globalComponents";
import GlobalDirectives from "./globalDirectives";
import Notifications from "./components/NotificationPlugin";

// MaterialDashboard plugin
import MaterialDashboard from "./material-dashboard";

import Chartist from "chartist";


// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkExactActiveClass: "nav-item active"
});

Vue.prototype.$Chartist = Chartist;
Vue.use(VModal);
Vue.use(VueRouter);
Vue.use(MaterialDashboard);
Vue.use(GlobalComponents);
Vue.use(GlobalDirectives);
Vue.use(Notifications);
Vue.use(BootstrapVue);
Vue.use(rate);
Vue.use(DateDropdown);
Vue.use(VueTelInput);
Vue.use(ToggleButton);
Vue.use(VueDragSelector);

Vue.component('VueStar', VueStar);
Vue.component("v-select", vSelect);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: h => h(App),
  router,
  data: {
    Chartist: Chartist
  }
});
