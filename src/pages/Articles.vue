<template lang="pug">
  div#articles__div
    div.articles__grid
      slot(
        v-if="this.$route.path === '/articles'"
      )
        router-link.articles__grid--link(
          v-for="(value, key) in articlesList"
          :key="key"
          :to="'/articles' + value[0]"
          v-scroll-to="'body'"
        )
          img.articles__grid--img(
            :src="'src/assets/' + value[1]"
            v-tooltip.bottom="{content: key, delay: {show: 500, hide: 100}}"
          )
    router-view
</template>

<script>
import {globalVar} from '@/globalVar'

export default {
  name: 'articles',

  computed: {
    articlesList () {
      return this.$store.state.articlesList
    },

    fullname() {
      return this.$store.state.fullname
    },
  },

  metaInfo: {
    title: globalVar.fullname,
    titleTemplate: '%s - Articles',
  },

}
</script>

<style lang="scss">
</style>
