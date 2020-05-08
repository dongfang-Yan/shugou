<template>
    <div>
        <van-nav-bar
            :title="$route.name"
            left-text="返回"
            left-arrow
            @click-left="$router.go(-1)"
        />
            <van-address-edit
            :area-list="areaList"
            show-search-result
            :area-columns-placeholder="['请选择', '请选择', '请选择']"
            @save="onSave"
            show-postal
            />
        
    </div>
</template>

<script>
import areaList from "./area.js"
    export default {
          data() {
            return {
                areaList,
            }
        },
        methods: {
            onSave({name,tel,province,city,county,addressDetail,postalCode}) {
                this.$store.commit('address/add',{
                    name,
                    tel,
                    province,
                    city,
                    county,
                    addressDetail,
                    postalCode,
                    address: province+city+county+addressDetail
                    })
                // 
                // 
                this.$router.go(-1); //回到上一级列表页
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

</style>