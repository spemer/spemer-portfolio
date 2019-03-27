<template lang="pug">
  div#about__div
    div.page__wrapper
      h1.page__wrapper--title Hyouk Seo(Spemer)
      p.page__wrapper--text I am a detail-oriented Digital Product & User Experience Designer, Problem Solver and Markup Developer; create design based on human-centered design. I have strong desire to understand user needs, target behavior and problem solving based on research, data and survey. Designing meaningful and helpful product is the most delightful thing for me, especially as ‘Human Experience Advocator’. Majored in Graphic Design, minor in Computer Science in Incheon National University. Let's design for people better!
</template>

<script>
import {globalVar} from '@/globalVar'

export default {
  name: 'About',

  data () {
    return {

    }
  },

  metaInfo: {
    title: globalVar.fullname,
    titleTemplate: '%s - About',
  },

}
</script>

<style lang="scss">
@import '../style/style.scss';

#about__div {
  .page__wrapper {
    .page__wrapper--title {
      font-size: $grid6x;
    }
  }
}
</style>
