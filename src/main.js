import Vue from 'vue'
import App from '@/App.vue'
import store from '@/store'
import router from '@/router'
import VTooltip from 'v-tooltip'
import VueScrollTo from 'vue-scrollto'
import VueScrollReveal from 'vue-scroll-reveal'
import Lightbox from 'vue-pure-lightbox'

import '@/style/style.scss'

Vue.use(VTooltip)
Vue.use(VueScrollTo)
Vue.use(VueScrollReveal)
Vue.use(Lightbox)

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
