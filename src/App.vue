<template lang="pug">
  div#app
    Header
    router-view
    ScrollTop
    Footer
</template>

<script>
import Header from './components/Header'
import ScrollTop from './components/ScrollTop'
import Footer from './components/Footer'

export default {
  name: 'app',

  components: {
    'Header': Header,
    'ScrollTop': ScrollTop,
    'Footer': Footer
  },

  created () {
    // redirect to f
    if (window.location.href.indexOf(this.g) > -1) {
      window.location.href = this.f
    }

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
}
</script>

<style lang="scss">

</style>
