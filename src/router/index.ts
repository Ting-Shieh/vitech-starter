import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  extendRoutes: (routes) => setupLayouts(routes),
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
