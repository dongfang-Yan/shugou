<template>
    <div>
         <van-nav-bar
        :title="$route.name"
        left-text="返回"
        left-arrow
        @click-left="addorder"
        />
      <!-- 联系人卡片 -->
            <van-contact-card
            :type="type"
            :name="addresslist.name"
            :tel="addresslist.tel"
            @click="add"
            add-text="添加地址"
            />
        <div v-for="(item,i) in orderlist" :key="i">
             <van-card
                :num="item.num"
                :price="item.price"
                desc="描述信息"
                :title="item.goodname"
                thumb="https://img.yzcdn.cn/vant/ipad.jpeg">
            </van-card>
        </div>

        <!-- 提交支付 -->
        <van-submit-bar
        :price="$store.state.order.orderlist.totals * 100"
        button-text="支付"
        @submit="payment"
        />
    </div>
</template>

<script>
import { Toast } from 'vant';
    export default {
         data() {
            return {
                orderlist:[], //商品信息
                addresslist:[], //地址信息
                name: '',
                tel: '',
                type: "add",
                order: {} //一条订单
            }
    },
    methods: {
    // 添加地址
    add(){
        this.$router.push("/address");
    },
    payment(){
        //支付订单
       if(this.$store.state.address.seladdress.length == 0){
           Toast('地址不能为空');
       }else{
        this.$router.push("/my")
        this.order.orderId = new Date().getTime() + this.addresslist.id;
        this.order.isState = 2; //状态
        this.order.goodname = this.orderlist[0].goodname;
        this.order.price = this.orderlist[0].price;
        this.order.num = this.orderlist.reduce((total,value) => { //计算总物品数量
            return value.num
        },0)
        this.order.name = this.addresslist.name; //姓名
        this.order.tel = this.addresslist.tel; //电话
        this.order.addressId = this.addresslist.id; //地址id
        this.order.address = this.addresslist.address; //地址id
        this.order.postalCode = this.addresslist.postalCode; //邮编
        this.$store.state.order.receivedlist.push(this.order);
        this.orderlist = this.addresslist = this.order = []; //清空数据
        this.$store.state.order.orderlist = []
       }
    },
    addorder(){
        // 生成未付款订单
        if(this.$store.state.address.seladdress.length == 0){
            this.$router.go(-1)
        }else{
            this.order.orderId = new Date().getTime() + this.addresslist.id; //订单编号
            //状态 1 是未付款   2是收货  3已完成
            this.order.isState = 1; //状态
            // reduce 整合
            this.order.goodname = this.orderlist[0].goodname; //商品名称
            this.order.price = this.orderlist[0].price; //商品价格 （只拿第一个，其他都一样）
            // this.order.goodId = this.orderlist.goodId; //商品id  (只拿第一个)
            this.order.num = this.orderlist.reduce((total,value) => { //计算总物品数量
                return value.num
            },0)
            this.order.totals = this.orderlist.totals; //总价格
            // this.order.star = this.orderlist.star; //收藏
            // 地址
            this.order.name = this.addresslist.name; //姓名
            this.order.tel = this.addresslist.tel; //电话
            this.order.addressId = this.addresslist.id; //地址id
            this.order.address = this.addresslist.address; //地址id
            this.order.postalCode = this.addresslist.postalCode; //邮编
            this.$router.push("/my");
            this.$store.state.order.unpaidlist.push(this.order);
            this.orderlist = this.addresslist = this.order = []; //清空数据
            this.$store.state.order.orderlist = []
        }
        // 
       
    }
  },
    created(){
        this.$store.state.nav = false;
        //
        this.orderlist = this.$store.state.order.orderlist
        this.addresslist = this.$store.state.address.seladdress; // 接受地址传过来一条信息
        if(this.addresslist.length != 0){ //判断是否为空
            this.type = "edit"
        }else{
            this.type = "add"
        } 
    },
    destroyed(){
        this.$store.state.nav = true;
    }
}
</script>

<style lang="scss" scoped>
.van-contact-card--add .van-cell__left-icon{
    color: #f01225;
}
</style>