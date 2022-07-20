import { defineStore } from 'pinia'
import { Names } from './store-name'

export const useTestStore = defineStore(Names.TEST, {
  state: () => {
    return {
      routes: []
    }
  },
  //computed 修饰一些值
  getters: {},
  //methods 可以做同步 异步 提交state
  actions: {
    login() {

    }
  }
})