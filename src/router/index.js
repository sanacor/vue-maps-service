import Vue from "vue";
import Router from "vue-router";
import Account from "../components/Account.vue"
import Map from "../components/Map.vue"

Vue.use(Router);

export default new Router({
  routes: [
    {
      name: "account",
      path: "/account",
      component: Account
    },
    {
      name: "map",
      path: "/map",
      component: Map
    },
  ]
});
