import VueRouter, { RouteConfig } from 'vue-router'
import Home from '@/views/home/index.vue'

const routes: RouteConfig[] = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/todo',
    component: () => import('@/views/todo/index.vue')
  }
]

export default new VueRouter({
  mode: 'hash',
  routes,
})