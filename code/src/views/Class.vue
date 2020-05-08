<template>
    <div>
         <van-nav-bar
        :title="$route.name"
        />
            <isclass></isclass>
    </div>
</template>

<script>
import isclass from "../components/class/class.vue";
    export default {
        components :{
            isclass
        }
    }
</script>

<style lang="scss" scoped>

</style>