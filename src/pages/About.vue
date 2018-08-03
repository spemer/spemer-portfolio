<template lang="pug">
  div#about__div
    div.about__section
      h1.about__section--title Hyouk Seo(Spemer)
      p.about__section--text I am a detail-oriented Digital Product & User Experience Designer, Problem Solver and Markup Developer; create design based on human-centered design. I have strong desire to understand user needs, target behavior and problem solving based on research, data and survey. Designing meaningful and helpful product is the most delightful thing for me, especially as ‘Human Experience Advocator’. Majored in Graphic Design, minor in Computer Science in Incheon National University. Let's design for people better!
</template>

<script>
export default {
  name: 'About',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">
@import '../style/style.scss';

#about__div {

  .about__section {

    .about__section--title {
      font-size: $grid6x;
    }
  }
}
</style>
