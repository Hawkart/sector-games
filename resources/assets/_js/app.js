import Vue from 'vue'
//import './bootstrap'
import { sync } from 'vuex-router-sync'

import store from './store'
import routes from './routes'
import makeRouter from './util/router'
import i18n from '~/plugins/i18n'
import App from './components/App.vue'

const router = makeRouter(routes)

sync(store, router)

import '~/plugins'
import '~/components'

new Vue({
  i18n,
  store,
  router,
  ...App,
  el: '#app'
})
