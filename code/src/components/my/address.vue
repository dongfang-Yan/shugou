<template>
    <div>
        <van-nav-bar
        :title="$route.name"
        />
        <!-- 地址列表 -->
         <van-address-list
            v-model="chosenAddressId"  
            :list="addresslist"
            @add="$router.push('/addressAdd')"
            @edit="onEdit"
            @select="addressOf"
        />
    </div>
</template>

<script>
    export default {
        data(){
            return {
                addresslist:[], //地址们
                chosenAddressId: this.$store.state.address.dataId,
                // this.$store.state.address.addresslist.dataId
            }
        },
        methods:{
            onEdit(item){
                //修改地址
                this.$store.commit("address/addressedit",item.id) //传地址id
                this.$router.push("/addressEdit")  
            },
            addressOf(item){
                //传地址过去 => 订单
                //
                this.$store.commit("address/getId",item.id)
                this.$router.push("/order")
            }
        },
         created(){
            // this.chosenAddressId = this.$store.state.address.dataId
            // 
            this.addresslist = this.$store.state.address.addresslist
            this.$store.state.nav = false;
        },
        destroyed(){
            this.$store.state.nav = true;
        }
    }
</script>

<style lang="scss" scoped>

</style>