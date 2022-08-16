import router from './index'
import Layout from '../layout/index.vue'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import pinia from '../store/store'
import { usePermissonStore } from '../store/permission'

const store = usePermissonStore(pinia)

const modules = import.meta.glob("../views/**/**.vue")
let whileList = ['/login', '/404']
let routeArr = []
//页面刷新路由失效（未解决）
//跳转404
router.beforeEach((to, from, next) => {
  NProgress.start()
  routeArr = []
  to404(router.options.routes)
  if (router.options.routes.length == 3) {
    if (from.path == '/login') {
      whileList = ['/login', '/404', '/']
    }
    let asyncRoutes = JSON.parse(sessionStorage.getItem('route'))
    if (asyncRoutes) {
      onFilterRoutes(asyncRoutes)
    }
    next(to.path)
  } else {
    if (!routeArr.includes(to.path)) {
      next('/404')
    } else {
      if (whileList.includes(to.path) || sessionStorage.getItem('token')) {
        document.title = to.meta.title
        next()
      } else {
        next('/login')
      }
    }
  }
})

const onFilterRoutes = (routes) => {
  routes.forEach(item => {
    router.options.routes.push(item)
    if (item.meta.isMenuName == '1') {
      whileList.push(item.path)
      router.addRoute({
        path: item.path,
        name: item.name,
        meta: item.meta || {},
        redirect: item.redirect || "",
        component: () => import(/*@vite ignore*/'../layout/index.vue'),
        children: [],
      })
      item.children.forEach(i => {
        whileList.push(i.path)
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
      whileList.push(item.path)
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
  store.setRoutes(routes)
}

//判断是否跳转404(有问题)
const to404 = (arr: any[]) => {


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
