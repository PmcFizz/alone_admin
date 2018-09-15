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
    path: '/user-manage',
    icon: 'android-checkbox',
    name: 'user',
    title: '用户管理',
    access: 0,
    component: Main,
    children: [
      {
        path: 'index',
        title: '用户管理',
        name: 'user-manage',
        access: 0,
        component: () => import('@/views/user/user-manage.vue')
      }
    ]
  },
  {
    path: '/company-manage',
    icon: 'android-checkbox',
    name: 'company',
    title: '公司管理',
    access: 0,
    component: Main,
    children: [
      {
        path: 'list',
        title: '公司列表',
        name: 'company-list',
        access: 0,
        component: () => import('@/views/company/company-list.vue')
      }]
  },
  {
    path: '/needs',
    icon: 'android-checkbox',
    name: 'needs-manage',
    title: '需求管理',
    access: 0,
    component: Main,
    children: [
      {
        path: 'list',
        title: '全部需求列表',
        name: 'needs-list',
        access: 0,
        component: () => import('@/views/needs-manage/needs-list.vue')
      }, {
        path: 'create',
        title: '创建需求',
        name: 'create-needs',
        access: 0,
        component: () => import('@/views/needs-manage/create-needs.vue')
      }, {
        path: 'my-create',
        title: '我的需求列表',
        name: 'my-needs',
        access: 0,
        component: () => import('@/views/needs-manage/my-needs.vue')
      }]
  },
  {
    path: '/qualityControl',
    icon: 'android-checkbox',
    name: 'qualityControl',
    title: '质检产品模板',
    access: 0,
    component: Main,
    children: [
      {
        path: 'base-model',
        title: '基础模板管理',
        name: 'base-model',
        access: 0,
        component: () => import('@/views/qualityControl/base-model.vue')
      }, {
        path: 'define-model',
        title: '自定义模板',
        name: 'define-model',
        access: 0,
        component: () => import('@/views/qualityControl/define-model.vue')
      }, {
        path: 'products',
        title: '产品列表',
        name: 'products',
        access: 0,
        component: () => import('@/views/qualityControl/products.vue')
      }, {
        path: 'product-model',
        title: '产品模板',
        name: 'product-model',
        access: 0,
        component: () => import('@/views/qualityControl/product-model.vue')
      }]
  },
  {
    path: '/imgControl',
    icon: 'android-checkbox',
    name: 'imgControl',
    title: '图片控制',
    access: 0,
    component: Main,
    children: [
      {
        path: 'base-img-control',
        title: '基本图片编辑',
        name: 'baseImgControl',
        access: 0,
        component: () => import('@/views/img-control/baseImgControl.vue')
      }, {
        path: 'middle-img-control',
        title: '中级图片编辑',
        name: 'middleImgControl',
        access: 0,
        component: () => import('@/views/img-control/baseImgControl.vue')
      }, {
        path: 'high-img-control',
        title: '高级图片编辑',
        name: 'highImgControl',
        access: 0,
        component: () => import('@/views/img-control/baseImgControl.vue')
      }]
  },
  {
    path: '/studyExample',
    name: 'studyExample',
    icon: 'android-checkbox',
    title: '练习案例',
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
