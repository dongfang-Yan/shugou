export default [
  {
    path: "/my",
    name: "个人中心",
    component: () => import("../views/My.vue"),
  },
  {
    path: "/login",
    name: "登录",
    component: () => import("../components/my/login.vue")
  },
  {
    path: "/register",
    name: "注册",
    component: () => import("../components/my/register.vue")
  },
  {
    path: "/order",
    name: "订单",
    component: () => import("../components/my/order.vue")
  },
  {
    path: "/address",
    name: "地址",
    component: () => import("../components/my/address.vue")
  },
  {
    path: "/addressAdd",
    name: "新添地址",
    component: () => import("../components/my/addressAdd.vue")
  },
  {
    path: "/addressEdit",
    name: "修改地址",
    component: () => import("../components/my/addressEdit.vue")
  }
 ]