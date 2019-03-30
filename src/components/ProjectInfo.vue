<template lang="pug">
  div#projectInfo
    span.projectInfo--text.title Title: {{ setList[2] }}
    span.projectInfo--text.date Date: {{ setList[3] }}
    span.projectInfo--text.tools Tools: {{ setList[4] }}
</template>

<script>
export default {
  name: 'projectInfo',

  data () {
    return {
      // url: this.$route.path,
    }
  },
/*
받은 리스트 길이만큼 반복
반복하면서 현재 url과 vaule[0]이 일치하는지 확인
일치하는경우에만 값을 가져오기
*/
  computed: {
    setList () {
      let i, j = 0
      let url = this.$route.path
      let pList = Object.keys(this.$store.state.portfolioList)
      let aList = Object.keys(this.$store.state.articlesList)

      for(i = 0; i < aList.length + pList.length; i++) {
        if(url.indexOf('articles') == 1) {
          console.warn('articles')
          return aList.value
        }
        else {
          if(url.indexOf(pList[j]) != 1) {
            for(j = 0; j < pList.length; j++) {
              console.warn('portfolio')
              return pList[j].i
            }
          }
        }
      }

      // for(var i = 0; i < list.length; i++) {
      //   if(url.indexOf(Object.keys[i]) != 1) {
      //     console.warn(url)
      //     return Object.keys[list]
      //   }
      // }

      // for(var key in list) {
      //   if(url.indexOf(list.key) != -1) {
      //     return this.$store.state.portfolioList.keys(list)
      //   }
      // }
    },
  },

  watch: {
    $route (to, from) {
      console.info('route changed')
    }
  }

}
</script>

<style lang="scss">
#projectInfo {
  .projectInfo--text {
    display: block;
  }
}
</style>
