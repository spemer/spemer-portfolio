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
            :src="value[1]"
          )

    router-view
</template>

<script>
export default {
  name: 'portfolio',

  data () {
    return {
      portfolioList: {
        Insharior: ['/insharior', 'src/assets/insharior/thumb.png'],
        IGTracker: ['/igtracker', 'src/assets/igtracker/thumb.png'],
        AWeather: ['/aweather', 'src/assets/weather/thumb.png'],
        UnivCam: ['/univcam', 'src/assets/univcam/thumb.png'],
        Neighbors: ['/neighbors', 'src/assets/dream/cover.png'],
        Memoree: ['/memoree', 'src/assets/memoree/thumb.png'],
        Sprinter: ['/sprinter', 'src/assets/sprinter/thumb.png'],
        Suhyup: ['/suhyup', 'src/assets/suhyup/thumb.png'],
        FlatIcons: ['/flaticons', 'src/assets/flaticon/house.jpg']
      }
    }
  },

  components: {
  }
}
</script>

<style lang="scss">

</style>
