import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/HomePage'
import Login from '../pages/Login'
import Registration from '../pages/Registration'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      requireAuth: false
    },
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    meta: {
      requireAuth: false
    },
    component: Registration
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
