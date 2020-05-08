<template>
    <div>
        <van-nav-bar
        :title="$route.name"
        />
        <cart></cart>
    </div>
</template>

<script>
import cart from "../components/cart/cart.vue";
    export default {
        components:{
            cart
        }
    }
</script>

<style lang="scss" scoped>

</style>