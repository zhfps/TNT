import { App } from 'vue'
import { RouteRecordRaw, createWebHistory, createRouter } from 'vue-router'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'layout',
    component: () => import('../layout/BaseLayout.vue'),
  }
]

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
  history: createWebHistory('/'),
  routes
})

export const userRouter = (app:App<Element>) => {
  app.use(router)
  return router
}
