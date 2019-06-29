import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Home from './views/Home.vue'
import User from './views/User.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Login',
      component: Login
    },
    {
      path: '/Home',
      component: Home,
      children: [
        {
          path: '/User',
          component: User
        }
      ]
    },
    {
      path: '/Home',
      component: Home
    }
  ]
})
