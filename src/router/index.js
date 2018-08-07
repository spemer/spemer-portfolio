import Vue from 'vue'
import VueRouter from 'vue-router'

import Portfolio from '../pages/Portfolio'
import Articles from '../pages/Articles'
import About from '../pages/About'

import Insharior from '../pages/portfolio/Insharior'
import IGTracker from '../pages/portfolio/IGTracker'
import AWeather from '../pages/portfolio/AWeather'

Vue.use(VueRouter)

let router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/portfolio'
    },
    {
      path: '/',
      redirect: '/portfolio'
    },
    {
      path: '/portfolio',
      component: Portfolio
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
