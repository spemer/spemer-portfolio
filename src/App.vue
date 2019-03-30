<template lang="pug">
  div#app
    router-view
</template>

<script>
export default {
  name: 'app',

  updated() {
    // console.info(this.$route.path)
  },
}
</script>

<style lang="scss">
</style>
