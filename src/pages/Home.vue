<template lang="pug">
  div#Home
    Portfolio
</template>

<script>
import Portfolio from '../components/Portfolio'

export default {
  name: 'Home',
  components: {
    'Portfolio': Portfolio
  }
}
</script>

<style lang="scss">
@import '../style/style.scss';
</style>
