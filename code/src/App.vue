<template>
  <div ref="ttop">
      <van-tabbar v-model="active" active-color="#ed2a17" v-show="$store.state.nav" :route="isNavTrue">
      <van-tabbar-item to="/home" icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/class" icon="apps-o">分类</van-tabbar-item>
      <van-tabbar-item to="/cart" icon="friends-o">购物车</van-tabbar-item>
      <van-tabbar-item to="/my" icon="setting-o">我的</van-tabbar-item>
      </van-tabbar>
      <transition mode="out-in" :duration="{ enter:100, leave:10 }" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
        <router-view></router-view>
      </transition>

      <div class="backtop" v-show="flag" @click="backtop">
        <van-icon name="arrow-up" />
      </div>
  </div>
</template>

<script>
  export default {
  data() {
    return {
      active: 0,
      isNavTrue:true,
      flag:false
    }
  },
  methods:{
    backtop(){
        window.scrollTo(0,0)
    },
  },
   mounted () {
      window.addEventListener('scroll',() => {
           let scrollY = document.documentElement.scrollTop
          if (scrollY >= 400) {
              this.flag = true
            } else {
              this.flag = false
          }
      })
    },
   
}
</script>

<style lang="scss" scoped>
.van-tabbar{
  z-index: 10000;
}
.backtop{
  position: fixed;
  right: 10px;
  bottom: 80px;
  width: 30px;
  height: 30px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 50%;
  z-index: 10000;
  text-align: center;
  line-height: 30px;
}
</style>