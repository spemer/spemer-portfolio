<template lang="pug">
  div#home
    Header
    router-view
    Portfolio(v-if="this.$route.path === '/'")
    ProjectInfo(v-if="this.$route.path !== '/' &&this.$route.path !== '/articles'")
    TopText(v-if="this.$route.path !== '/' &&this.$route.path !== '/articles'")
    ScrollTop
    Hamburger
    Footer
</template>

<script>
import Vue from 'vue'
import Portfolio from '@/pages/Portfolio'
import ProjectInfo from '@/components/ProjectInfo'
import TopText from '@/components/TopText'
import Header from '@/components/Header'
import ScrollTop from '@/components/ScrollTop'
import Hamburger from '@/components/Hamburger'
import Footer from '@/components/Footer'

export default {
  name: 'home',

  components: {
    Portfolio,
    ProjectInfo,
    TopText,
    Header,
    ScrollTop,
    Hamburger,
    Footer,
  },

}
</script>

<style lang="scss">
</style>
