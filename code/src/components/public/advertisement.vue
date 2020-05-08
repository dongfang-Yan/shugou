<template>
    <div class="bg">
        <div class="content">
            <span>{{num}}</span>
            <span @click="go">直接打开</span>
        </div>
        <img src="../../assets/imgs/bp.gif" alt="">
    </div>
</template>

<script>
    export default {
        data(){
            return {
                num: 3,
                timer:null
            }
        },
        methods:{
            go(){
                this.$router.push("/home")
                clearInterval(this.timer)
            }
        },
        created(){
            this.$store.state.nav = false;
                this.timer = setInterval(() => {
                if(this.num == 0){
                this.$router.push("/home")
                clearInterval(this.timer)
                }else{
                this.num -= 1;
            }
          },1000);
        },
        destroyed(){
            clearInterval(this.timer)
            this.$store.state.nav = true;
        },
    }
</script>

<style lang="scss" scoped>
.bg{
    position: absolute;
    top: 0;
    bottom: 0;
    background-color: #e08282;
   .content{
       padding-top: 10px;
       text-align: right;
        span{
             font-size: 20px;
             margin-right: 10px;
        }
        .van-button{
            background: none;
            border: none;
        }
    }
    
    img{
        padding-top: 200px;
    }
}
</style>