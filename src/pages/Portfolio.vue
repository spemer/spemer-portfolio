<template lang="pug">
  div#portfolio-div
    router-link.portfolio--grid(
      v-for="(value, key) in portfolioList"
      :key="key"
      :to="'/portfolio' + value[0]")
      img.portfolio--img(:src="value[1]")
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
@import '../style/style.scss';

#portfolio-div {
  display: grid;
  grid-gap: $grid8x;
  grid-template-columns: 1fr 1fr 1fr;
  // grid-auto-rows: minmax(250px, auto);

  @media #{$landsc} {
    grid-template-columns: 1fr 1fr;
  }

  .portfolio--img {
    width: 100%;
    object-fit: cover;
    border-radius: $grid2x;
  }
}
</style>
