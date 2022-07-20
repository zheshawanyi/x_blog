import { defineStore } from 'pinia'
import { Names } from './store-name'
import router from "../router/index";
import { defineAsyncComponent } from 'vue';

export const usePermissonStore = defineStore(Names.PERMISSION, {
  state: () => {
    return {
      routes: []
    }
  },
  //computed 修饰一些值
  getters: {},
  //methods 可以做同步 异步 提交state
  actions: {
    addRoutes(route: any[]) {
      //使用addRoute把后台返回的路由添加至路由表
      route.forEach((item, index) => {
        if (!item.children) {
          router.addRoute({
            path: item.path,
            name: item.name,
            meta: item.meta || {},
            redirect: item.redirect || "",
            component: () => defineAsyncComponent(()=>import(/* @vite-ignore */item.component)) ,
            children: [],
          });
        } else {
          router.addRoute('all',{
            path: item.path,
            name: item.name,
            meta: item.meta || {},
            redirect: item.redirect || "",
            component: () => defineAsyncComponent(()=>import(/* @vite-ignore */item.component)),
          });
          item.children.map((i) => {
            // console.log(item.name);
            router.addRoute(item.name, {
              path: i.path,
              name: i.name,
              meta: i.meta || {},
              redirect: i.redirect || "",
              component: () => defineAsyncComponent(()=>import(/* @vite-ignore */i.component)),
              children: [],
            });
          });
        }
      });
       //pinia中存routes
       this.routes = router.getRoutes()
       console.log(router.getRoutes());
       
       //session中存放权限路由
       sessionStorage.setItem("route",JSON.stringify(route));
    }
  }
})