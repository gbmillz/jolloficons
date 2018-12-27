import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import store from "./store";
import { routes } from "./routes";
import InstantSearch from "vue-instantsearch";

//import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(InstantSearch);
Vue.use(VueRouter);
//Vue.use(BootstrapVue)

const router = new VueRouter({
  routes,
  mode: "history"
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
