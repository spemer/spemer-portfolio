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
  }
}
</script>

<style lang="scss">

</style>
