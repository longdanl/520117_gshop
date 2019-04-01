import Vue from "vue"
import App from "./App.vue"
import router from "./router"//引用路由器

new Vue({
  el:"#app",
  render:h => h(App),
  router
})
