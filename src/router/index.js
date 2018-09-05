import Vue from 'vue'
import VueRouter from 'vue-router'

import Portfolio from '@/pages/Portfolio'
import Articles from '@/pages/Articles'
import About from '@/pages/About'

import Insharior from '@/pages/portfolio/Insharior'
import IGTracker from '@/pages/portfolio/IGTracker'
import AWeather from '@/pages/portfolio/AWeather'

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
      component: Portfolio,
      children: [
        {
          path: 'insharior',
          component: Insharior,
        },
        {
          path: 'igtracker',
          component: IGTracker,
        },
        {
          path: 'aweather',
          component: AWeather,
        }
      ]
    },
    {
      path: '/articles',
      component: Articles,
    },
    {
      path: '/about',
      component: About,
    },
  ]
})


export default router
