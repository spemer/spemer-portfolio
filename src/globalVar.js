import Vue from 'vue';

export const globalVar = new Vue({
  data: {
    name: 'Hyouk Seo',
    nickname: 'Spemer',
    fullname: 'Hyouk Seo(Spemer)',

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
  },
});
