import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home.vue'
import Register from '@/views/register.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
