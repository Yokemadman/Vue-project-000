<template>
  <div  class="app-container">
    <!--header区域-->
    <mt-header fixed title="Vue项目"></mt-header>
    <!--router-view区域-->

    <!--Tabbar-->
    <nav class="mui-bar mui-bar-tab">
      <a class="mui-tab-item mui-active" href="#tabbar">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </a>
      <a class="mui-tab-item" href="#tabbar-with-chat">
        <span class="mui-icon mui-icon-contact"><span class="mui-badge">9</span></span>
        <span class="mui-tab-label">会员</span>
      </a>
      <a class="mui-tab-item" href="#tabbar-with-contact">
        <span class="mui-icon mui-icon-camera"></span>
        <span class="mui-tab-label">购物车</span>
      </a>
      <a class="mui-tab-item" href="#tabbar-with-map">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </a>
    </nav>
    <h1>123</h1>
  </div>

</template>

<script>

 export default {

 }
</script>

<style lang="scss" scoped>
  .app-container{
    padding-top: 40px;
  }
</style>