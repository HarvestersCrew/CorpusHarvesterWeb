import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/files",
    name: "Files",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/Files.vue")
  },
  {
    path: "/download",
    name: "Download",
    component: () => import("../views/Download.vue")
  },
  {
    path: "/corpus",
    name: "Corpus",
    component: () => import("../views/Corpus.vue")
  },
  {
    path: "/logs",
    name: "Logs",
    component: () => import("../views/Logs.vue")
  },
  {
    path: "/settings",
    name: "Settings",
    component: () => import("../views/Settings.vue")
  },
  {
    path: "/info",
    name: "Info",
    component: () => import("../views/Info.vue")
  },
  {
    path: "/team",
    name: "Team",
    component: () => import("../views/Team.vue")
  }
];

const router = new VueRouter({
  mode: process.env.VUE_APP_GITHUB_PAGES ? "hash" : "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
