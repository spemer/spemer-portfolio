<template lang="pug">
  div#hamburger
    div.container
      p.siteMapBtn(
        title="Sitemap"
      )
        button.c-hamburger.c-hamburger--htx(
          @click="hamburgerToggle"
        )
          span
      nav
        ul.siteMapNav(
        )
          li(
            v-for="(value, key) in portfolioList"
            :key="key"
            @click="hamburgerToggle"
          )
            router-link(
              :to="value[0]"
            ) {{ key }}
          li(
            v-for="(value, key) in articlesList"
            :key="key"
            @click="hamburgerToggle"
          )
            router-link(
              :to="'/articles' + value[0]"
            ) {{ key }}
</template>

<script>
import {globalVar} from '@/globalVar'

export default {

  computed: {
    portfolioList () {
      return this.$store.state.portfolioList
    },

    articlesList () {
      return this.$store.state.articlesList
    },
  },

  data () {
    return {
      show: false,
    }
  },

  methods: {
    hamburgerToggle() {
      var h = document.getElementsByClassName("c-hamburger")[0]
      var n = document.getElementsByClassName("siteMapNav")[0]

      h.classList.contains("is-active") ===
      !0
      ? h.classList.remove("is-active")
      : h.classList.add("is-active")

      if (this.show) {
        this.show = !this.show
        n.style = 'display:none'
      }
      else if (!this.show) {
        this.show = !this.show
        n.style = 'display:block'
      }
    },
  }
}
</script>

<style lang="scss">
#hamburger {
  @include setSize(100%, auto);
  text-align: center;
  padding: $grid12x 0 0;
  margin-top: $grid16x;
  border-top: 2px solid $texteee;

  p {
    display: inline-block;
  }

  li {
    width: 33.3%;
    display: inline-block;
    @include transition(all 0.25s ease);
    &:hover {
      @include transition(all 0.25s ease);
    }
  }
}

.siteMapBtn:hover {
  cursor: pointer;
}

.siteMapNav {
  padding: 0;
  display: none;

  li {
    margin: 0 auto;
    margin-top: $grid8x;

    a {
      &:hover {
        -webkit-text-decoration: underline;
        text-decoration: underline;
      }
    }
  }
}

.c-hamburger {
  margin: 0;
  padding: 0;
  @include setSize(40px);
  @include font-size(0px);
  border: none;
  display: block;
  cursor: pointer;
  box-shadow: none;
  overflow: hidden;
  position: relative;
  @include border-radius(none);
  text-indent: -9999px;
  -webkit-appearance: none;
  -moz-appearance: none;
  -webkit-box-shadow: none;
  @include transition(background 0.3s);
  @include opacity(0.5);
  @include transition(opacity ease 0.5s);
  &:hover {
    @include opacity(1);
    @include transition(opacity ease 0.5s);
  }
  &:focus {
    outline: none;
  }

  span {
    top: 25px;
    @include setCenter(5px);
    height: 2px;
    position: absolute;
    background-color: $textccc;

    &:before,
    &:after {
      left: 0;
      content: '';
      @include setSize(100%, 2px);
      display: block;
      position: absolute;
      background-color: $textccc;
    }
    &:before {
      top: -10px;
    }
    &:after {
      bottom: -10px;
    }
  }
}

.c-hamburger--htx {
  background-color: transparent;

  span {
    @include transition(background 0 0.25s);
    &:before,
    &:after {
      @include transition-duration(0.25s, 0.25s);
      @include transition-delay(0s, 0s);
    }
    &:before {
      @include transition-property(top, transform);
    }
    &:after {
      @include transition-property(bottom, transform);
    }
  }

  &.is-active {
    background-color: transparent;

    span {
      background: none;
      &:before {
        top: 0;
        @include transform(rotate(45deg));
      }
      &:after {
        bottom: 0;
        @include transform(rotate(-45deg));
      }
      &:before,
      &:after {
        @include transition-delay(0s, 0.25s);
      }
    }
  }
}
</style>
