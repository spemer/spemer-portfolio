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
        :id="value.iconID"
        aria-hidden="true"
        v-tooltip.top="{content: key + '(new tab)', delay: {show: 500, hide: 100}}"
      )
</template>

<script>
import {globalVar} from '@/globalVar'

const codeBy = {
  template: '\
    <p>\
      <i class="fa fa-code"></i> with <i class="fa fa-heart"></i> by Hyouk Seo\
    </p>\
  '
}

export default {
  name: 'Footer',

  computed: {
    snsIconList () {
      return this.$store.state.snsIconList
    }
  },

  components: {
    'codeBy': codeBy
  },

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
      @include transition(all 0.25s ease);

      &:not(:first-child) {
        margin-left: $grid4x;
      }

      &:hover {
        @include transform(translateY(-2.5px));
      }
    }
  }
}

#twIcon:hover {
  color: #1da1f2 !important;
}

#ghIcon:hover {
  color: #333 !important;
}

#liIcon:hover {
  color: #0077b5 !important;
}

#fbIcon:hover {
  color: #3b5998 !important;
}

#inIcon:hover {
  color: #e1306c !important;
}

#beIcon:hover {
  color: #1769ff !important;
}

#drIcon:hover {
  color: #ea4c89 !important;
}

#scIcon:hover {
  color: #f30 !important;
}

#medIcon:hover {
  color: #00ab6c !important;
}
</style>
