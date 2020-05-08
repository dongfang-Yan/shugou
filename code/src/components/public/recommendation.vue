<template>
    <div class="bg">
        <!-- 引荐页 -->
        <div class="recommendation">
            <div class="swiper-container ReSwiper">
            <div class="swiper-wrapper">
           
            <div class="swiper-slide">
                 <div v-show="css[0].flag" :class="css[0]">
                <img src="../../assets/imgs/1.png" alt="">
            </div>
            </div>
           
            <div class="swiper-slide">
                 <div v-show="css[1].flag" :class="css[1]">
                <img src="../../assets/imgs/2.png" alt="">
            </div>
            </div>
           
            <div class="swiper-slide">
                 <div v-show="css[2].flag" :class="css[2]">
                <img src="../../assets/imgs/3.png" alt="">
                <div class="btn_in" @click="$router.push('/home')">开启购物之旅</div>
            </div>
            </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination pagSwiper"></div>
        </div>
        </div>        
    </div>
</template>
<script>
import Swiper from "swiper"
    export default {
        data(){
            return {
                css:[
                    {
                        animated:true,
                        bounceInDown: true,
                        flag:true
                    },
                    {
                        animated:true,
                        bounceInDown: false,
                        flag:false
                    },
                    {
                        animated:true,
                        bounceInDown: false,
                        flag:false
                    }
                ]
            }
        },
        created(){
            this.$store.state.nav = false;
        },
        destroyed(){
            this.$store.state.nav = true;
        },
        mounted(){
            let _this = this;
            new Swiper('.ReSwiper', {
            on:{
                slideChangeTransitionEnd: function(){
                    _this.css[this.activeIndex].flag = true
                    _this.css[this.activeIndex].bounceInDown = true
                }
            },
            pagination: {
                el: '.pagSwiper',
                },
            })
        }
    }
</script>

<style lang="scss" scoped>
 .swiper-container {
      width: 100%;
      position: absolute;
      top: 0;
      bottom: 0;
      background-color: #232321;
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
    .bg{
        background-color: #232321;
    }
.recommendation{
    .swiper-container{
         .swiper-slide{
             background-color: #232321;
            .btn_in{
                width: 162px;
                height: 42px;
                border-radius: 20px;
                border: 1px solid #ccc;
                position: absolute;
                top: 0;
                background-color: #e84144;
                bottom: 0;
                left: 0;
                right: 0;
                font-size: .375rem;
                margin: 548px auto;
                text-align: center;
                color: #fff;
                line-height: 40px;
            }
        }
    }
    
}

</style>