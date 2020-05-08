export default [
    {
        path: "/recommendation",
        name:"引荐页",
        component: () => import("../components/public/recommendation.vue"),
        beforeEnter: (to, from, next) => {
            if(localStorage.advertisement){
                next("/advertisement")
            }else{
                localStorage.advertisement = true
                next()
            }
        }
    },
    {
        path: "/advertisement",

        name:"广告页",
        component: () => import("../components/public/advertisement.vue")
    }
]