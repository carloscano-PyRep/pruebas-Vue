// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
Vue.use(VueResource);

import {createRouter,createWebHistory} from 'vue-router'

import test from './components/test'
import user from './components/user'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path:'/',
      component: user
    },
    {
      path:'/test',
      component: test
    }
  ]
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  template: '<App/>',
  components: { App },
}).$mount('#app')
