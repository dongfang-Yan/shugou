export default [
    {
        path: "/pendingpay",
        name: "待付款",
        component: () => import("../components/order/pendingpay.vue")
    },
    {
        path: "/receivinggoods",
        name:"待收货",
        component: () => import("../components/order/receivinggoods.vue")
    },
    {
        path: "/complete",
        name:"已完成",
        component: () => import("../components/order/complete.vue")
    },
    {
        path: "/myOrder",
        name:"全部订单",
        component: () => import("../components/order/myOrder.vue")
    }
]