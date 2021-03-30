import { createWebHistory, createRouter } from "vue-router";
import first from "@/components/first.vue";
const routes = [
  {
    path: "/",
    name: "first",
    component: first,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;