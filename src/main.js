import Vue from 'vue'
import App from '@/App.vue'
import store from '@/store'
import router from '@/router'
import VueI18n from 'vue-i18n'
import VTooltip from 'v-tooltip'
import VueScrollTo from 'vue-scrollto'
import VueProgressBar from 'vue-progressbar'
import VueScrollReveal from 'vue-scroll-reveal'
import Lightbox from 'vue-pure-lightbox'

import '@/style/style.scss'

Vue.use(VueI18n)
Vue.use(VTooltip)
Vue.use(VueScrollTo)
Vue.use(VueScrollReveal)
Vue.use(Lightbox)
// https://www.npmjs.com/package/vue-pure-lightbox

Vue.use(VueProgressBar, {
  color: '#034A9A',
  height: '2px'
})

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
