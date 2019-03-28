<template lang="pug">
  div#Header
    div.header__logo
      router-link.header__text--title(
        to="/"
        v-scroll-to="'body'"
      ) {{ name }}

    div.header__link
      router-link(
        v-for="(value, key) in linkList"
        :key="key"
        :to="value"
        v-scroll-to="'body'"
      ) {{ key }}
      a(
        target="_blank"
        :href="this.cv"
      ) CV
</template>

<script>
import {globalVar} from '@/globalVar'

export default {
  name: 'Header',

  data () {
    return {
      name: globalVar.name
    }
  },

  computed: {
    cv() {
      return this.$store.state.cv
    },

    linkList() {
      return this.$store.state.linkList
    }
  },

}
</script>

<style lang="scss">
#Header {
  padding: $grid16x 0;
  margin-bottom: $grid16x;
  border-bottom: 2px solid $texteee;

  @media #{$middle} {
    text-align: center;
    padding: $grid16x 0 $grid12x;
  }

  .header__logo,
  .header__link {
    display: inline-block;

    .header__text--title {
      font-family: 'Roboto Slab', sans-serif;
      font-weight: 900;
    }

    a {
      color: $text555;
      font-weight: 900;
      text-decoration: none;
    }
  }

  .header__logo {
    a {
      font-size: $grid8x;
    }

    @media #{$middle} {
      display: block;
      text-align: center;
      margin-bottom: $grid8x;
    }
  }

  .header__link {
    float: right;

    @media #{$middle} {
      float: none;

      &:not(:last-child) {
        margin-left: $grid4x;
      }
    }

    a {
      line-height: $grid8x;

      &:not(:first-child) {
        margin-left: $grid4x;
      }

      &:hover {
        border-bottom: 2px solid $textccc;
      }
    }
  }
}
</style>
