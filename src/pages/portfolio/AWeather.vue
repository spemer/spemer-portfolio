<template lang="pug">
  div#page--aweather
    //- ProjectInfo(v-if="this.$route.path !== '/'")
</template>

<script>
import {globalVar} from '@/globalVar'
// import ProjectInfo from '@/components/ProjectInfo'

export default {
  name: 'aweather',

  metaInfo: {
    title: globalVar.fullname,
    titleTemplate: '%s - AWeather',
  },

  computed: {
    portfolioList () {
      return this.$store.state.portfolioList
    },
  },

  components: {
    // ProjectInfo,
  }

}
</script>

<style lang="scss">
</style>
