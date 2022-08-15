import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入 Element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


// //路由守卫
// router.beforeEach((to, from, next) => {
//   next()
//   const token = sessionStorage.getItem('token')
//   if (!token) return next('/')
// })

// Axios.interceptors.request.use(function (config) {
//   config.headers.Authorization = sessionStorage.getItem('token')
//   return config
// }, function (error) {
//   return Promise.reject(error)
// })


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
