<template>
    <div>
        <router-view></router-view>
        <hr />
        <h1>我是父</h1>
        <button @click="toPage('./')">Login</button>
        <button @click="toPage('./reg')">Reg</button>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
// import layout from './layout/index.vue'
// import  watch  from './components/watch.vue';
const router = useRouter();

const toPage = (url: string) => {
    router.push({
        path: url,
    });
};
</script>

<style lang="less" scoped></style>
