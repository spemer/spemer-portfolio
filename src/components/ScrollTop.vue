<template lang="pug">
  div#scroll-top
    transition(name="fade")
      button.btn--top(
        v-if="scrolled"
        title="Back to top"
        v-scroll-to="'body'"
      )
        i.fa.fa-chevron-up
</template>

<script>
export default {
  name: 'scrollTop',
  data () {
    return {
      scrolled: false
    }
  },
  methods: {
    handleScroll () {
      this.scrolled = window.scrollY > 500;
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style lang="scss">

</style>
