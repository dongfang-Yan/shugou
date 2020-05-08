<template>
    <div>
        <van-nav-bar
            :title="$route.name"
            left-text="返回"
            left-arrow
            @click-left="$router.push('/my')"
        />
        <div v-for="(value,k) in orderlist" :key="k">
        <van-panel v-for="(item,i) in value" :key="i" :title="'订单编号:'+item.orderId" :status="item.isState == 1 ? '未支付' : item.isState == 2 ? '待收货' : '已完成'">
            <van-card
            :num="item.num"
            :price="item.price"
            :desc="'地址'+ item.address"
            :title="item.goodname"
            thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
            />
            <div slot="footer" class="pull-right" v-if="item.isState == 1">
                <van-button size="mini" @click="del(k,i)">删除订单</van-button>
                <van-button size="mini" @click="payment(k,i)">支付</van-button>
            </div>
            <div class="pull-right" v-else-if="item.isState == 2">
                 <van-button size="mini" class="ok" @click="ok(k,i)">确认收货</van-button>
            </div>
            <div class="pull-right" v-else-if="item.isState == 3">
                 <van-button size="mini" @click="allorderdel(k,i)">删除订单</van-button>
            </div>
        </van-panel>
    </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                orderlist:[]
            }
        },
        methods:{
            payment(k,i){
                // 支付
                
                this.$router.push('/receivinggoods') //跳转收货页面
                let arr = this.orderlist[k].splice(i,1); //点击支付截取订单
                arr[0].isState = 2
                this.$store.state.order.receivedlist.push(arr[0]) //支付状态更新
            },
            ok(k,i){
                this.$router.push('/complete')
                let arr = this.orderlist[k].splice(i,1); //点击支付截取订单
                arr[0].isState = 3
                this.$store.state.order.completelist.push(arr[0])
            },
            del(k,i){
                
                // this.$store.state.order.unpaidlist[k].splice(i,1);
                this.orderlist[k].splice(i,1)
            }
        },
        created(){
            this.orderlist.push(this.$store.state.order.unpaidlist)
            this.orderlist.push(this.$store.state.order.receivedlist)
            this.$store.state.nav = false;
            // 
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
.ok{
    margin-right: 16px;
}
.van-panel__header-value{
    color: #333;
}
</style>