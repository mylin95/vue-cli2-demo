// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// node_modules里引入的依赖不用加/. 等等
// App.vue可以省略
// ./router/index.js 的/index.js可以省略
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 全局引入
import echarts from 'echarts'

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
