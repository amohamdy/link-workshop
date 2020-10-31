import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Vue.use(require('vue-moment'));

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import './scss/main.scss';


createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
