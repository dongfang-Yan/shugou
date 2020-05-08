<template>
    <div>
       <van-nav-bar
            left-arrow
            @click-left="$router.push('/my')"
        />
        <div class="title">
            <h3>登录</h3>
        </div>
        <van-form>
        <van-field
          v-model="username"
          name="username"
          label="用户名"
          autocomplete="off"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="password"
          label="密码"
          autocomplete="off"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        
  <div style="margin: 20px;">
        <van-button round block color="linear-gradient(to right, #4bb0ff, #6149f6)" native-type="submit" @click="onsubmit">
      登录
    </van-button>
    <van-button round block type="default" native-type="submit" @click="$router.push('/register')">
      注册
    </van-button>
  </div>
</van-form>
    </div>
</template>

<script>
import { Toast } from 'vant';
    export default {
        data(){
          return {
            username: "",
            password: "",
          }
        },
        methods:{
          onsubmit() {
            let _this = this;
            if(this.username != "" && this.password != ""){
              this.$axios.get('/login',{
                params:{
                    username :this.username,
                    password : this.password
                }
              }).then((req) => {
                Toast("登录成功")
                _this.$router.push("/my")
                _this.$store.state.username = req.config.params.username;
              }).catch(() => {
                // 
                Toast('登录失败');
              })
            }else{
              Toast('登录失败');
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