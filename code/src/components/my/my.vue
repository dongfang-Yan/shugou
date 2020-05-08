<template>
    <div class="bg">
        <div class="login" v-if="$store.state.username == ''">
           <router-link to="/login" tag="a">
               <div class="login_box">
               <div class="touxian pull-left"><van-icon name="contact" size="30"/></div>
                <a href="javascript:;">登录/注册</a>
           </div>
          </router-link>
        </div>

        <div class="login" v-else>
               <div class="login_box">
               <div class="touxian pull-left"><van-icon name="contact" size="30"/></div>
                <a href="javascript:;" v-text="$store.state.username"></a>
                <span class="exit" @click="$store.state.username = ''">退出登录</span>
        </div>
        </div>
        
        <div class="operation">
                <van-row class="text-center">
                <van-col span="8">
                    <div @click="$router.push('/pendingpay')">
                        <div><van-icon name="pending-payment"/></div>
                        <span>待付款</span>
                    </div>
                </van-col>
                <van-col span="8">
                    <div @click="$router.push('/receivinggoods')">
                        <div><van-icon name="logistics"/></div>
                        <span>待收货</span>
                    </div>
                </van-col>
               <van-col span="8">
                   <div @click="$router.push('/complete')">
                        <div><van-icon name="completed" /></div>
                        <span>已完成</span>
                   </div>
                </van-col>
                <van-col span="8">
                   <div @click="$router.push('/myOrder')">
                        <div><van-icon name="description" /></div>
                        <span>全部订单</span>
                   </div>
                </van-col>
                </van-row>
        </div>
       <!--  -->
        <!-- <div class="center">
            <van-row>
            <van-col span="8">
                <p>0</p>
                <p>商品收藏</p>
            </van-col>
            <van-col span="8">
                 <p>0</p>
                 <p>我的地址</p>
            </van-col>

            <van-col span="8">
                <p>0</p>
                <p>我的足迹</p>
            </van-col>
            </van-row>
        </div> -->
            </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.bg{
    background-color: #eee;
}
.login{
    height: 150px;
    background: linear-gradient(90deg,#eb3c3c,#ff7459);
    border-radius: 0 0 10% 10%;
    box-shadow: 0 5px 5px #ccc;
    .exit{
        margin-top: 10px;
        display: block;
        color: white;
        padding-left: 2px;
    }
    .login_box{
        height: 60px;
        padding-left: 30px;
        padding-top: 50px;
         a{
                margin-left: 70px;
                display: block;
                color: white;
                text-decoration: none;
                line-height: 60px;
            }
        .touxian{
            width: 60px;
            height: 60px;
            border: 1px solid #eee;
            border-radius: 50%;
            text-align: center;
            line-height: 80px;
            color: #eee;
    }
    }
}
.operation{
    padding: 20px 0px;
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: #fff;
    .van-icon{
        font-size: 30px;
        color: #dd9e58;
    }
    span{
        color: #666;
    }
    a{
        color: #ccc;
    }
    .van-col{
        padding: 10px 0;
    }
}
.center{
   background-color: #fff;
   padding: 10px;
   text-align: center;
   p{
       &:nth-child(1){
           font-size: 18px;
           font-weight: bold;
       }
       &:nth-child(2){
           font-size: 12px;
           color: #666;
       }
   }
}
.numberbar{
    margin-top: 10px;
    background-color: #fff;
    text-align: center;
    .van-col{
        .van-icon{
            margin-top: 10px;
            font-size: 24px;
        }
        p{
            font-size: 12px;
            color: #666;
        }
    }
}
</style>