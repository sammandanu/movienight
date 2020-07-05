import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueDragscroll from "vue-dragscroll";

Vue.use(VueDragscroll);

Vue.config.productionTip = false;

import "./assets/styles/app.css";

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
