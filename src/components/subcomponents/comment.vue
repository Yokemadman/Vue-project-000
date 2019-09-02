<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入要输入要BB的内容(最多吐槽120字)" maxlength="120"></textarea>
    <mt-button type="primary" size="large">发表评论</mt-button>
   <!-- <div class="cmt-list">
      <div class="cmt-item" v-for="(item,i) in comments" :key="item.add_time">
        <div class="cmt-title">
          第{{ i+1 }}楼&nbsp;&nbsp;用户:{{ item.user}}&nbsp;&nbsp;发表时间:{{ item.add_time|dateFormat }}
        </div>
        <div class="cmt-body">
          {{ item.content=== 'undefined'? '此用户很懒，嘛都没说':item.content }}
        </div>
      </div>
    </div>-->
    <div class="cmt-list">
      <div class="cmt-item">
        <div class="cmt-title">
          第1楼&nbsp;&nbsp;用户:匿名用户&nbsp;&nbsp;发表时间:2019-09-02 12:36:18
        </div>
        <div class="cmt-body">
          锄禾日当午 复方
        </div>
      </div>
    </div>
    <div class="cmt-list">
      <div class="cmt-item">
        <div class="cmt-title">
          第1楼&nbsp;&nbsp;用户:匿名用户&nbsp;&nbsp;发表时间:2019-09-02 12:36:18
        </div>
        <div class="cmt-body">
          锄禾日当午 复方
        </div>
      </div>
    </div>
    <div class="cmt-list">
      <div class="cmt-item">
        <div class="cmt-title">
          第1楼&nbsp;&nbsp;用户:匿名用户&nbsp;&nbsp;发表时间:2019-09-02 12:36:18
        </div>
        <div class="cmt-body">
          锄禾日当午 复方
        </div>
      </div>
    </div>
    <div class="cmt-list">
      <div class="cmt-item">
        <div class="cmt-title">
          第1楼&nbsp;&nbsp;用户:匿名用户&nbsp;&nbsp;发表时间:2019-09-02 12:36:18
        </div>
        <div class="cmt-body">
          锄禾日当午 复方
        </div>
      </div>
    </div>
    <div class="cmt-list">
      <div class="cmt-item">
        <div class="cmt-title">
          第1楼&nbsp;&nbsp;用户:匿名用户&nbsp;&nbsp;发表时间:2019-09-02 12:36:18
        </div>
        <div class="cmt-body">
          锄禾日当午 复方
        </div>
      </div>
    </div>
    <div class="cmt-list">
      <div class="cmt-item">
        <div class="cmt-title">
          第1楼&nbsp;&nbsp;用户:匿名用户&nbsp;&nbsp;发表时间:2019-09-02 12:36:18
        </div>
        <div class="cmt-body">
          锄禾日当午 复方
        </div>
      </div>
    </div>
    <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
  import {Toast} from 'mint-ui'
  export default {
    data(){
      return{
       pageIndex:1, //默认显示第一页数据
        comments:[] //评论数据
      }
    },
    created(){
       /*this.getComment()*/
    },
    methods:{
      getComment() { //获取评论
        this.$http.get("api/getcomments/"+this.id+"?pageindex"+this.pageIndex).then(result =>{
           if(result.body.status === 0){
             // this.comments = result.body.message;
             //获取新数据时，不清空老数据，拼接新数据
             this.comments =this.comments.concat(result.body.message)
             }else{
             Toast('获取评论失败')
             }
        })
      },
      getMore(){//加载更多
        this.pageIndex++
        this.getComment()
      }
    },
    props:["id"]
  }
</script>

<style lang="scss" scoped>
 .cmt-container{
   h3{
     font-size: 18px;
   }
   textarea{
     font-size: 14px;
     height: 85px;
     margin: 0;
   }
   .cmt-list{
     margin: 5px 0;
     .cmt-item{
       font-size: 12px;
       .cmt-title{
         line-height: 30px;
         background: #ccc;
       }
       .cmt-body{
         line-height: 35px;
         text-indent: 2em;
       }
     }
   }
 }
</style>