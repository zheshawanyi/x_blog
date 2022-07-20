<template>
    <div class="main">
        <!-- <layout></layout> -->
       <router-view #default="{route,Component}">
        <transition :enter-active-class="`animate__animated ${$route.meta.transition}`">
            <component :is="Component"></component>
        </transition>
       </router-view>
    </div>
</template>

<script setup lang="ts">
import "animate.css"
import { useRouter } from "vue-router";
import { useTestStore } from "./store";
const Test = useTestStore()
// import layout from './layout/index.vue'
// import  watch  from './components/watch.vue';
</script>

<style lang="less">
.main {
    height: 100vh;
}
</style>
