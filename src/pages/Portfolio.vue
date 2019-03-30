<template lang="pug">
  div#portfolio__div
    div.portfolio__grid
      slot(
        v-if="this.$route.path === '/'"
      )
        router-link.portfolio__grid--link(
          v-for="(value, key) in portfolioList"
          :key="key"
          :to="value[0]"
          v-scroll-to="'body'"
        )
          img.portfolio__grid--img(
            :src="'src/assets/' + value[1]"
            v-tooltip.bottom="{content: key, delay: {show: 500, hide: 100}}"
          )
    router-view
</template>

<script>
import {globalVar} from '@/globalVar'

export default {
  name: 'portfolio',

  computed: {
    portfolioList () {
      return this.$store.state.portfolioList
    },
  },

  metaInfo: {
    title: globalVar.fullname,
    titleTemplate: '%s',
  },

}
</script>

<style lang="scss">
</style>
