import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../components/home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home,
    children:[
     {
      path: '/biaoge',
      component: () => import(/* webpackChunkName: "about" */ '../components/biaoge'),
     },
     {
      path: '/tab',
      component: () => import(/* webpackChunkName: "about" */ '../components/tab'),
     },
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
