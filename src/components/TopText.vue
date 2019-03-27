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
      //- v-if="this.$route.path === '/about'"
</template>

<script>
export default {
  data () {
    return {

    }
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

  .backToMainPage {
    float: right;
  }
}
</style>
