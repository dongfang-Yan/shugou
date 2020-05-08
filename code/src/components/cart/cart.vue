<template>
    <div>
        <div class="content">
            <div v-show="goodlist.length == 0" class="fideIcon text-center">
                <span class="iconfont icon-queshengyeicon_gouwuche"></span>
                <span>购物车空空如也~</span>
                <div><van-button type="default" @click="$router.push('/home')">去逛逛</van-button></div>
            </div>
            <van-swipe-cell v-for="(item,i) in goodlist" :key="i">
            <van-row>
                <van-col span="3"><van-checkbox v-model="item.isSelect" class="checkbox"></van-checkbox></van-col>
                <van-col span="18">
                        <van-card
                        :num="item.num"
                        :price="item.price"
                        desc="描述信息"
                        :title="item.goodname"
                        thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
                        />
                </van-col>
                <van-col span="3">
                    <van-button class="CalBtn" plain type="defualt" @click="add(i)">+</van-button>
                    <van-button class="CalBtn" plain type="defualt" @click="reduces(i)">-</van-button>
                </van-col>
                </van-row>
                <van-button
                    slot="right"
                    square
                    text="删除"
                    type="danger"
                    class="delete-button"
                    @click="del(i)"
                />
            </van-swipe-cell>
        </div>
        
        <div class="total" v-if="$store.state.username == ''">
                 <van-submit-bar
                :price="$store.getters['cart/result'] * 100"
                button-text="提交订单"
                @submit="gologin"
                >
                <van-checkbox v-model="checkAll" @click="checkSelect">全选</van-checkbox>
            </van-submit-bar>
        </div>
         <div class="total" v-else>
                 <van-submit-bar
                :price="$store.getters['cart/result'] * 100"
                button-text="提交订单"
                @submit="onsubmit"
                >
                <van-checkbox v-model="checkAll" @click="checkSelect">全选</van-checkbox>
            </van-submit-bar>
        </div>
        
    </div>
</template>

<script>
import { Toast } from 'vant';
    export default {
        data:function(){
            return{
               goodlist:[], //商品数据
            }
        },
        methods:{
            add(i){
                // 加法操作
                this.goodlist[i].num += 1;
            },
            reduces(i){
                //减法操作
                this.goodlist[i].num <= 1 ? 1 : this.goodlist[i].num -= 1;
            },
            onsubmit(){
                // 提交订单
               if(this.goodlist.length == 0){
                    Toast('购物车是空的');
               }else if(this.checkAll == false){
                    Toast('未选中商品');
               }else{
                   this.$router.push('/order')
                   this.goodlist.totals = this.$store.state.cart.totals;// 总价格
                   this.$store.commit("order/createorder",this.goodlist)// 传过订单数据
                    //    删除原有
                   this.goodlist = [];
                    this.$store.state.cart.cartlist = [];
                    this.$store.state.cart.cartnum = 0;
               }
            },
            gologin(){
                this.$router.push('/login')
            },
            del(i){
                this.$store.commit("cart/del",i)
                // 
            },
            checkSelect(){
                this.$store.commit("cart/checkselect")
            }
        },
        computed:{
            checkAll:{
                // 点击全部选中
               get(){
                    if(this.$store.state.cart.cartlist.length == 0){
                    return false;
                }else{
                    return this.$store.getters['cart/checkall']
                }
               },
               set(){

               }
            },
            
        },
        created(){
            //渲染购物车数据到当前页面
            this.goodlist = this.$store.state.cart.cartlist;
        }
    }
</script>

<style lang="scss" scoped>
h3{
    padding-bottom: 20px;
    border-bottom: 1px solid #ccc;
}
.content{
    padding-bottom: 100px;
    .CalBtn{
        width: 38px;
        height: 38px;
        border-radius: 50%;
        margin: 10px 0px;
        line-height: 38px;
        border: 1px solid #eee;
     }
     .checkbox{
        margin-top: 70%;
        margin-left: 50%;
    }
 .fideIcon{
     margin-top: 200px;
        span{
            font-size: 20px;
            margin-right: 5px;
            color: #ccc;
        }
        .van-button{
            border-color: #f5f5f5;
        }
    }
    .delete-button {
        height: 100%;
    }
}
.van-row{
    background-color: #f9f9f9;
    border-radius: 10px;
    padding: 10px 0;
    border-bottom: 1px solid #ccc;
}
.van-submit-bar{
    position: fixed;
    z-index: 10000;
    bottom: 50px;
}
.van-submit-bar__button--danger{
           background: linear-gradient(to right, rgb(228, 52, 69), rgb(239, 71, 58));
}
</style>