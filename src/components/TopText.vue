<template lang="pug">
  div#toptext
    i.fa.fa-angle-up
      a.prevNextTop(
        v-scroll-to="'body'"
        v-tooltip.top="{content: 'Back to Top', delay: {show: 500, hide: 100}}"
      ) &nbsp;Top
    router-link.backToMainPage(
      :to="'/'"
      v-tooltip.top="{content: 'Home', delay: {show: 500, hide: 100}}"
    ) Back to main page
</template>

<script>
export default {
  name: 'topText',

  data () {
    return {
      thisUrl: window.location.href,
      next: undefined,
      back: undefined,
    }
  },

  computed: {
    portfolioList() {
      return this.$store.state.portfolioList
    },

    articlesList() {
      return this.$store.state.articlesList
    },
  }
}
</script>

<style lang="scss">
#toptext {
  margin-top: $grid16x;

  .fa {
    cursor: pointer;

    a {
      @include font-stack-html();
    }
  }

  .back,
  .next,
  .backToMainPage {
    float: right;
  }
}
</style>
