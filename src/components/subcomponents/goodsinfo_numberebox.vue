<template>
  <div class="mui-numbox" data-numbox-min='1' >
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input id="test" class="mui-input-numbox" type="number" value="1" @change="countChanged" ref="numbox"/><!--4-->
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
    props:['max'],
    watch:{
      //属性监听
      'max':function (newVal,oldVal) {
        //使用JS API 设置numbox最大值
        mui('.mui-numbox').numbox().setOption('max',newVal);
      }
    },
    methods:{
      countChanged(){ //  5
        //值一改变就传递给父组件
        //console.log(this.$refs.numbox.value)
        this.$emit('getCount',parseInt(this.$refs.numbox.value))
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>