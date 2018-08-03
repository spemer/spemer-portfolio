<template lang="pug">
  div#app
    Header
    router-view
    Footer
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'app',
  components: {
    'Header': Header,
    'Footer': Footer
  }
}
</script>

<style lang="scss">
@import './style/style.scss';

#app {

  .text--title {
    font-family: 'Roboto Slab', sans-serif;
    font-weight: 900;
  }
}
</style>
