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
              :to="value"
            ) {{ key }}
          li(
            v-for="(value, key) in articlesList"
            :key="key"
            @click="hamburgerToggle"
          )
            router-link(
              :to="'/articles' + value"
            ) {{ key }}
</template>

<script>
import {globalVar} from '@/globalVar'

export default {
  data () {
    return {
      portfolioList: {
        Insharior: globalVar.portfolioList.Insharior[0],
        IGTracker: globalVar.portfolioList.IGTracker[0],
        AWeather: globalVar.portfolioList.AWeather[0],
        UnivCam: globalVar.portfolioList.UnivCam[0],
        Neighbors: globalVar.portfolioList.Neighbors[0],
        Memoree: globalVar.portfolioList.Memoree[0],
        Sprinter: globalVar.portfolioList.Sprinter[0],
        Suhyup: globalVar.portfolioList.Suhyup[0],
        FlatIcons: globalVar.portfolioList.FlatIcons[0],
      },
      articlesList: {
        Sass: globalVar.articlesList.Sass[0],
        Gulp: globalVar.articlesList.Gulp[0],
        Favicon: globalVar.articlesList.Favicon[0],
        Scrollbar: globalVar.articlesList.Scrollbar[0],
        Variables: globalVar.articlesList.Variables[0],
        Bodymovin: globalVar.articlesList.Bodymovin[0],
        Jekyll: globalVar.articlesList.Jekyll[0],
        Material: globalVar.articlesList.Material[0],
        Firebase: globalVar.articlesList.Firebase[0],
      },
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
