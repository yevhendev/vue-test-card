import Vue from "vue";
import App from "./App.vue";
import store from "@/store";
import vuetify from "@/plugins/vuetify";
import "@/components/globals";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@mdi/font/css/materialdesignicons.css";
import { makePlugins } from "@/plugins";
import { router } from "@/routes";

makePlugins(Vue);

Vue.config.productionTip = false;

new Vue({
  store,
  vuetify,
  router,
  render: h => h(App)
}).$mount("#app");
