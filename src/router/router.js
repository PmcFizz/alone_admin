import Main from '@/views/Main.vue'

// 不作为Main组件的子页面展示的页面单独写，如下
export const loginRouter = {
  path: '/login',
  name: 'login',
  meta: {
    title: 'Login - 登录'
  },
  component: () => import('@/views/login.vue')
}

export const page404 = {
  path: '/*',
  name: 'error-404',
  meta: {
    title: '404-页面不存在'
  },
  component: () => import('@/views/error-page/404.vue')
}

export const page403 = {
  path: '/403',
  meta: {
    title: '403-权限不足'
  },
  name: 'error-403',
  component: () => import('@//views/error-page/403.vue')
}

export const page500 = {
  path: '/500',
  meta: {
    title: '500-服务端错误'
  },
  name: 'error-500',
  component: () => import('@/views/error-page/500.vue')
}

export const locking = {
  path: '/locking',
  name: 'locking',
  component: () => import('@/views/main-components/lockscreen/components/locking-page.vue')
}

// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
  path: '/',
  name: 'otherRouter',
  redirect: '/home',
  component: Main,
  children: [
    {path: 'home', title: {i18n: 'home'}, name: 'home_index', component: () => import('@/views/home/home.vue')},
    {
      path: 'ownspace',
      title: '个人中心',
      name: 'ownspace_index',
      component: () => import('@/views/own-space/own-space.vue')
    }
  ]
}

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
  {
    path: '/member-manage',
    icon: 'android-checkbox',
    name: 'member',
    title: '会员管理',
    access: 0,
    component: Main,
    children: [
      {
        path: 'index',
        title: '会员管理',
        name: 'member-manage',
        access: 0,
        component: () => import('@/views/member/member-manage.vue')
      }
    ]
  },
  {
    path: '/activity-manage',
    icon: 'android-checkbox',
    name: 'activity',
    title: '活动管理',
    access: 0,
    component: Main,
    children: [
      {
        path: 'price',
        title: '活动价格',
        name: 'activity-price',
        access: 0,
        component: () => import('@/views/activity/activity-price.vue')
      }, {
        path: 'type',
        title: '活动类型',
        name: 'activity-type',
        access: 0,
        component: () => import('@/views/activity/activity-type.vue')
      }, {
        path: 'list',
        title: '活动列表',
        name: 'activity-list',
        access: 0,
        component: () => import('@/views/activity/activity-list.vue')
      }]
  },
  {
    path: '/order-manage',
    icon: 'android-checkbox',
    name: 'order',
    title: '订单管理',
    component: Main,
    children: [{
      path: 'index',
      title: '订单管理',
      name: 'order-list',
      access: 0,
      component: () => import('@/views/order/order-list.vue')
    }]
  },
  {
    path: '/rubbish-manage',
    icon: 'android-checkbox',
    name: 'rubbish',
    title: '垃圾管理',
    component: Main,
    children: [
      {
        path: 'type',
        title: '垃圾分类',
        name: 'rubbish-type',
        access: 0,
        component: () => import('@/views/rubbish/rubbish-type.vue')
      },
      {
        path: 'size',
        title: '垃圾尺寸',
        name: 'rubbish-size',
        access: 0,
        component: () => import('@/views/rubbish/rubbish-size.vue')
      },
      {
        path: 'set',
        title: '垃圾设置',
        name: 'rubbish-set',
        access: 0,
        component: () => import('@/views/rubbish/rubbish-set.vue')
      },
      {
        path: 'sign',
        title: '垃圾标记',
        name: 'rubbish-sign',
        access: 0,
        component: () => import('@/views/rubbish/rubbish-sign.vue')
      },
    ]
  },
  {
    path: '/good-manage',
    icon: 'android-checkbox',
    name: 'good',
    title: '物资管理',
    component: Main,
    children: [
      {
        path: 'index',
        title: '物资管理',
        name: 'good-list',
        access: 0,
        component: () => import('@/views/good/good-list.vue')
      }
    ]
  }
]

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
  loginRouter,
  otherRouter,
  locking,
  ...appRouter,
  page500,
  page403,
  page404
]
