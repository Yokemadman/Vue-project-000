<template>
  <div class="goodsinfo-container" >
 <!--轮播图区域-->
    <transition
     @before-enter="beforeEnter"
     @enter="enter"
     @after-enter="afterEnter"
    >
      <div class="ball" v-show="ballFlag" ref="ball"></div>
    </transition>

    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <swiper :lunbotuList="lunbotu" :isfull="false"></swiper>
        </div>
      </div>
    </div>
 <!--商品购买区域-->
    <div class="mui-card">
      <div class="mui-card-header"> {{ goodsinfo.title }} </div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
         <p class="price">
                 市场价：<del>￥ {{ goodsinfo.market_price }}</del>&nbsp;&nbsp;销售价：<span class="now_price">￥ {{ goodsinfo.sell_price }}</span>
               </p>

                 <p>购买数量:<numbox @getCount="getSelectedCount" :max="goodsinfo.stock_quantity"></numbox></p><!--3-->

                <p>
                  <mt-button type="primary" size="small">立即购买</mt-button>
                  <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
                </p>
              </div>
            </div>
          </div>
 <!--商品参数区域-->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
         <p>商品货号: {{ goodsinfo.goods_no }} </p>
         <p>库存情况: {{ goodsinfo.stock_quantity }} 件 </p>
         <p>上架时间: {{ goodsinfo.add_time | dateFormat }} </p>
        </div>
      </div>
    </div>
    <div class="mui-card-footer">
              <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>

              <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
            </div>
  </div>
</template>

<script>
  import swiper from '../subcomponents/swiper.vue'
  import numbox from '../subcomponents/goodsinfo_numberebox.vue'
  export default {
    data(){
      return{
        id:this.$route.params.id,
        lunbotu:[], //轮播图数据
        goodsinfo:{}, //商品信息
        ballFlag:false, //控制小球隐藏显示的表示
        selectedCount:1, //保存选中的数量，默认为1  // 1
      }
    },
    created(){
      this.getLunbotu();
      this.getGoodsInfo();
    },
    methods:{
      getLunbotu () {
        this.$http.get('api/getthumimages/'+this.id).then(result =>{
          if(result.body.status === 0){
            result.body.message.forEach(item =>{
              item.img = item.src
            })
            this.lunbotu = result.body.message
          }
        })
      },
      getGoodsInfo(){
        this.$http.get('api/goods/getinfo/'+this.id).then(result => {
          if(result.body.status === 0){
              this.goodsinfo = result.body.message[0]
          }
        })
      },
      goDesc(id){
        //点击使用编程式导航 到 图文介绍
        this.$router.push({name:'goodsdesc',params:{ id }});
      },
      goComment(id){
        //点击跳转评论页面
        this.$router.push({name:'goodscomment',params:{ id }});
      },
      addToShopCar(){
        this.ballFlag = !this.ballFlag
        // {id:商品id,count:购买数量,price:商品单价,selected:true}
        //拼接要保存到car里的对象
        var goodsinfo = {
          id:this.id,
          count:this.selectedCount,
          price:this.goodsinfo.sell_price,
          selected:true
        }
        this.$store.commit('addToCar',goodsinfo)
      },
      beforeEnter(el){
        el.style.transform = 'translate(0,0)';
      },
      enter(el,done){
        el.offsetWidth;
        //小球动画优化，动态计算坐标值
        //先得到 徽标的横纵坐标，和小球的横纵坐标，再求差值 domeObject.getBoundingClientRect()
       //小球位置
       const ballPosition = this.$refs.ball.getBoundingClientRect();
       //徽标位置
       const badgePosition = document.getElementById('badge').getBoundingClientRect();
       const  xDist = badgePosition.left - ballPosition.left;
       const yDist = badgePosition.top - ballPosition.top;

       el.style.transform = `translate(${xDist}px,${yDist}px)`;
       el.style.transition = 'all 0.5s cubic-bezier(.4,-0.3,1,.68)';
       done()
        },
      afterEnter(el){
        this.ballFlag = !this.ballFlag
      },
      getSelectedCount(count){ // 2
        //子组件像父组件传值
        this.selectedCount = count;
      }
    },
    components:{
      swiper,
      numbox
    }
  }
</script>

<style lang="scss" scoped>
  .goodsinfo-container{
    background: #eee;
    overflow: hidden;
    .now_price{
      color: red;
      font-size: 16px;
      font-weight: bold;
    }
    .mui-card-footer{
      display: block;
      button{
        margin: 10px 0;
      }
    }
    .ball{
      width: 15px;
      height: 15px;
      background: red;
      border-radius: 50%;
      position: absolute;
      z-index: 99;
      top: 390px;
      left: 146px;
    }
  }

</style>