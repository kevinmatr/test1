import { createRouter, createWebHistory } from "vue-router";

export const routes = [
  {
    path: "/",
    redirect: "/cnode",
    components: {
      default: () => import("../pages/home.vue"),
      rightcontent: () => import("../pages/right.vue"),
    },
    meta: {
      flag: true,
      tit: "首页",
      checklogin: false,
      rdisp: true,
      keepAlive: true,
    },
  },
  {
    path: "/center",
    components: {
      default: () => import("../pages/center.vue"),
      rightcontent: () => import("../pages/rightnew.vue"),
    },
    meta: {
      flag: true,
      tit: "新手入门",
      rdisp: true,
      checklogin: true,
    },
    children: [
      {
        path: "goods",
        component: () => import("../pages/center/goods.vue"),
        tit: "商品",
      },
      {
        path: "shop",
        component: () => import("../pages/center/shop.vue"),
        tit: "商家",
      },
    ],
  },
  {
    path: "/about",
    components: {
      default: () => import("../pages/about.vue"),
      rightcontent: () => import("../pages/rightabout.vue"),
    },
    meta: {
      flag: true,
      tit: "关于",
      rdisp: true,
      checklogin: true,
      keepAlive: true,
    },
  },
  {
    path: "/book",
    components: {
      default: () => import("../pages/book.vue"),
      rightcontent: () => import("../pages/rightapi.vue"),
    },
    navdis: false,
    meta: {
      flag: true,
      tit: "API",
      rdisp: false,
      checklogin: false,
      keepAlive: true,
    },
  },
  {
    path: "/login",
    component: () => import("../pages/login.vue"),
    meta: {
      checklogin: false,
      tit: "登录",
      rdisp: true,
      flag: true,
      keepAlive: true,
    },
  },
  {
    path: "/cnode",
    components: {
      default: () => import("../pages/cnode.vue"),
      rightcontent: () => import("../pages/right.vue"),
    },
    meta: {
      checklogin: false,
      tit: "cnode",
      rdisp: true,
      flag: false,
      keepAlive: true,
    },
  },
  {
    path: "/cnodedet/:id",
    component: () => import("../pages/cnodedet.vue"),
    meta: {
      checklogin: false,
      tit: "cnode详情页",
      rdisp: true,
      flag: false,
      keepAlive: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

// router.beforeEach((to, form, next) => {
//   let isLogin = localStorage.getItem("login");
//   if (isLogin) {
//     next();
//   } else {
//     if (to.meta.checklogin) {
//       next({ path: "login", query: { redirect: to.path } });
//     } else {
//       next();
//     }
//   }
// });
export default router;
