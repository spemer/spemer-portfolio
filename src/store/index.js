import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  debug: true,

  state: {
    thisUrl: window.location.href,
    cv: 'https://docs.google.com/document/d/19k4fNueOGIZrsyS3PaqAeYrAtQdCukjE4LN2vIprKqU/edit?usp=sharing',

    linkList: {
      Portfolio: '/',
      Articles: '/articles',
      About: '/about',
    },

    portfolioList: {
      Insharior: [
        '/insharior',
        'insharior/thumb.png',
        'Insharior: UX Case Study & Design Process',
        'June 6, 2017 (6 Weeks)',
        'Adobe XD, Adobe Photoshop, Adobe Illustrator, Xtensio, Studio XID ProtoPie',
      ],
      IGTracker: [
        '/igtracker',
        'igtracker/thumb.png',
        'IGTracker  -  UX case study',
        'August 20, 2017 (2 Weeks)',
        'Adobe XD, Adobe Photoshop, Adobe Illustrator, Kakao Oven, Studio XID ProtoPie, MarvelApp',
      ],
      AWeather: [
        '/aweather',
        'weather/thumb.png',
        'UX Case study — Weather notification application',
        'November 23, 2017 (2 Weeks)',
        'Adobe XD, Adobe Photoshop, Adobe Illustrator, Kakao Oven, Studio XID ProtoPie',
      ],
      UnivCam: [
        '/univcam',
        'univcam/thumb.png',
        'UnivCam - Case Study & Design Process',
        'August 11, 2017 (12 Weeks)',
        'Adobe XD, Adobe Photoshop, Adobe Illustrator, MarvelApp, Trello, Zeplin',
      ],
      Neighbors: [
        '/neighbors',
        'dream/cover.png',
        'SNS application for neighborhood',
        'October 27, 2017',
        'Sketch App, Adobe Experience Design CC 2017, Studio XID ProtoPie',
      ],
      Memoree: [
        '/memoree',
        'memoree/thumb.png',
        'Memoree - Minimal UI/UX design for iOS',
        'August 27, 2017 (1 Week)',
        'Adobe Experience Design CC',
      ],
      Sprinter: [
        '/sprinter',
        'sprinter/thumb.png',
        'ToDo list & task management application UI/UX design',
        'July 13, 2017 (10 Weeks)',
        'Adobe Photoshop CC 2017, Adobe Illustrator CC 2017, Adobe Experience Design CC 2017, Zeplin, Trello, MarvelApp',
      ],
      Suhyup: [
        '/suhyup',
        'suhyup/thumb.png',
        'Suhyup Mobile Banking System Design UI/UX Renewal',
        'April 16, 2017 (4 Weeks)',
        'Adobe Photoshop CC 2017, Adobe Illustrator CC 2017, Adobe Experience Design CC 2017',
      ],
      FlatIcons: [
        '/flaticons',
        'flaticon/house.jpg',
        'Flat vector icons',
        'Adobe Illustrator CS6',
        'November 2015',
      ],
    },

    articlesList: {
      Sass: [
        '/sass',
        'sass/thumb.png'
      ],
      Gulp: [
        '/gulp',
        'gulp/thumb.png'
      ],
      Favicon: [
        '/favicon',
        'favicon/favicon.png'
      ],
      Scrollbar: [
        '/scrollbar',
        'scroll/cover.png'
      ],
      Variables: [
        '/css-variables',
        'css/thumb.png'
      ],
      Bodymovin: [
        '/bodymovin',
        'bodymovin/cover.png'
      ],
      Jekyll: [
        '/jekyll',
        'jekyll/thumb.png'
      ],
      Material: [
        '/material',
        'material/material.png'
      ],
      Firebase: [
        '/firebase',
        'firebase/firebase_logo.jpg'
      ],
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
