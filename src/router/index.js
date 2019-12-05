import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Home from '@/components/Home'
import Application from '@/components/Application'
import Config from '@/components/Config'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'HelloWorld',
      component: Home
    },
    {
      path: '/index',
      component: Index
    },
    {
      path: '/application',
      component: Application
    },
    {
      path: '/config',
      component: Config
    },
    {
      path: ''
    }
  ]
})
