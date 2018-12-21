import Vue from "vue";
import App from "./app.vue";
import "./assets/styles/app.styl";

const root = document.createElement("div");
document.body.append(root);

new Vue({
  render: h => h(App)
}).$mount(root);
