import { createWebHistory, createRouter } from "vue-router";
import first from "@/components/first.vue";
import login from "@/components/login.vue";
import logout from "@/components/logout.vue";
import signup from "@/components/signup.vue";
import pacage from "@/components/pacage.vue";
import admin from "@/components/admin.vue";
import adminuser from "@/components/adminuser.vue";
import adminview from "@/components/adminview.vue";
import adminvideo from "@/components/adminvideo.vue";
import Editvid from  "@/components/Editvid.vue";
import browse from "@/components/browse.vue";

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
  {
    path:"/admin",
    name:"admin",
    component: admin,
  },
  {
    path:"/admin/user",
    name:"adminuser",
    component: adminuser,
  },
  {
    path:"/admin/view",
    name:"adminview",
    component: adminview,
  },
  {
    path:"/admin/video",
    name:"adminvideo",
    component: adminvideo,
  },
  {
    path:"/admin/video/Editvid/:id",
    name:"Editvid",
    component: Editvid,
  },
  {
    path:"/browse",
    name:"browse",
    component: browse,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;