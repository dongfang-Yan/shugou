<template>
    <div>
         <van-nav-bar
        :title="$route.name"
        />
        <my></my>
    </div>
</template>

<script>
import my from '../components/my/my.vue'
    export default {
        components:{
            my
        }
    }
</script>
<style lang="scss" scoped>

</style>