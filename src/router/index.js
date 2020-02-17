import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views/home')
  },
  {
    path: '/home',
    name: '',
    // this generates a separate chunk (about.[hash].js) for this route
    component: () => import(/* webpackChunkName: "about" */ '../views/home'),
    children: [
      {
        path: '1-1',
        name: '1-1',
        component: () => import('../views/note1a')
      },
      {
        path: '/home',
        component: () => import('../views/home/home')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
