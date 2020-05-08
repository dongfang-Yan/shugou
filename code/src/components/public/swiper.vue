<template>
    <div>
        <div class="swiper-container publicSwiper">
            <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,i) in imgs" :key="i">
              <img :src="item.img" alt="">
            </div>
           
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination paginationSwiper"></div>
  </div>
    </div>
</template>

<script>
import Swiper from "swiper"
    export default {
      data(){
        return {}
      },
      props: ["imgs"],//接收图片数据
      mounted(){
        new Swiper('.publicSwiper', {
        pagination: {
          el: '.paginationSwiper',
          // dynamicBullets: true,
        },
      })
  }
    }
</script>

<style lang="scss" scoped>
.swiper-container {
      width: 100%;
      height: 100%;
    }
    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;

      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }
</style>