import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'
import VueFire from 'vuefire'
import VueScrollTo from 'vue-scrollto'

import './style/style.scss'


Vue.use(VueFire)
Vue.use(VueScrollTo)


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
