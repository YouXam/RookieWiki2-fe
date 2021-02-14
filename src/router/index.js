import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/articles',
    name: 'ArticleList',
    component: () => import('../views/ArticleList.vue')
  },
  {
    path: '/article/:id',
    name: 'Article',
    component: () => import('../views/Article.vue'),
    children: [
      {
        path: '',
        name: 'Read',
        component: () => import('../views/Read.vue')
      },
      {
        path: 'edit',
        name: 'Edit',
        component: () => import('../views/Edit.vue')
      },
      {
        path: 'history',
        name: 'Histories',
        component: () => import('../views/Histories.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
