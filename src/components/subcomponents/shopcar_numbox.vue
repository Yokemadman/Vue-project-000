<template>
  <div class="mui-numbox" data-numbox-min='1' style="height: 25px;">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input id="test" class="mui-input-numbox" type="number" :value="initcount" @change="countChanged" ref="numbox" readonly /><!--4-->
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
  <!--传值时间-->
</template>

<script>
  import  mui from '../../lib/mui/js/mui.min.js'
  export default {
    mounted() {
      //初始化数字选择框
      mui('.mui-numbox').numbox();
    },
    methods:{
      countChanged(){ //  5
         //数量改变,立即把最新的数量同步到购物车的store中，覆盖之前数量值
        this.$store.commit('updateGoodsInfo', {
          id:this.goodsid,
          count:this.$refs.numbox.value})
      }
    },
    props:['initcount','goodsid']
  }
</script>

<style lang="scss" scoped>

</style>