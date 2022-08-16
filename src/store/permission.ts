import { defineStore } from 'pinia'
import { Names } from './store-name'
import router from "../router/index";
const modules = import.meta.glob("../views/**/**.vue")

export const usePermissonStore = defineStore(Names.PERMISSION, {
  state: () => {
    return {
      asyncRoutes: [],
      whileList : ['/login', '/404']
    }
  },
  //computed 修饰一些值
  getters: {},
  //methods 可以做同步 异步 提交state
  actions: {
    addCount(){
      console.log(12313213);
      
      
    },
    setRoutes(routes: any[]) {
      console.log(router);
      this.asyncRoutes = routes
      //使用addRoute把后台返回的路由添加至路由表
      routes.forEach(item => {
        router.options.routes.push(item)
        if (item.meta.isMenuName == '1') {
          this.whileList.push(item.path)
          router.addRoute({
            path: item.path,
            name: item.name,
            meta: item.meta || {},
            redirect: item.redirect || "",
            component: () => import(/*@vite ignore*/'../layout/index.vue'),
            children: [],
          })
          item.children.forEach(i => {
            this.whileList.push(item.path)
            router.addRoute(item.name, {
              path: i.path,
              name: i.name,
              meta: i.meta || {},
              redirect: i.redirect || "",
              component: modules[/* @vite-ignore */i.component],
              // component: () => import(/*@vite ignore*/i.component),
              children: [],
            })
          })
        } else {
          this.whileList.push(item.path)
          router.addRoute(item.name, {
            path: item.path,
            name: item.name,
            meta: item.meta || {},
            redirect: item.redirect || "",
            component: modules[/* @vite-ignore */item.component],
            // component: () => import(/*@vite ignore*/item.component),
            children: [],
          })
        }
      })
      console.log(router.options);
    }
  }
})