(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d225035"],{e31b:function(s,t,e){"use strict";e.r(t);var d=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",[e("van-nav-bar",{attrs:{title:s.$route.name}}),e("van-address-list",{attrs:{list:s.addresslist},on:{add:function(t){return s.$router.push("/addressAdd")},edit:s.onEdit,select:s.addressOf},model:{value:s.chosenAddressId,callback:function(t){s.chosenAddressId=t},expression:"chosenAddressId"}})],1)},r=[],a={data:function(){return{addresslist:[],chosenAddressId:this.$store.state.address.dataId}},methods:{onEdit:function(s){this.$store.commit("address/addressedit",s.id),this.$router.push("/addressEdit")},addressOf:function(s){this.$store.commit("address/getId",s.id),this.$router.push("/order")}},created:function(){this.addresslist=this.$store.state.address.addresslist,this.$store.state.nav=!1},destroyed:function(){this.$store.state.nav=!0}},n=a,i=e("2877"),o=Object(i["a"])(n,d,r,!1,null,"23c7ebc2",null);t["default"]=o.exports}}]);
//# sourceMappingURL=chunk-2d225035.88a3cbf5.js.map