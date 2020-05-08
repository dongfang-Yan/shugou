<template>
    <div>
    <van-row>
    <van-col span="4"><van-icon name="arrow-left" @click="back"/></van-col>
    <van-col span="16"><van-search v-model="value" placeholder="请输入搜索关键词" /></van-col>
    <van-col span="4">搜索</van-col>
    </van-row>

   
    </div>
</template>

<script>
    export default {
        data(){
            return {
                value:''
            }
        },
        methods:{
           back(){
                this.$router.go(-1);
           }
        },
        created(){
            this.$store.state.nav = false;
        },
        destroyed(){
            this.$store.state.nav = true;
        }
    }
</script>

<style lang="scss" scoped>
.van-row{
    .van-col{
        text-align: center;
        line-height: 58px;
        .van-icon{
            font-size: 20px;
        }
    }
}
</style>