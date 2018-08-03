import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import Articles from '../pages/Articles.vue'
import About from '../pages/About.vue'

import Insharior from '../pages/portfolio/Insharior.vue'
import IGTracker from '../pages/portfolio/IGTracker.vue'
import AWeather from '../pages/portfolio/AWeather.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/articles',
      component: Articles
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/portfolio/insharior',
      component: Insharior
    },
    {
      path: '/portfolio/igtracker',
      component: IGTracker
    },
    {
      path: '/portfolio/aweather',
      component: AWeather
    }
  ]
})


export default router
