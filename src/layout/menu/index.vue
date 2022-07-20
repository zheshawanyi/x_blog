<template>
    <div class="menu">
        <el-menu
            :default-active="defaultActive"
            class="el-menu-vertical-demo"
            :collapse="isCollapse"
            @open="handleOpen"
            @close="handleClose"
            :router="true"
            :select="selectMenu"
        >
            <template v-for="item in routeList">
                <el-sub-menu v-if="item.children.length>0" :index="item.name">
                        <template #title>
                            <el-icon><location /></el-icon>
                            <span>{{ item.meta.title }}</span>
                        </template>
                        <el-menu-item-group v-for="i in item.children">
                            <el-menu-item :index="i.path">
                                <el-icon><icon-menu /></el-icon>
                                <template #title>{{i.meta.title}}</template>
                            </el-menu-item>
                            
                        </el-menu-item-group>
                </el-sub-menu>
                <el-menu-item v-else :index="item.name">
                    <el-icon><icon-menu /></el-icon>
                    <template #title>{{item.name}}</template>
                </el-menu-item>
            </template>
        </el-menu>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref,Ref, toRaw, onMounted } from "vue";
import { useRouter } from "vue-router";
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
} from "@element-plus/icons-vue";


const router = useRouter();
let routeList:any = JSON.parse(sessionStorage.getItem('route'))


let isCollapse: Ref<boolean> = ref(false);
const handleOpen = (key: string, keyPath: string[]) => {

};
const handleClose = (key: string, keyPath: string[]) => {

};
const selectMenu = (index, indexPath, item, routeResult) => {

};
//默认选中的值
let defaultActive = ref<string>(router.currentRoute.value.fullPath);

const list = reactive<number[]>([6, 6, 6]);
type Props = {
    title: String;
    data: number[];
};
defineProps<Props>();

const emit = defineEmits(["on-click"]);

</script>

<style lang="less" scoped>
.menu {
    width: 200px;
}
</style>
