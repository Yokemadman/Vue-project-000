<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newslist">
        <router-link :to="'/home/newsinfo/'+item.id">
          <img class="mui-media-object mui-pull-left" :src="item.img_url">
          <div class="mui-media-body">
            <h1>{{ item.title }}</h1>
            <p class='mui-ellipsis'>
              <span>发表时间:{{ item.add_time | dateFormat }}</span>
              <span>点击:{{ item.click }}次</span>
            </p>
          </div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media">
        <router-link to="/home/newsinfo/5">
          <img class="mui-media-object mui-pull-left" src="https://avatars1.githubusercontent.com/u/46280206?s=40&v=4">
          <div class="mui-media-body">
            <h1>幸福</h1>
            <p class='mui-ellipsis'>
              <span>发表时间:2019-09-01 12:00:10</span>
              <span>点击:0次</span>
            </p>
          </div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="https://avatars1.githubusercontent.com/u/46280206?s=40&v=4">
          <div class="mui-media-body">
            <h1>木屋</h1>
            <p class='mui-ellipsis'>
              <span>发表时间:2019-09-01 12:00:10</span>
              <span>点击:0次</span>
            </p>
          </div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="https://avatars1.githubusercontent.com/u/46280206?s=40&v=4">
          <div class="mui-media-body">
            <h1>CBD</h1>
            <p class='mui-ellipsis'>
              <span>发表时间:2019-09-01 12:00:10</span>
              <span>点击:0次</span>
            </p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  import  { Toast } from 'mint-ui'
  export default {
    data(){
      return{
        newslist:[] //新闻列表
      }
    },
    created(){
      /*this.getNewsList()*/
    },
    methods:{
      getNewsList(){
        //获取新闻列表
        this.$http.get('api/getnewslist').then(result =>{
          console.log(result)
           if(result.body.status === 0){
              this.newslist = result.body.message
             }else{
             Toast('获取新闻列表失败！')
             }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
.mui-table-view{
  li{
   h1{font-size: 14px}
    .mui-ellipsis {
      font-size: 12px;
      color: #00B7FF;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>