import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/CourseContent",
    name: "CourseContent",
    component: () => import("../views/CourseContent.vue"),
  },
  {
    path: "/Enroll",
    name: "EnrollPage",
    component: () => import("../views/Enroll.vue"),
  },
  {
    path: "/Student",
    name: "Student",
    component: () => import("../views/Student.vue"),
  },
  {
    path: "/Client",
    name: "Client",
    component: () => import("../views/Client.vue"),
  },
  {
    path: "/Instructor",
    name: "Istructor",
    component: () => import("../views/Instructor.vue"),
  },
  {
    path: "/Developer",
    name: "Developer",
    component: () => import("../views/Developer.vue"),
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
