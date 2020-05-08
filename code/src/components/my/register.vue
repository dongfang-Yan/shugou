<template>
    <div>
         <van-nav-bar
            left-arrow
            @click-left="$router.go(-1)"
        />
        <div class="title">
            <h3>注册</h3>
        </div>

        <van-field
            v-model="username"
            name="username"
            label="用户名"
            placeholder="用户名"
            autocomplete="off"
            :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
            v-model="password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            autocomplete="off"
            :rules="[{ required: true, message: '请填写密码' }]"
        />
         <van-field
            v-model="password2"
            type="password"
            name="密码"
            autocomplete="off"
            label="确认密码"
            placeholder="请填写确认密码"
            :rules="[{ required: true, message: '请填写确认密码' }]"
        />
       <div style="margin: 20px;">
        <van-button round block color="linear-gradient(to right, #4bb0ff, #6149f6)" native-type="submit" @click="onsubmit">
      注册
    </van-button>
       </div>
    </div>
</template>

<script>
import { Toast } from 'vant';
    export default {
        data(){
            return {
                username: '',
                password: '',
                password2: '',
                userdata:'',
            }
        },
        methods:{
            onsubmit(){
                let _this = this
               if(this.username != "" && this.password != "" && this.password2 == this.password){
                    this.$axios.get('/register',{
                        params:{
                            username: this.username,
                            password: this.password,
                            password2: this.password2,
                        }
                    }).then((req) => {
                        _this.userdata = req
                        _this.$router.push("/login")
                        Toast('注册成功');
                    })
               }else{
                   this.username = this.password = this.password2 = ""
                   Toast('注册失败');
               }
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
.title{
    height: 50px;
    font-size: 28px;
    text-align: center;
}
</style>