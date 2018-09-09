<template lang="pug">
  div#page--aweather
    | AWeather
</template>

<script>
import {globalVar} from '@/globalVar'

export default {
  name: 'aweather',

  metaInfo: {
    title: globalVar.fullname,
    titleTemplate: '%s - AWeather',
  },

}
</script>

<style lang="scss">

</style>
