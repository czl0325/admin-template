import { createRouter, createWebHashHistory, RouterOptions } from "vue-router"

export const constantRouterMap = [
  {
    path: '/',
    component: () => import("@/views/Layout/index.vue"),
    independent: true,
    name: "Index",
    redirect: "/index",
    meta: {
      title: "首页",
      activityPath: '/index'
    },
    children: [
      {
        path: "/index",
        name: "Home",
        component: () => import("@/views/Home/index.vue"),
        meta: {
          title: "首页"
        }
      }
    ]
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/',
    hidden: true
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRouterMap,
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve) => {
      if (savedPosition) {
        resolve(savedPosition)
      } else {
        setTimeout(() => {
          resolve({
            left: 0,
            top: 0
          })
        }, 0)
      }
    })
  }
} as RouterOptions)

export default router
