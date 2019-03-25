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
          )
    router-view
</template>

<script>
import {globalVar} from '@/globalVar'

export default {
  name: 'articles',
  data () {
    return {
      articlesList: {
        Sass: [
          globalVar.articlesList.Sass[0],
          globalVar.articlesList.Sass[1],
        ],
        Gulp: [
          globalVar.articlesList.Gulp[0],
          globalVar.articlesList.Gulp[1],
        ],
        Favicon: [
          globalVar.articlesList.Favicon[0],
          globalVar.articlesList.Favicon[1],
        ],
        Scrollbar: [
          globalVar.articlesList.Scrollbar[0],
          globalVar.articlesList.Scrollbar[1],
        ],
        Variables: [
          globalVar.articlesList.Variables[0],
          globalVar.articlesList.Variables[1],
        ],
        Bodymovin: [
          globalVar.articlesList.Bodymovin[0],
          globalVar.articlesList.Bodymovin[1],
        ],
        Jekyll: [
          globalVar.articlesList.Jekyll[0],
          globalVar.articlesList.Jekyll[1],
        ],
        Material: [
          globalVar.articlesList.Material[0],
          globalVar.articlesList.Material[1],
        ],
        Firebase: [
          globalVar.articlesList.Firebase[0],
          globalVar.articlesList.Firebase[1],
        ],
      },
    }
  },

  metaInfo: {
    title: globalVar.fullname,
    titleTemplate: '%s - Articles',
  },

}
</script>

<style lang="scss">
</style>
