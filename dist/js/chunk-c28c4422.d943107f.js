(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c28c4422"],{"8fe5":function(t,e,s){"use strict";var i=s("c97c"),r=s.n(i);r.a},c97c:function(t,e,s){},dbdd:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("van-nav-bar",{attrs:{title:t.$route.name,"left-text":"返回","left-arrow":""},on:{"click-left":function(e){return t.$router.push("/my")}}}),t._l(t.orderlist,(function(e,i){return s("div",{key:i},t._l(e,(function(e,r){return s("van-panel",{key:r,attrs:{title:"订单编号:"+e.orderId,status:1==e.isState?"未支付":2==e.isState?"待收货":"已完成"}},[s("van-card",{attrs:{num:e.num,price:e.price,desc:"地址"+e.address,title:e.goodname,thumb:"https://img.yzcdn.cn/vant/ipad.jpeg"}}),1==e.isState?s("div",{staticClass:"pull-right",attrs:{slot:"footer"},slot:"footer"},[s("van-button",{attrs:{size:"mini"},on:{click:function(e){return t.del(i,r)}}},[t._v("删除订单")]),s("van-button",{attrs:{size:"mini"},on:{click:function(e){return t.payment(i,r)}}},[t._v("支付")])],1):2==e.isState?s("div",{staticClass:"pull-right"},[s("van-button",{staticClass:"ok",attrs:{size:"mini"},on:{click:function(e){return t.ok(i,r)}}},[t._v("确认收货")])],1):3==e.isState?s("div",{staticClass:"pull-right"},[s("van-button",{attrs:{size:"mini"},on:{click:function(e){return t.allorderdel(i,r)}}},[t._v("删除订单")])],1):t._e()],1)})),1)}))],2)},r=[],n=(s("a434"),{data:function(){return{orderlist:[]}},methods:{payment:function(t,e){this.$router.push("/receivinggoods");var s=this.orderlist[t].splice(e,1);s[0].isState=2,this.$store.state.order.receivedlist.push(s[0])},ok:function(t,e){this.$router.push("/complete");var s=this.orderlist[t].splice(e,1);s[0].isState=3,this.$store.state.order.completelist.push(s[0])},del:function(t,e){this.orderlist[t].splice(e,1)}},created:function(){this.orderlist.push(this.$store.state.order.unpaidlist),this.orderlist.push(this.$store.state.order.receivedlist),this.$store.state.nav=!1},destroyed:function(){this.$store.state.nav=!0}}),o=n,a=(s("8fe5"),s("2877")),c=Object(a["a"])(o,i,r,!1,null,"4eea439c",null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-c28c4422.d943107f.js.map