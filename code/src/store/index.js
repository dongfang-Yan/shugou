import Vue from 'vue'
import Vuex from 'vuex'
import cart from "./cart.js"
import address from "./address.js"
import order from "./order.js"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
     nav:true,
     username: ""
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    cart,
    address,
    order
  }
})
