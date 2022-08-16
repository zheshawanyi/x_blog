<template>
    <particles></particles>
    <!--引入粒子特效-->


    <div class="login">
        <el-form
            ref="ruleFormRef"
            :model="ruleForm"
            :rules="rules"
            :label-position="labelPosition"
            label-width="100px"
            style="max-width: 460px"
        >
            <el-form-item label="用户名">
                <el-input v-model="ruleForm.name" placeholder="请输入用户名" />
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="ruleForm.password" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm(ruleFormRef)"
                    >登录</el-button
                >
            </el-form-item>
        </el-form>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref, getCurrentInstance, onMounted } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";
import axios from "axios";
import { usePermissonStore } from '../store/permission'
import particles from '@/components/particles/index.vue'


//路由实例
const router = useRouter();

const mainStore = usePermissonStore()
// const { setRoutes } = mainStore
// console.log(setRoutes)


const labelPosition = ref("left");
const ruleFormRef = ref<FormInstance>();
const rules = reactive<FormRules>({
    password: [{ required: true, message: "请输入密码" }],
});

const ruleForm = reactive({
    name: "",
    password: "",
});

//登录
const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    await formEl.validate((valid, fields) => {
        if (valid) {
            axios
                .get(
                    "https://www.fastmock.site/mock/018a7d4eac618f3482b07584290c6773/x_blog/login"
                )
                .then((res) => {
                    // console.log(import.meta.env.VITE_APP_XBLOG_SERVICE_URL);
                    console.log(router);
                    
                    mainStore.setRoutes(res.data.data.route)
                    // firstStore.addRoutes(res.data.data.route)
                    router.push(router.options.routes[3].path);
                    sessionStorage.setItem("token",'1');
                    // sessionStorage.setItem("route",JSON.stringify(res.data.data.route))
                    
                });
        } else {
            ElMessage({
                message: "请输入密码！",
                type: "warning",
            });
        }
    });
};
</script>

<style lang="less" scoped>
.login {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
:deep(.el-form-item__label){
    z-index: 1000;
}
</style>
