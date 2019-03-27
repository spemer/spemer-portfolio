import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  debug: true,

  state: {
    cv: 'https://docs.google.com/document/d/19k4fNueOGIZrsyS3PaqAeYrAtQdCukjE4LN2vIprKqU/edit?usp=sharing',

    linkList: {
      Portfolio: '/',
      Articles: '/articles',
      About: '/about',
    },

    portfolioList: {
      Insharior: ['/insharior', 'insharior/thumb.png'],
      IGTracker: ['/igtracker', 'igtracker/thumb.png'],
      AWeather: ['/aweather', 'weather/thumb.png'],
      UnivCam: ['/univcam', 'univcam/thumb.png'],
      Neighbors: ['/neighbors', 'dream/cover.png'],
      Memoree: ['/memoree', 'memoree/thumb.png'],
      Sprinter: ['/sprinter', 'sprinter/thumb.png'],
      Suhyup: ['/suhyup', 'suhyup/thumb.png'],
      FlatIcons: ['/flaticons', 'flaticon/house.jpg'],
    },

    articlesList: {
      Sass: ['/sass', 'sass/thumb.png'],
      Gulp: ['/gulp', 'gulp/thumb.png'],
      Favicon: ['/favicon', 'favicon/favicon.png'],
      Scrollbar: ['/scrollbar', 'scroll/cover.png'],
      Variables: ['/css-variables', 'css/thumb.png'],
      Bodymovin: ['/bodymovin', 'bodymovin/cover.png'],
      Jekyll: ['/jekyll', 'jekyll/thumb.png'],
      Material: ['/material', 'material/material.png'],
      Firebase: ['/firebase', 'firebase/firebase_logo.jpg'],
    },

    snsIconList: {
      Twitter: {
        href: 'twitter.com/OfficialSpemer',
        iconID: 'twIcon',
        iconClass: 'twitter'
      },
      GitHub: {
        href: 'github.com/spemer',
        iconID: 'ghIcon',
        iconClass: 'github'
      },
      FaceBook: {
        href: 'facebook.com/ghsspower',
        iconID: 'fbIcon',
        iconClass: 'facebook'
      },
      Instagram: {
        href: 'instagram.com/spemer/',
        iconID: 'inIcon',
        iconClass: 'instagram'
      },
      LinkedIn: {
        href: 'www.linkedin.com/in/hyouk-seo-0b6801122/',
        iconID: 'liIcon',
        iconClass: 'linkedin'
      },
      Dribbble: {
        href: 'dribbble.com/spemer',
        iconID: 'drIcon',
        iconClass: 'dribbble'
      },
      Medium: {
        href: 'medium.com/@spemer',
        iconID: 'medIcon',
        iconClass: 'medium'
      },
      Behance: {
        href: 'behance.net/spemer',
        iconID: 'beIcon',
        iconClass: 'behance'
      }
    },

  },

  mutations: {}
})
