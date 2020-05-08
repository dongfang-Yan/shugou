import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:3000'
Vue.prototype.$axios = axios

// 引入公用样式
import "./assets/css/base.css"
// 引入bootstrap框架
import "bootstrap/dist/css/bootstrap.css"
Vue.config.productionTip = false

//引入图标文件
import "./assets/font/iconfont.css"
//引入vant组件库
import 'vant/lib/index.css';
import Vant from "vant";
Vue.use(Vant)

//引入swiper插件库
import 'swiper/css/swiper.min.css'

//引入animate.css动画效果
import "animate.css"


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



