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

</style>
