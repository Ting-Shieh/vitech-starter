import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'
import component from 'element-plus/es/components/tree-select/src/tree-select-option.mjs'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  extendRoutes: (routes: RouteRecordRaw[]) => setupLayouts(routes),
  // extendRoutes: (routes: RouteRecordRaw[]) => {
  //   // // method 1
  //   // return [
  //   //   ...setupLayouts(routes),
  //   //   {
  //   //     path: '/.....',
  //   //     component: () => import('@/pages/')
  //   //   }
  //   // ]
  //   // // method 2
  //   // return [
  //   //   ...setupLayouts([
  //   //     ...routes,
  //   //     {
  //   //       path: '/.....',
  //   //       component: () => import('@/pages/')
  //   //     }
  //   //   ])
  //   // ]
  // },
  // routes
  // routes: [
  //   {
  //     path: '/',
  //     name: 'home',
  //     component: HomeView
  //   },
  //   {
  //     path: '/about',
  //     name: 'about',
  //     // route level code-splitting
  //     // this generates a separate chunk (About.[hash].js) for this route
  //     // which is lazy-loaded when the route is visited.
  //     component: () => import('../views/AboutView.vue')
  //   }
  // ]
})

export default router
