import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Pages/Home.vue";

Vue.use(Router);

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
      path: "/about",
      name: "about",
      component: () => import("./components/Pages/About.vue")
    },
    {
      path: "/blog",
      name: "blog",
      component: () => import("./components/Pages/Blog.vue")
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("./components/Pages/Contact.vue")
    }
  ]
});
