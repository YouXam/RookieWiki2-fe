import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify'
import NProgress from 'nprogress'
import mavonEditor from 'mavon-editor'
import 'vuetify/dist/vuetify.min.css'
import 'nprogress/nprogress.css'
import 'github-markdown-css/github-markdown.css'

const base = 'http://192.168.31.211:3000/api/'

NProgress.configure({
  easing: 'ease',
  speed: 500,
  showSpinner: false,
  trickleSpeed: 200,
  minimum: 0.1
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

Vue.config.productionTip = false
Vue.use(Vuetify)
Vue.use(mavonEditor)
Vue.prototype.get = async function (url) {
  const options = {
    cache: 'no-cache',
    headers: {},
    method: 'GET'
  }
  if (localStorage.getItem('token')) options.headers.Authorization = 'Bearer ' + localStorage.getItem('token')
  const res = await fetch(base + url, options)
  return await res.json()
}
Vue.prototype.post = async function (url, data) {
  const options = {
    body: JSON.stringify(data),
    cache: 'no-cache',
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST'
  }
  if (localStorage.getItem('token')) options.headers.Authorization = 'Bearer ' + localStorage.getItem('token')
  const res = await fetch(base + url, options)
  return await res.json()
}

new Vue({
  router,
  vuetify: new Vuetify(),
  render: h => h(App)
}).$mount('#app')
