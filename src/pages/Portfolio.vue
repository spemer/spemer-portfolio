<template lang="pug">
  div#portfolio__div

    div.portfolio__grid
      slot(
        v-if="this.$route.path === '/portfolio'"
      )
        router-link.portfolio__grid--link(
          v-for="(value, key) in portfolioList"
          :key="key"
          :to="'/portfolio' + value[0]"
          v-scroll-to="'body'"
        )
          img.portfolio__grid--img(
            :src="'src/assets/' + value[1]"
          )
    router-view
</template>

<script>
import {globalVar} from '@/globalVar'

export default {
  name: 'portfolio',

  data () {
    return {
      portfolioList: {
        Insharior: [
          globalVar.portfolioList.Insharior[0],
          globalVar.portfolioList.Insharior[1],
        ],
        IGTracker: [
          globalVar.portfolioList.IGTracker[0],
          globalVar.portfolioList.IGTracker[1],
        ],
        AWeather: [
          globalVar.portfolioList.AWeather[0],
          globalVar.portfolioList.AWeather[1],
        ],
        UnivCam: [
          globalVar.portfolioList.UnivCam[0],
          globalVar.portfolioList.UnivCam[1],
        ],
        Neighbors: [
          globalVar.portfolioList.Neighbors[0],
          globalVar.portfolioList.Neighbors[1],
        ],
        Memoree: [
          globalVar.portfolioList.Memoree[0],
          globalVar.portfolioList.Memoree[1],
        ],
        Sprinter: [
          globalVar.portfolioList.Sprinter[0],
          globalVar.portfolioList.Sprinter[1],
        ],
        Suhyup: [
          globalVar.portfolioList.Suhyup[0],
          globalVar.portfolioList.Suhyup[1],
        ],
        FlatIcons: [
          globalVar.portfolioList.FlatIcons[0],
          globalVar.portfolioList.FlatIcons[1],
        ]
      },
    }
  },

  components: {
  },

  metaInfo: {
    title: globalVar.fullname,
    titleTemplate: '%s',
  },

}
</script>

<style lang="scss">
</style>
