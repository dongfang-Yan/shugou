<template>
    <div>
        <!-- 待收货 -->
        <van-nav-bar
            :title="$route.name"
            left-text="返回"
            left-arrow
            @click-left="$router.push('/my')"
        />
        <van-panel v-for="(item,i) in orderlist" :key="i" :title="'订单编号:'+item.orderId" :status="item.isState == 1 ? '未支付' : item.isState == 2 ? '待收货' : '已完成'">
            <van-card
            :num="item.num"
            :price="item.price"
            :desc="'地址'+ item.address"
            :title="item.goodname"
            thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
            />
            <div slot="footer" class="pull-right" v-if="item.isState == 1">
                <van-button size="mini" @click="del(i)">删除订单</van-button>
                <van-button size="mini" @click="payment(i)">支付</van-button>
            </div>
            <div class="pull-right" v-else-if="item.isState == 2">
                 <van-button size="mini" @click="ok(i)">确认收货</van-button>
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
                orderlist: [],
            }
        },
        methods: {
            ok(i){
                let arr = this.orderlist.splice(i,1); //点击支付截取订单
                arr[0].isState = 3
                this.$store.state.order.completelist.push(arr[0])
            }
        },
        created(){
            this.orderlist = this.$store.state.order.receivedlist; //吧订单信息传到页面上
            // 
            this.$store.state.nav = false;
            
        },
        destroyed(){
            this.$store.state.nav = true;
        }
    }
</script>

<style lang="scss" scoped>
.pull-right{
    margin-right: 10px;
}
.van-panel{
    margin-bottom: 30px;
}
.van-panel__header-value{
    color: #87dc49;
}
</style>
