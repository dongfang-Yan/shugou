<template>
    <div>
        <!-- 修改地址页 -->
          <van-nav-bar
        :title="$route.name"
        />
        
            <van-address-edit
            :area-list="areaList"
            show-search-result
            :area-columns-placeholder="['请选择', '请选择', '请选择']"
            @save="onSave"
            show-postal
            :address-info="addressInfo"
            />
        
    </div>
</template>

<script>
import areaList from "./area.js"
    export default {
          data() {
            return {
                areaList,
                addressInfo:{}  //初始化
            }
        },
        methods: {
            onSave({name,tel,province,city,county,addressDetail,postalCode}){ //结构对象
                this.$router.push("/address") 
                let index = this.$store.state.address.addresslist.findIndex((item) => {
                    return item.id == this.$store.state.address.editId //返回对应索引
                })
                
                //赋值
                this.$store.state.address.addresslist[index].name = name;
                this.$store.state.address.addresslist[index].tel = tel;
                this.$store.state.address.addresslist[index].province = province;
                this.$store.state.address.addresslist[index].city = city;
                this.$store.state.address.addresslist[index].county = county;
                this.$store.state.address.addresslist[index].addressDetail = addressDetail;
                this.$store.state.address.addresslist[index].postalCode = postalCode;
            }
        },
          created(){
            this.$store.state.nav = false;
            this.$store.state.address.addresslist.forEach((item) => {
                if(item.id == this.$store.state.address.editId){
                    this.addressInfo = item
                }
            })
        },
        destroyed(){
            this.$store.state.nav = true;
        }
    }
</script>

<style lang="scss" scoped>

</style>