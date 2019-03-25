<template lang="pug">
  div#app
    Header
    router-view
    ScrollTop
    Hamburger
    Footer
    vue-progress-bar
</template>

<script>
import Vue from 'vue'
import Header from './components/Header'
import ScrollTop from './components/ScrollTop'
import Hamburger from './components/Hamburger'
import Footer from './components/Footer'

export default {
  name: 'app',

  created () {
    // load progressbar
    this.$Progress.start()
    this.$router.beforeEach((to, from, next) => {
      if (to.meta.progress !== undefined) {
        let meta = to.meta.progress
        this.$Progress.parseMeta(meta)
      }
      this.$Progress.start()
      next()
    })
    this.$router.afterEach((to, from) => {
      this.$Progress.finish()
    })
  },

  mounted () {
    this.$Progress.finish()
  },

  components: {
    Header,
    ScrollTop,
    Hamburger,
    Footer,
  },

}
</script>

<style lang="scss">
</style>
