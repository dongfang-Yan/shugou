<template>
    <div>
        <van-sticky>
        <div class="search">
                <van-row>
                <van-col span="3"><span class="iconfont icon-shu"></span></van-col>
                <van-col span="18">
                    <van-search placeholder="请输入搜索关键词" @focus="go"/>
                </van-col>
                <van-col span="2"><van-icon name="contact" @click="$router.push('/my')"/></van-col>
            </van-row>
        </div>
</van-sticky>
        <!-- 引入首页内容 -->
      <home></home>
      <div style="height:50px;"></div>
    </div>
</template>

<script>
import home from "../components/home/home.vue"
// import Swiper from "swiper";
    export default {
        methods:{
            go(){
                this.$router.push("/search")
            }
        },
        components: {
            home
        }
    }
</script>

<style lang="scss" scoped>
    .search{
    background-color: #fff;
    .van-col{
        text-align: center; 
        .van-icon{
                font-size: 20px;
                line-height: 54px;
                margin-left: 10px;
            }
            span{
                font-size: 30px;
                line-height: 54px;
                margin-left: 10px;
                vertical-align: middle;
                color: #2953ff;
            }
    }
    .search_btn{
        font-size: 0.8rem;
        line-height: 54px;
    }
}
</style>