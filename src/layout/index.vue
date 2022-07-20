<template>
    <div class="common-layout">
        <el-container>
            <el-header><Header></Header></el-header>
            <el-container>
                <el-aside width="200px"
                    ><Menu :data="list" @on-click="getList" title="测批"></Menu
                ></el-aside>
                <el-main><Content> </Content></el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup lang="ts">
import Menu from "./menu/index.vue";
import Header from "./header/index.vue";
import Content from "./content/index.vue";
import { reactive } from "vue";

const list = reactive<number[]>([1, 2, 3]);
const getList = (list: number[]) => {
    console.log(list);
};
</script>

<style lang="less" scoped>
.common-layout {
    height: 100%;
    :deep(.el-container) {
        height: 100%;
    }
}
</style>
