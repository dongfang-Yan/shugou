<template>
<!-- 首页 -->
    <div class="bg">
        <van-notice-bar text="梦多福 蒲团坐垫 玉米皮手工草编加厚圆形蒲团坐垫打坐拜佛禅修飘窗田园草垫子 蒲团坐垫 40*40cm" color="#1989fa" left-icon="volume-o" background="#ecf9ff" />
        <div class="loop">
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                    <van-swipe-item>
                        <img src="../../assets/imgs/loop1.jpg" alt="">
                    </van-swipe-item>
                    <van-swipe-item>
                        <img src="../../assets/imgs/loop2.jpg" alt="">
                    </van-swipe-item>
                    <van-swipe-item>
                        <img src="../../assets/imgs/loop1.jpg" alt="">
                    </van-swipe-item>
            </van-swipe>
        </div>

        <div class="nav">
            <van-grid :column-num="4">
            <van-grid-item icon="shopping-cart-o" text="超市" to="/class?id=0"/>
            <van-grid-item icon="tv-o" text="数码" to="/class?id=1"/>
            <van-grid-item icon="manager-o" text="服装" to="/class?id=2"/>
            <van-grid-item icon="new-o" text="新品" to="/class?id=3"/>
            <van-grid-item icon="phone-circle-o" text="充值" to="/class?id=4"/>
            <van-grid-item icon="friends-o" text="团购" to="/class?id=5"/>
            <van-grid-item icon="gift-card-o" text="领券" to="/class?id=6"/>
            <van-grid-item icon="hot-o" text="特惠" to="/class?id=7"/>
            </van-grid>
        </div>

        <div class="seckill">
            <div>
                <!-- 秒杀 -->
              <div class="kill">
                  <span>距离秒杀还剩:</span>
                  <van-count-down :time="time" />
                  <span class="pull-right morekill" @click="$router.push('/details')">更多秒杀<van-icon name="arrow" /></span>
              </div>
                <!-- 跳转详情页 -->
                <router-link to="/details" tag="div">
                 <div class="swiper-container killSwiper">
                    <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <div class="goods">
                            <img src="../../assets/imgs/good2.jpg" alt="">
                           <div class="van-ellipsis">乔丹球鞋，夏季特款</div>
                            <p class="price">￥199</p>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="goods">
                            <img src="../../assets/imgs/good3.jpg" alt="">
                           <div class="van-ellipsis">乔丹球鞋，夏季特款</div>
                            <p class="price">￥199</p>
                        </div>
                    </div>
                     <div class="swiper-slide">
                        <div class="goods">
                            <img src="../../assets/imgs/good2.jpg" alt="">
                           <div class="van-ellipsis">乔丹球鞋，夏季特款</div>
                            <p class="price">￥199</p>
                        </div>
                    </div>
                     <div class="swiper-slide">
                        <div class="goods">
                            <img src="../../assets/imgs/good3.jpg" alt="">
                           <div class="van-ellipsis">乔丹球鞋，夏季特款</div>
                            <p class="price">￥199</p>
                        </div>
                    </div>
                     <div class="swiper-slide">
                        <div class="goods">
                            <img src="../../assets/imgs/good2.jpg" alt="">
                           <div class="van-ellipsis">乔丹球鞋，夏季特款</div>
                            <p class="price">￥199</p>
                        </div>
                    </div>
                    </div>
                    </div>
                </router-link>
            </div>   
        </div>
        <!--  -->
        
        <!--  -->
        <div class="dayStroll">
            <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">每日精选</van-divider>
            <router-link to="/details" tag="div">
            <van-row>
            <van-col span="6">
                <div class="img">
                    <img src="../../assets/imgs/day1.jpg" alt="">
                </div>
                <p>iphone11</p>
            </van-col>
            <van-col span="6">
                <div class="img">
                    <img src="../../assets/imgs/day1.jpg" alt="">
                </div>
                 <p>购物潮流</p>
            </van-col>
            <van-col span="6">
                <div class="img">
                    <img src="../../assets/imgs/day1.jpg" alt="">
                </div>
                 <p>购物潮流</p>
            </van-col>
             <van-col span="6">
                <div class="img">
                    <img src="../../assets/imgs/day1.jpg" alt="">
                </div>
                 <p>购物潮流</p>
            </van-col>
            </van-row>
        </router-link>
        </div>
        <!--  -->

        <div class="shoppings">
           <div class="recommend">
               <img src="../../assets/imgs/tuijian.png" alt="">
           </div>
                <div>
                     <router-link to="/details" tag="div">
                    <van-row>
                    <van-col span="12">
                        <img src="../../assets/imgs/good3.jpg" alt="">
                           <div class="van-ellipsis">vivo手机</div>
                         <span class="pic">￥1999<del>2300</del></span>
                     </van-col>
                      <van-col span="12">
                        <img src="../../assets/imgs/good1.webp" alt="">
                           <div class="van-ellipsis">这是一段最多显示一行的文字，多余的内容会被省略</div>
                         <span class="pic">￥23<del>50</del></span>
                     </van-col>
                      <van-col span="12">
                        <img src="../../assets/imgs/good2.jpg" alt="">
                           <div class="van-ellipsis">这是一段最多显示一行的文字，多余的内容会被省略</div>
                         <span class="pic">￥179<del>200</del></span>
                     </van-col>
                      <van-col span="12">
                        <img src="../../assets/imgs/details_1.jpg" alt="">
                           <div class="van-ellipsis">这是一段最多显示一行的文字，多余的内容会被省略</div>
                         <span class="pic">￥2339<del>2500</del></span>
                     </van-col>
                    </van-row>
                    </router-link>
                </div>
            </div>

        
        </div>


    
</template>

<script>
// import swiper from "../public/swiper.vue"
import Swiper from "swiper";
    export default {
        data(){
             return {
                value: '',
                time: 30 * 60 * 60 * 1000,
                img: require("../../assets/imgs/good1.webp"),
                icon: require("../../assets/imgs/goodshot.jpg"),
                imglist:[
                    {
                        img: require("../../assets/imgs/good2.jpg")
                    },
                    {
                        img: require("../../assets/imgs/good3.jpg")
                    },
                    {
                        img: require("../../assets/imgs/good2.jpg")
                    }
                ]
            };
        },
        mounted(){
           new Swiper('.killSwiper', {
            slidesPerView: 4,
            spaceBetween: 30,
            pagination: {
                // el: '.swiper-pagination',
                clickable: true,
            },
            });
        }
    }
</script>

<style lang="scss" scoped>
p{
    margin: 0;
    padding: 0;
}
.bg{
    background-color: #eee;
}

// 轮播
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 200px;
  text-align: center;
  img{
      width: 100%;
      height: 200px;
      margin-top: -1px;
  }
}
.seckill{
     background: white;
    overflow: hidden;
    .kill{
        margin-top: 10px;
        .van-count-down{
        display: inline;
        padding: 10px 0 10px 10px;
        }
        .morekill{
            font-size: 12px;
            .van-icon{
                vertical-align: middle;
            }
        }
    }
    
    .killSwiper{
       background: #fff;
       text-align: center;
       .swiper-slide{
           padding: 5px;
           div{
                  font-size: .21875rem;
               }
           .price{
               color: red;
               }
       }
    }
    margin-top: 10px;
    padding: 0 10px;
    .pic{
        color: tomato;
    }
    .van-col{
        background-color: #fff;
        padding: 0 5px;
    }
}
//宫格
.shoppings{
    margin-top: 10px;
    padding: 0 10px;
    .pic{
        color: tomato;
    }
    .van-button::before{
        font-size: 0.5rem;
        color: #000;
    }
    .van-row{
        background-color: #fff;
        .van-col {
            padding: 10px;
            img{
                width: 100%;
            }
            del{
                font-size: 12px;
                color:  #cccccc;
                margin-left: 5px;
            }
        }
    }
   .recommend{
       img{
           width: 100%;
       }
   }
}

.dayStroll{
    text-align: center;
    background: #fff;
    padding: 20px 0 20px 0;
    h3{
        color: #47a3e2;
        font-size: 18px;
        font-weight: bold;
        margin: 0;
        height: 40px;
        line-height: 40px;
    }
    &::after{
        content: "";
        display: block;
        clear: both;
    }
}

</style>