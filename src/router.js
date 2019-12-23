import Vue from "vue";
import Router from "vue-router";
import vuescroll from 'vue-scroll';
import Home from "./components/Pages/Home.vue";

Vue.use(Router);
Vue.use(vuescroll);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/page1",
      name: "page1",
      component: () => import("./components/Pages/Page1.vue")
    },
    {
      path: "/page2",
      name: "page2",
      component: () => import("./components/Pages/Page2.vue")
    },
    {
      path: "/page3",
      name: "page3",
      component: () => import("./components/Pages/Page3.vue")
    }
  ]
});
