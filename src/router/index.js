import Vue from 'vue'
import VueRouter from 'vue-router'
import Read from '../views/Read.vue'
import Edit from '../views/Edit.vue'
import Histories from '../views/Histories.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/add',
    name: 'Add',
    component: () => import('../views/Add.vue')
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
    path: '/verify',
    name: 'Verify',
    component: () => import('../views/Verify.vue')
  },
  {
    path: '/article/:article_id/history/:history_id',
    name: 'History',
    component: () => import('../views/History.vue')
  },
  {
    path: '/article/:article_id/diff',
    name: 'Diff',
    component: () => import('../views/Diff.vue')
  },
  {
    path: '/user/:username',
    name: 'User',
    component: () => import('../views/User.vue')
  },
  {
    path: '/reset',
    name: 'Reset',
    component: () => import('../views/Reset.vue')
  },
  {
    path: '/article/:id',
    name: 'Article',
    component: () => import('../views/Article.vue'),
    children: [
      {
        path: '',
        name: 'Read',
        component: Read
      },
      {
        path: 'edit',
        name: 'Edit',
        component: Edit
      },
      {
        path: 'history',
        name: 'Histories',
        component: Histories
      }
    ]
  },
  {
    path: '*',
    name: 'P404',
    component: () => import('../views/P404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
