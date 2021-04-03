import { createWebHistory, createRouter } from "vue-router";
import first from "@/components/first.vue";
import login from "@/components/login.vue";
import signup from "@/components/signup.vue";
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
    path:"/signup/:email",
    name:"signup",
    component: signup,
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;