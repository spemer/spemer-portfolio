<template lang="pug">
  div#portfolio__div
    router-link.portfolio__grid(
      v-for="(value, key) in portfolioList"
      :key="key"
      :title="key"
      :to="'/portfolio' + value[0]")
      img.portfolio__img(:src="value[1]")
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
        FlatIcons: ['/flat-icons', 'src/assets/flaticon/house.jpg']
      }
    }
  }
}
</script>

<style lang="scss">

</style>
