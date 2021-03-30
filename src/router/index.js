import { createWebHistory, createRouter } from "vue-router";
import first from "@/components/first.vue";
import login from "@/components/login.vue";
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

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;