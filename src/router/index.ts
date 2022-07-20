import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { createVNode, render, reactive } from 'vue'
import Layout from '../layout/index.vue'


declare module 'vue-router' {
  interface RouteMeta {
    title: string,
    transition: string
  }
}


const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue'),
    meta: {
      title: '登录页面',
      transition: 'animate__bounce'
    }

  },
  {
    path: '/404',
    name: '404',
    component: () => import("@/views/404.vue"),
    meta: {
      title: '404',
      transition: 'animate__fadeIn'
    }
  },
  {
    path: '/',
    name: 'home',
    component: Layout,
    meta: {
      title: '首页',
      transition: 'animate__fadeIn'
    }
    // redirect:'/mine',
  },
  // {
  //   path: '/mine',
  //   name: 'mine',
  //   component: Layout,
  //   meta: {
  //     title: '菜单1',
  //     transition: 'animate__fadeIn'
  //   },
  //   redirect: '/mine/minelist',
    
  //   children: [
  //     {
  //       path: '/mine/minelist',
  //       name: 'minelist',
  //       component: () => import("@/views/mine/mineList.vue"),
  //       meta: {
  //         title: 'minelist',
  //         transition: 'animate__fadeIn',
  //       },

  //     },
  //     {
  //       path: '/mine/mineinfo',
  //       name: 'mineinfo',
  //       component: () => import("@/views/mine/mineInfo.vue"),
  //       meta: {
  //         title: 'mineinfo',
  //         transition: 'animate__fadeIn'
  //       },
  //     }
  //   ]
  // },
  // {
  //   path: '/',
  //   name: 'mine',
  //   component: Layout,
  //   meta: {
  //     title: '菜单1',
  //     transition: 'animate__fadeIn'
  //   },
  //   redirect: '/mine/minelist',
  //   children: [
  //     {
  //       path: '/mine/minelist',
  //       name: 'minelist',
  //       component: () => import("@/views/mine/mineList.vue"),
  //       meta: {
  //         title: 'minelist',
  //         transition: 'animate__fadeIn'
  //       },
  //     },
  //     {
  //       path: '/mine/mineinfo',
  //       name: 'mineinfo',
  //       component: () => import("@/views/mine/mineInfo.vue"),
  //       meta: {
  //         title: 'mineinfo',
  //         transition: 'animate__fadeIn'
  //       },
  //     }
  //   ]
  // },
  // {
  //   path: '/table',
  //   name: 'table',
  //   component: Layout,
  //   meta: {
  //     title: '菜单2',
  //     transition: 'animate__fadeIn'
  //   },
  //   children: [
  //     {
  //       path: '/table/tablelist',
  //       name: 'tablelist',
  //       component: () => import("@/views/table/tableList.vue"),
  //       meta: {
  //         title: 'tablelist',
  //         transition: 'animate__fadeIn'
  //       },
  //     },
  //     {
  //       path: '/table/tableinfo',
  //       name: 'tableinfo',
  //       component: () => import("@/views/table/tableInfo.vue"),
  //       meta: {
  //         title: 'tableinfo',
  //         transition: 'animate__fadeIn'
  //       },
  //     }
  //   ]
  // },

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

// const whileList = ['/login']
// let routeArr:string[] = []

// router.beforeEach((to, from, next) => {
//   routeArr = []
//   to404(routes)
//   console.log(routeArr);
//   if (!routeArr.includes(to.path)) {
//     next('/404')
//   } else {
//     if (whileList.includes(to.path) || localStorage.getItem('token')) {
//       document.title = to.meta.title
//       next()
//     } else {
//       next('/login')
//     }
//   }


// })

// //判断是否跳转404(有问题)
// const to404 = (arr: any[]) => {
//   arr.forEach(item => {
//     routeArr.push(item.path)
//     if (item.children) {
//       to404(item.children)
//     }
//   })
// }


router.afterEach((to, from, next) => {
})


export default router