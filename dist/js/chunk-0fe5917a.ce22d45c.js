(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0fe5917a"],{"5d87":function(e,s,a){},dea1:function(e,s,a){"use strict";var t=a("5d87"),r=a.n(t);r.a},efbd:function(e,s,a){"use strict";a.r(s);var t=function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",[a("van-nav-bar",{attrs:{"left-arrow":""},on:{"click-left":function(s){return e.$router.go(-1)}}}),e._m(0),a("van-field",{attrs:{name:"username",label:"用户名",placeholder:"用户名",autocomplete:"off",rules:[{required:!0,message:"请填写用户名"}]},model:{value:e.username,callback:function(s){e.username=s},expression:"username"}}),a("van-field",{attrs:{type:"password",name:"密码",label:"密码",placeholder:"密码",autocomplete:"off",rules:[{required:!0,message:"请填写密码"}]},model:{value:e.password,callback:function(s){e.password=s},expression:"password"}}),a("van-field",{attrs:{type:"password",name:"密码",autocomplete:"off",label:"确认密码",placeholder:"请填写确认密码",rules:[{required:!0,message:"请填写确认密码"}]},model:{value:e.password2,callback:function(s){e.password2=s},expression:"password2"}}),a("div",{staticStyle:{margin:"20px"}},[a("van-button",{attrs:{round:"",block:"",color:"linear-gradient(to right, #4bb0ff, #6149f6)","native-type":"submit"},on:{click:e.onsubmit}},[e._v(" 注册 ")])],1)],1)},r=[function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",{staticClass:"title"},[a("h3",[e._v("注册")])])}],n=a("d399"),o={data:function(){return{username:"",password:"",password2:"",userdata:""}},methods:{onsubmit:function(){var e=this;""!=this.username&&""!=this.password&&this.password2==this.password?this.$axios.get("/register",{params:{username:this.username,password:this.password,password2:this.password2}}).then((function(s){e.userdata=s,e.$router.push("/login"),Object(n["a"])("注册成功")})):(this.username=this.password=this.password2="",Object(n["a"])("注册失败"))}},created:function(){this.$store.state.nav=!1},destroyed:function(){this.$store.state.nav=!0}},i=o,u=(a("dea1"),a("2877")),l=Object(u["a"])(i,t,r,!1,null,"0f9cb158",null);s["default"]=l.exports}}]);
//# sourceMappingURL=chunk-0fe5917a.ce22d45c.js.map