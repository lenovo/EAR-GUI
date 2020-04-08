/*
 * Copyright © 2020-present Lenovo
 *
 * This file is licensed under both the BSD-3 license for individual/non-commercial use and
 * EPL-1.0 license for commercial use. Full text of both licenses can be found in
 * COPYING.BSD and COPYING.EPL files.
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import VueI18n from 'vue-i18n'
import Antd from 'ant-design-vue'

import 'ant-design-vue/dist/antd.css'
import './assets/css/index.css'

import store from './storage/store'
import routes from './router/route'
import messages from './settings/messages'
import './settings/http'

 
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueI18n)
Vue.use(Antd)

const browserLang = (navigator.language || navigator.browserLanguage).toLowerCase();
var langCode = 'en';
if (browserLang) {
  langCode = browserLang
}

const i18n = new VueI18n({
  locale: langCode,
  messages
});

const router = new VueRouter({
  mode: 'hash',
  routes
})

router.beforeEach((to, from, next) => { 
  if(to.path == '/') {
    next({path: '/home'})
  }
  next();
});

window.EarApp = new Vue({
  el: '#app',
  i18n,
  store,
  router,
  render: h => h(App),
})
