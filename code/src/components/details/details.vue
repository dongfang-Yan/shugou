<template>
    <div>
        <van-sticky>
        <div class="topback">
           <van-icon name="arrow-left" size="20" @click="go"/>
        </div>
        </van-sticky>
        <div class="picture">
         <van-swipe :loop="false">
            <van-swipe-item><img src="../../assets/imgs/details1.jpg" alt=""></van-swipe-item>
            <van-swipe-item><img src="../../assets/imgs/details2.jpg" alt=""></van-swipe-item>
            <van-swipe-item><img src="../../assets/imgs/details3.jpg" alt=""></van-swipe-item>
            </van-swipe>
        </div>

        <div class="content">
            <h4>{{goods.name}}</h4>
            <p>Apple iPhone 11 128G 黑色 移动联通电信4G全网通手机</p>
            <div class="price">￥ {{ goods.price }}
                <del>6000</del>
            </div>
            <van-divider>商品介绍</van-divider>
           <van-tabs>
            <van-tab title="商品介绍"> 
                <div class="bigImg">
                <img src="../../assets/imgs/introduce1.jpg" alt="">
                <img src="../../assets/imgs/introduce2.jpg" alt="">
                <img src="../../assets/imgs/introduce3.jpg" alt="">
                <img src="../../assets/imgs/iphone1.jpg" alt="">
                <img src="../../assets/imgs/iphone2.jpg" alt="">
                <img src="../../assets/imgs/iphone3.jpg" alt="">
                <img src="../../assets/imgs/iphone4.jpg" alt="">
                <img src="../../assets/imgs/details_xz.jpg" alt="">
                </div>
            </van-tab>
            <van-tab title="参数">
                <van-collapse v-model="activeNames">
                <van-collapse-item title="主体" name="1">
                    <van-cell title="品牌" value="Apple" size="large" />
                    <van-cell title="型号" value="iPhone 11 128G" size="large" />
                </van-collapse-item>
                <van-collapse-item title="系统" name="2">
                    <van-cell title="手机操作系统" value="IOS" size="large" />
                    <van-cell title="系统版本" value="以官网信息为准" size="large" />
                </van-collapse-item>
                 <van-collapse-item title="屏幕" name="3">
                    <van-cell title="屏幕尺寸" value="6.1英寸" size="large" />
                    <van-cell title="屏幕分辨率" value="其他" size="large" />
                    <van-cell title="屏幕像素密度" value="326" size="large" />
                </van-collapse-item>
                 <van-collapse-item title="基本信息" name="4">
                    <van-cell title="颜色" value="黑色" size="large" />
                    <van-cell title="机身长度" value="150.9毫米" size="large" />
                    <van-cell title="机身宽度" value="75.7毫米" size="large" />
                    <van-cell title="机身厚度" value="8.3毫米" size="large" />
                    <van-cell title="重量" value="194克" size="large" />
                </van-collapse-item>

                </van-collapse>
            </van-tab>
            <van-tab title="售后">
                <van-collapse v-model="activeNames">
                <van-collapse-item title="包装清单" name="1">
                    装有 iOS 的 iPhonex1、采用闪电接头的 EarPodsx1、闪电转 USB 连接线x1、USB 电源适配器x1、资料x1
                </van-collapse-item>
                <van-collapse-item title="售后服务" name="2">
                    售后内容： 本产品全国联保，享受三包服务，质保期为：一年质保。 如因质量问题或故障，凭厂商维修中心或特约维修点（苹果官方授权网点）的质量检测证明及退机单，享受7日内退货；15日内换货，直接在厂商维修中心或特约维修点（苹果官方授权网点）换机，换机以苹果官方授权网点为准，15日以上在质保期内享受免费保修等三包服务！ 售后服务电话：400-666-8800 服务承诺： 苏宁易购向您保证销售商品均为正品行货并开具正规发票。凭苏宁易购发票，所有商品均可以享受生产厂家的全国联保服务
                </van-collapse-item>
                <van-collapse-item title="特别声明" name="3" disabled>
                    本站商品的商品详情信息及包装参数信息均由供应商自行设计、制作并通过苏宁向其开放的数据端口自行发布，其真实性、准确性和合法性由供应商负责。本站保证苏宁自营商品均为原厂正品行货，但因生产厂家可能会在没有任何提前通知的情况下更改产品包装、产地或者一些附件，本站不能确保用户收到的货物与本站展示的图片、产地、附件说明完全一致。
                </van-collapse-item>
                </van-collapse>
            </van-tab>
            </van-tabs>
        </div>
        <van-divider dashed>猜你喜欢</van-divider>

        <div>
            <router-link to="/details" tag="div">
            <van-row>
                <van-col span="12">
                <img src="../../assets/imgs/good3.jpg" alt="">
                    <div class="van-ellipsis">vivo手机</div>
                    <span class="pic">￥1999<del>2300</del></span>
                </van-col>
                <van-col span="12">
                <img src="../../assets/imgs/details_1.jpg" alt="">
                    <div class="van-ellipsis">这是一段最多显示一行的文字，多余的内容会被省略</div>
                    <span class="pic">￥2399<del>2490</del></span>
                </van-col>
                <van-col span="12">
                <img src="../../assets/imgs/details_2.jpg" alt="">
                    <div class="van-ellipsis">这是一段最多显示一行的文字，多余的内容会被省略</div>
                    <span class="pic">￥23<del>30</del></span>
                </van-col>
                <van-col span="12">
                <img src="../../assets/imgs/details_3.jpg" alt="">
                    <div class="van-ellipsis">这是一段最多显示一行的文字，多余的内容会被省略</div>
                    <span class="pic">￥23<del>30</del></span>
                </van-col>
            </van-row>
            </router-link>
            </div>

        <div class="enter">
            <van-goods-action>
            <van-goods-action-icon icon="wap-home-o" @click="$router.push('/home')"/>
            <van-goods-action-icon icon="cart-o" :info="$store.state.cart.cartnum" @click="$router.push('/cart')"/>
            <van-goods-action-icon :icon="icon" color="orange" @click="changeStar"/>
            <van-goods-action-button color="#be99ff" type="warning" text="加入购物车" @click="add" />
            <van-goods-action-button color="#7232dd" type="danger" text="立即购买" />
            </van-goods-action>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                activeNames: ['1','2','3','4'],
                goods:{
                        goodId: 2,
                        goodname:"iphone11",
                        price:"5799",
                        num:1,
                        isSelect:true,
                        star: false, //是否被收藏
                    },
                iconCount: 0, //用于计算
                icon: "star-o"
            }
        },
        methods:{
            go(){
                this.$router.go(-1)
            },
            changeStar(){
                //收藏
                this.iconCount++;
                if(this.iconCount % 2 == 0){
                     this.icon = "star-o"
                }else{
                    this.icon = "star"
                }
            },
            add(){
                this.$store.commit("cart/addCart",this.goods)
            },
        },
        created(){
            this.$store.state.nav = false;
        },
        destroyed(){
            this.$store.state.nav = true;
        },
    }
</script>

<style lang="scss" scoped>
.van-goods-action{
    z-index: 10000;
}
.topback{
    padding: 10px 0 10px 10px;
    background-color: #fff;
    .van-icon{font-size: 60px;}
}
.picture{
    height: 400px;
    .van-swipe{
        height: 100%;
         img{
        height: 100%;
        width: 100%;
        }
    }
}
 .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
}
.content{
    padding: 20px 10px;
    
    h4{
        font-size: 20px;
        font-weight: bold;
    }
    .price{
        font-size: 2rem;
        color: orange;
        del{
            font-size: 1rem;
            color: #ccc;
        }
    }
    .van-tabs{
        margin-top: 50px;
        .bigImg{
            margin-top: 10px;
        }
    }
}
.van-row{
        background-color: #fff;
        .van-col {
            padding: 10px;
            img{
                width: 100%;
            }
        }
         .pic{
        color: tomato;
        del{
            font-size: 12px;
            margin-left: 5px;
            color: #ccc;
        }
        }
    }
    
</style>