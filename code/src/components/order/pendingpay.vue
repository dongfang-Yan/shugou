<template>
    <div>
         <van-nav-bar
            :title="$route.name"
            left-text="返回"
            left-arrow
            @click-left="$router.push('/my')"
        />
        <!-- 未支付订单 -->
        <van-panel  v-for="(item,i) in orderlist" :key="i" :title="'订单编号:'+item.orderId" :status="item.isState == 1 ? '未支付' : item.isState == 2 ? '待收货' : '已完成'">
            <van-card
           
            :num="item.num"
            :price="item.price"
            :desc="'地址'+ item.address"
            :title="item.goodname"
            thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
            />
            <div slot="footer" class="pull-right" v-if="item.isState == 1">
                <van-button size="mini" @click="del(i)">删除订单</van-button>
                <van-button size="mini" class="payment" @click="payment(i)">支付</van-button>
            </div>
            <div class="pull-right" v-else-if="item.isState == 2">
                 <van-button size="mini">确认收货</van-button>
            </div>
            <div class="pull-right" v-else-if="item.isState == 3">
                 <van-button size="mini">删除订单</van-button>
            </div>
        </van-panel>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                orderlist: []//存放页面数据
            }
        },
        methods:{
            del(i){
                //删除
                this.orderlist.splice(i,1);
            },
            payment(i){
                //支付
                let arr = this.orderlist.splice(i,1); //点击支付截取订单
                arr[0].isState = 2
                this.$store.state.order.receivedlist.push(arr[0]) //添加到合并数组
                // 
            }
        },
        created(){
            // 
            this.orderlist = this.$store.state.order.unpaidlist //未支付订单
            this.$store.state.nav = false;
            // 
            this.lists = this.$store.state.order.orderlist;
        },
        destroyed(){
            this.$store.state.nav = true;
        }
    }
</script>

<style lang="scss" scoped>
.van-panel{
    margin-bottom: 30px;
}

</style>