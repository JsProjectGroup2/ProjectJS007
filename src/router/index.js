import { createWebHistory, createRouter } from "vue-router";
import first from "@/components/first.vue";
import login from "@/components/login.vue";
import logout from "@/components/logout.vue";
import signup from "@/components/signup.vue";
import pacage from "@/components/pacage.vue";

const routes = [
  {
    path: "/",
    name: "first",
    component: first,
  },
  {
    path: "/login",
    name: "login",
    component: login,
  },
  {
    path:"/signup",
    name:"signup",
    component: signup,
  },
  {
    path:"/pacage",
    name:"pacage",
    component: pacage,
  },
  {
    path:"/logout",
    name:"logout",
    component: logout,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;