<template>
  <div id="classify-list">

    <!-- 分类列表里面 调用导航栏 -->
    <hjx-navbar title="商品列表" left-text="返回" :show-icon-cart="showIconCart" :cart-number="cartNumber"></hjx-navbar>
    <!-- <hjx-navbar title="商品列表" :show-icon-cart="false" cart-number="6"></hjx-navbar> -->

    <h1 v-for="item in 30">上{{item}}</h1>

  </div>
</template>

<script>

import hjxNavbar from '../components/hjxNavbar.vue'

export default {

  mounted(){
    this.showIconCart = window.localStorage.getItem('token') ? true : false;
    this.getCartCount();
  },

  data(){
    return {
      showIconCart : false,
      cartNumber : 0
    }
  },


  methods : {
    // 求购物车数量
    getCartCount(){
      let token = window.localStorage.getItem('token');
      if(!token){
        this.cartNumber = '';
        return
      };

      this.api.getCartViewData({
        status : 'viewcart',
        userId : token
      }).then(result => {
        this.cartNumber = result.length;
      })
    }
  },

  components : {
    hjxNavbar,
  }
}

</script>

<style>

</style>