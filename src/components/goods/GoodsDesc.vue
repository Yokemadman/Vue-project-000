<template>
  <div class="goosdesc-container">
      <h3>{{ info.title  }}</h3>
      <hr>
      <div class="content" v-html="info.content"></div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        id:this.$route.params.id,
        info:{} //图文数据
      }
    },
    created(){
      this.getDesc()
    },
    methods:{
      getDesc(){
        this.$http.get('api/goods/getdesc/'+this.id).then( result => {
          if(result.body.status === 0){
              this.info = result.body.message[0]
          }
        })
      }
    }
  }
</script>

<style lang="scss">
  .goosdesc-container{
    padding: 10px;
    h3{
      font-size: 16px;
      color: #226aff;
      text-align: center;
      margin: 15px 0;
    }
    .content{
      img{
        max-width: 98%;
      }

    }
  }

</style>