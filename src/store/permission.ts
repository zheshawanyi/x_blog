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
    setRoutes(routes: any[]) {
      this.asyncRoutes = routes
    }
  }
})