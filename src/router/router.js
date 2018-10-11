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

// 拼图
export const jigsawRouter = {
  path: '/jigsaw',
  name: 'jigsaw',
  access: 0,
  meta: {
    title: '拼图'
  },
  component: () => import('@/views/jigsaw.vue')
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
  component: () => import('@/views/error-page/403.vue')
}

export const page500 = {
  path: '/500',
  meta: {
    title: '500-服务端错误'
  },
  name: 'error-500',
  component: () => import('@/views/jigsaw.vue')
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
  redirect: '/user-manage',
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
    path: '/send-message',
    icon: 'android-checkbox',
    name: 'user',
    title: '发短信',
    access: 0,
    component: Main,
    children: [
      {
        path: 'send',
        title: '发短信',
        name: 'send',
        access: 0,
        component: () => import('@/views/user/user-manage.vue')
      },
      {
        path: 'loop-send',
        title: '循环发送',
        name: 'loopSend',
        access: 0,
        component: () => import('@/views/user/user-manage.vue')
      },
      {
        path: 'often-message',
        title: '常用短信',
        name: 'oftenMessage',
        access: 0,
        component: () => import('@/views/user/user-manage.vue')
      },
      {
        path: 'message-draft',
        title: '短信草稿',
        name: 'messageDraft',
        access: 0,
        component: () => import('@/views/user/user-manage.vue')
      }
    ]
  },
  {
    path: '/customization-manage',
    icon: 'android-checkbox',
    name: 'customization',
    title: '定制短信',
    access: 0,
    component: Main,
    children: [
      {
        path: 'point-point',
        title: '普通点对点',
        name: 'pointPoint',
        access: 0,
        component: () => import('@/views/company/company-list.vue')
      },
      {
        path: 'excel-model-one',
        title: 'excel模板1',
        name: 'excelModelOne',
        access: 0,
        component: () => import('@/views/company/company-list.vue')
      },
      {
        path: 'excel-model-two',
        title: 'excel模板2',
        name: 'excelModelTwo',
        access: 0,
        component: () => import('@/views/company/company-list.vue')
      }
    ]
  },
  {
    path: '/message-manage',
    icon: 'android-checkbox',
    name: 'messageManage',
    title: '短信管理',
    access: 0,
    component: Main,
    children: [
      {
        path: 'send-list',
        title: '发送列表',
        name: 'list',
        access: 0,
        component: () => import('@/views/needs-manage/needs-list.vue')
      }, {
        path: 'my-finish',
        title: '我的已完成',
        name: 'myFinish',
        access: 0,
        component: () => import('@/views/needs-manage/my-needs.vue')
      }, {
        path: 'customer-finish',
        title: '客户已完成',
        name: 'customerFinish',
        access: 0,
        component: () => import('@/views/needs-manage/my-needs.vue')
      }, {
        path: 'loop-message',
        title: '循环短信',
        name: 'loopMessage',
        access: 0,
        component: () => import('@/views/needs-manage/my-needs.vue')
      }
    ]
  },
  {
    path: '/report',
    icon: 'android-checkbox',
    name: 'qualityControl',
    title: '充值消费',
    access: 0,
    component: Main,
    children: [
      {
        path: 'customer-consume-record',
        title: '客户消费记录',
        name: 'customerConsume',
        access: 0,
        component: () => import('@/views/qualityControl/base-model.vue')
      }, {
        path: 'customer-consume-statistics',
        title: '客户消费统计',
        name: 'customerStatistics',
        access: 0,
        component: () => import('@/views/qualityControl/define-model.vue')
      }, {
        path: 'my-consume-record',
        title: '我的消费记录',
        name: 'myConsume',
        access: 0,
        component: () => import('@/views/qualityControl/products.vue')
      }, {
        path: 'customer-consume-statistics',
        title: '我的消费统计',
        name: 'myStatistics',
        access: 0,
        component: () => import('@/views/qualityControl/product-model.vue')
      }]
  },
  {
    path: '/customer',
    icon: 'android-checkbox',
    name: 'customer',
    title: '客户管理',
    access: 0,
    component: Main,
    children: [
      {
        path: 'customer-manage',
        title: '客户管理',
        name: 'customerManage',
        access: 0,
        component: () => import('@/views/img-control/baseImgControl.vue')
      }, {
        path: 'my-info',
        title: '我的信息',
        name: 'highImgControl',
        access: 0,
        component: () => import('@/views/img-control/baseImgControl.vue')
      }, {
        path: 'address-book',
        title: '通讯录',
        name: 'addressBook',
        access: 0,
        component: () => import('@/views/img-control/baseImgControl.vue')
      }]
  },
  {
    path: '/studyExample',
    name: 'studyExample',
    icon: 'android-checkbox',
    title: '系统管理',
    access: 0,
    component: Main,
    children: [
      {
        path: 'menu-dynamic',
        title: '菜单粘合',
        name: 'menu-dynamic',
        access: 0,
        component: () => import('@/views/study-example/menu-dynamic.vue')
      },
      {
        path: 'hover',
        title: 'hover',
        name: 'hover',
        access: 0,
        component: () => import('@/views/study-example/hover.vue')
      },
      {
        path: 'dashed',
        title: 'dashed',
        name: 'dashed',
        access: 0,
        component: () => import('@/views/study-example/dashed.vue')
      }
    ]
  }
]

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
  loginRouter,
  jigsawRouter,
  otherRouter,
  locking,
  ...appRouter,
  page500,
  page403,
  page404
]
