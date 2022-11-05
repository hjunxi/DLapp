<template>
  
  <div id="search-view">

    <hjx-search 
     show-innerleft 
     show-left 
     show-right 
     @clickright="clickRightHandler"
     @clickleft="clickLeftHandler"
    ></hjx-search>




  </div>

</template>

<script>
  import hjxSearch from '../components/hjxSearch.vue'

  export default {
    components : {
      hjxSearch
    },

    data(){
      return {
       
      }
    },

    methods : {
      clickRightHandler(val){
        console.log(1111);
        console.log(val);
      },

      clickLeftHandler(){
        // 返回上一级路由
        // console.log(this.$router)
        this.$router.back();
      }
    }
  }

</script>

<style lang="less" scoped>


</style>