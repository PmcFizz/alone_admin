import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/Layout/Layout.vue'

const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: _import('Home')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/mycomponent',
      name: 'mycomponent',
      component: _import('PrivateComponent')
    },
    {
      path: '/myWork',
      name: '我的工作',
      component: Layout,
      children: [
        {
          path: 'todo',
          component: _import('MyWork/WorkList'),
          name: '我的工作台',
          meta: {title: '我的工作台'}
        }
      ]
    }
  ]
})
