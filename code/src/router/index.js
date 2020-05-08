import Vue from 'vue'
import VueRouter from 'vue-router'
import search from './search.js'
import isClass from './class.js'
import home from './home.js'
import my from './my.js'
import details from './details.js'
import cart from './cart.js'
import publics from './public.js'
import order from "./order.js"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "/recommendation"
  },
  search,
  isClass,
  home,
  ...my,
  details,
  cart,
  ...publics,
  ...order
]

const router = new VueRouter({
  routes
})

export default router
