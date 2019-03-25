import Vue from 'vue';
import VueRouter from 'vue-router';
import Meta from 'vue-meta';

import Portfolio from '@/pages/Portfolio';
import Articles from '@/pages/Articles';
import About from '@/pages/About';

import Insharior from '@/pages/portfolio/Insharior';
import IGTracker from '@/pages/portfolio/IGTracker';
import AWeather from '@/pages/portfolio/AWeather';
import UnivCam from '@/pages/portfolio/UnivCam';
import Neighbors from '@/pages/portfolio/Neighbors';
import Memoree from '@/pages/portfolio/Memoree';
import Sprinter from '@/pages/portfolio/Sprinter';
import Suhyup from '@/pages/portfolio/Suhyup';
import FlatIcons from '@/pages/portfolio/FlatIcons';

import Sass from '@/pages/articles/Sass';
import Gulp from '@/pages/articles/Gulp';
import Favicon from '@/pages/articles/Favicon';
import ScrollBar from '@/pages/articles/ScrollBar';
import Css from '@/pages/articles/Css';
import Bodymovin from '@/pages/articles/Bodymovin';
import Jekyll from '@/pages/articles/Jekyll';
import Material from '@/pages/articles/Material';
import Firebase from '@/pages/articles/Firebase';

Vue.use(VueRouter);
Vue.use(Meta);

let router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/portfolio',
    },
    {
      path: '/',
      redirect: '/portfolio',
    },
    {
      path: '/portfolio',
      component: Portfolio,
      children: [
        { path: 'insharior', component: Insharior },
        { path: 'igtracker', component: IGTracker },
        { path: 'aweather', component: AWeather },
        { path: 'univcam', component: UnivCam },
        { path: 'neighbors', component: Neighbors },
        { path: 'memoree', component: Memoree },
        { path: 'sprinter', component: Sprinter },
        { path: 'suhyup', component: Suhyup },
        { path: 'flaticons', component: FlatIcons },
      ],
    },
    {
      path: '/articles',
      component: Articles,
      children: [
        { path: 'sass', component: Sass },
        { path: 'gulp', component: Gulp },
        { path: 'favicon', component: Favicon },
        { path: 'scrollbar', component: ScrollBar },
        { path: 'css-variables', component: Css },
        { path: 'bodymovin', component: Bodymovin },
        { path: 'jekyll', component: Jekyll },
        { path: 'material', component: Material },
        { path: 'firebase', component: Firebase },
      ],
    },
    {
      path: '/about',
      component: About,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});

export default router;
