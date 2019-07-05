import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Skills from "./views/Skills.vue";
import Experience from "./views/Experience.vue";
import Portfolio from "./views/Portfolio.vue";
import Contact from "./views/Contact.vue";

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
      component: About
    },
    {
      path: "/skills",
      name: "skills",
      component: Skills
    },
    {
      path: "/experience",
      name: "experience",
      component: Experience
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: Portfolio
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    }
  ]
});
