<template lang="pug">
  div#scroll-top
    transition(name="fade")
      button.btn--top(
        v-if="scrolled"
        v-scroll-to="'body'"
        v-tooltip.left="{content: 'Back to Top', delay: {show: 500, hide: 100}}"
      )
        i.fa.fa-chevron-up
</template>

<script>
import {globalVar} from '@/globalVar'

export default {
  name: 'scrollTop',

  data () {
    return {
      scrolled: false
    }
  },

  methods: {
    handleScroll () {
      this.scrolled = window.scrollY > 500;
    }
  },

  created () {
    window.addEventListener('scroll', this.handleScroll);
  },

  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },

}
</script>

<style lang="scss">

#scroll-top {

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .25s ease !important;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  .btn--top {
    border: none;
    outline: none;
    color: white;
    right: $grid4x;
    bottom: $grid4x;
    cursor: pointer;
    position: fixed;
    width: $grid10x;
    height: $grid10x;
    border-radius: $grid10x;
    background-color: $textccc;
    transition: display .5s ease;

    .fa {
      margin-bottom: $grid;
    }

    &:hover {
      opacity: .5;
      transition: opacity .25s ease !important;
    }
  }
}
</style>
