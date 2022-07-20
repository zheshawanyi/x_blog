import { defineAsyncComponent } from 'vue'
import { RouteRecordRaw } from 'vue-router'
import router from './index'
import Layout from '../layout/index.vue'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'



const modules = import.meta.glob("../views/**/**.vue")
const whileList = ['/login', '/404']
let routeArr = []
//页面刷新路由失效（未解决）
//跳转404（未解决）
router.beforeEach((to, from, next) => {
  NProgress.start()
  routeArr = []
  to404(router.options.routes)
  if (!routeArr.includes(to.path)) {
    next('/404')
  } else {
    if (whileList.includes(to.path) || sessionStorage.getItem('token')) {
      
      let asyncRoutes = JSON.parse(sessionStorage.getItem("route"))
      if(asyncRoutes){
        onFilterRoutes(asyncRoutes)
      }   
      document.title = to.meta.title
      next()
    } else {
      next('/login')
    }
  }


})

const onFilterRoutes = (routes) => {
  let arr = []
  routes.forEach(item => {
    router.options.routes.push(item)
    if (item.meta.isMenuName == '1') {
      router.addRoute({
        path: item.path,
        name: item.name,
        meta: item.meta || {},
        redirect: item.redirect || "",
        // component:modules[/* @vite-ignore */'../layout/index.vue'],
        component: () => import(/*@vite ignore*/'../layout/index.vue'),
        children: [],
      })
      item.children.forEach(i => {
        router.addRoute(item.name, {
          path: i.path,
          name: i.name,
          meta: i.meta || {},
          redirect: i.redirect || "",
          component:modules[/* @vite-ignore */i.component],
          // component: () => import(/*@vite ignore*/i.component),
          children: [],
        })
      })
    } else {
      router.addRoute(item.name, {
        path: item.path,
        name: item.name,
        meta: item.meta || {},
        redirect: item.redirect || "",
        component:modules[/* @vite-ignore */item.component],
        // component: () => import(/*@vite ignore*/item.component),
        children: [],
      })
    }
  })

}

//判断是否跳转404(有问题)
const to404 = (arr: any[]) => {
  console.log(arr);
  
  arr.forEach(item => {
    routeArr.push(item.path)
    if (item.children) {
      to404(item.children)
    }
  })
}
router.afterEach(() => {
  NProgress.done()
})


export default router
