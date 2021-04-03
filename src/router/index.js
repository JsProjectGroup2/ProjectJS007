import { createWebHistory, createRouter } from "vue-router";
import first from "@/components/first.vue";
import login from "@/components/login.vue";
import signup from "@/components/signup.vue";
import reform from "@/components/reform.vue";
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
    path:"/signup/regis",
    name:"signup",
    component: signup,
  },
  {
    path:"/signup/regis/reform",
    name:"reform",
    component: reform,
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;