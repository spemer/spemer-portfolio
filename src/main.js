import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'
import VueFire from 'vuefire'
import './style/style.scss'


Vue.use(VueFire)


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
