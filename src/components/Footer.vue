<template lang="pug">
  div#Footer
    div.footer--text
      codeBy
    div.footer--icon
      a(
        v-for="(value, key) in snsIconList"
        :key="key"
        :href="'https://' + value.href"
        target="_blank"
        :class="'fa fa-' + value.iconClass"
        aria-hidden="true"
        v-tooltip.top="{content: key + '(new tab)', delay: {show: 500, hide: 100}}"
      )
</template>

<script>
let codeBy = {
  template: '\
    <p>\
      <i class="fa fa-code"></i> with <i class="fa fa-heart"></i> by Hyouk Seo\
    </p>\
  '
}

export default {
  name: 'Footer',
  data () {
    return {
      snsIconList: {
        Twitter: {
          href : 'twitter.com/OfficialSpemer',
          iconID : 'twIcon',
          iconClass : 'twitter'
        },
        GitHub: {
          href : 'github.com/spemer',
          iconID : 'ghIcon',
          iconClass : 'github'
        },
        FaceBook: {
          href : 'facebook.com/ghsspower',
          iconID : 'fbIcon',
          iconClass : 'facebook'
        },
        Instagram: {
          href : 'instagram.com/spemer/',
          iconID : 'inIcon',
          iconClass : 'instagram'
        },
        LinkedIn: {
          href : 'www.linkedin.com/in/hyouk-seo-0b6801122/',
          iconID : 'liIcon',
          iconClass : 'linkedin'
        },
        Dribbble: {
          href : 'dribbble.com/spemer',
          iconID : 'drIcon',
          iconClass : 'dribbble'
        },
        Medium: {
          href : 'medium.com/@spemer',
          iconID : 'medIcon',
          iconClass : 'medium'
        },
        Behance: {
          href : 'behance.net/spemer',
          iconID : 'beIcon',
          iconClass : 'behance'
        }
      }
    }
  },
  components: {
    'codeBy': codeBy
  }
}
</script>

<style lang="scss">

#Footer {
  padding: $grid8x 0 $grid12x;
  margin-top: $grid16x;
  border-top: 2px solid $texteee;


  .footer--text,
  .footer--icon {
    color: $text555;
    display: inline-block;

    @media #{$middle} {
      display: block;
      text-align: center;
      float: none;
    }
  }


  .footer--icon {
    float: right;
    transform: translateY(100%);

    @media #{$middle} {
      float: none;
      transform: translateY(0%);
    }

    a {
      color: $text555;
      transition: opacity .25s ease;

      &:not(:first-child) {
        margin-left: $grid4x;
      }

      &:hover {
        opacity: .5;
      }
    }
  }
}
</style>
