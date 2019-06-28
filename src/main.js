import Vue from 'vue'
import App from './App.vue'
import router from './router'

//1.引入EelementUI库
import ElementUI from 'element-ui'
//2.引入css
import 'element-ui/lib/theme-chalk/index.css'

import './assets/css/index.css'
//3.安装EelementUI
Vue.use(ElementUI);

Vue.config.productionTip = false


// 注册一个导航守卫
router.beforeEach((to, from, next) => {
  // 判断用户是不是访问登陆页面
  if(to.path === "/Login"){
    next()
    return
  }
  // 如果是访问其他页面 判断用户是否进行登陆了
  // 如果没登陆 直接跳转到登陆页面
  // 如果登陆了 那就直接放行

  if(localStorage.getItem('token')){
    next()
  }else{
    // 如果没有返回登陆页面
    router.push('/Login')
  }
  // console.log('导航守卫触发了')
  // next 提供页面跳转  调用方法会进行跳转
  // next()
  //
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
