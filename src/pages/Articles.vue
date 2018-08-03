<template lang="pug">
  div#articles__div
    router-link.articles__grid(
      v-for="(value, key) in articlesList"
      :key="key"
      :to="'/articles' + value[0]")
      img.articles__img(:src="value[1]")
</template>

<script>
export default {
  name: 'articles',
  data () {
    return {
      articlesList: {
        Sass: ['/sass', 'src/assets/sass/thumb.png'],
        Gulp: ['/gulp', 'src/assets/gulp/thumb.png'],
        Favicon: ['/favicon', 'src/assets/favicon/favicon.png'],
        Scrollbar: ['/scrollbar', 'src/assets/scroll/cover.png'],
        Variables: ['/css-variables', 'src/assets/css/thumb.png'],
        Bodymovin: ['/bodymovin', 'src/assets/bodymovin/cover.png'],
        Jekyll: ['/jekyll', 'src/assets/jekyll/thumb.png'],
        Material: ['/material', 'src/assets/material/material.png'],
        Firebase: ['/firebase', 'src/assets/firebase/firebase_logo.jpg']
      }
    }
  }
}
</script>

<style lang="scss">
@import '../style/style.scss';

#articles__div {
  display: grid;
  grid-gap: $grid8x;
  grid-template-columns: 1fr 1fr 1fr;
  // grid-auto-rows: minmax(250px, auto);

  @media #{$landsc} {
    grid-template-columns: 1fr 1fr;
  }

  .articles__img {
    width: 100%;
    object-fit: cover;
    border-radius: $grid2x;
  }
}
</style>
