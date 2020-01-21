import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: () => import("@/pages/Index.vue")
    },
    {
      path: "/user",
      component: () => import("@/pages/User/Index.vue"),
      children: [
        {
          path: ":username",
          name: "UserName",
          props: true,
          component: () => import("@/pages/User/User.vue")
        }
      ]
    },
    {
      path: "/feed",
      component: () => import("@/pages/Feed/Index.vue"),
      children: [
        {
          path: ":feedId",
          props: true,
          name: "Feed",
          component: () => import("@/pages/Feed/Feed.vue")
        }
      ]
    }
  ]
});
