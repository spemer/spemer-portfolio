<template lang="pug">
  div#Header
    div.header__logo
      router-link.header__text--title(to="/") Hyouk Seo
    div.header__link
      router-link(
        v-for="(value, key) in linkList"
        :key="key"
        :to="value") {{key}}
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Header',
  data () {
    return {
      linkList: {
        Portfolio: '/',
        Articles: '/articles',
        About: '/about'
      }
    }
  }
}
</script>

<style lang="scss">

</style>
