import {
  createRouter,
  createWebHistory
} from 'vue-router'
const routerHistory = createWebHistory()


const router = createRouter({
  history: routerHistory,
  routes: [{
      path: '/',
      name: 'login',
      component: () => import('../components/HelloWorld.vue')
  }],
})

export default router