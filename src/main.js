//入口文件
import Vue from 'Vue'
//1.1导入路由的包
import VueRouter from 'vue-router'
//1.2安装路由
Vue.use(VueRouter)

//注册 Vuex
import Vuex from 'vuex'
Vue.use(Vuex)

var car =JSON.parse(localStorage.getItem('car') || '[]')
var store = new Vuex.Store({
  state:{ //this.$store.state.***
    car:car //将购物车数据，存储在car数组中，存储一些商品对象，
    // {id:商品id,count:购买数量,price:商品单价,selected:true}
  },
  mutations:{ //this.$store.commit('方法名称','按需传递唯一参数')
     addToCar(state,goodsinfo){
        //点击加入购物车，把商品信息保存到state中的car上
        //假设没有找到对应的商品
        var flag = false
        state.car.some( item =>{
         if(item.id === goodsinfo.id){
             item.count += parseInt(goodsinfo.count)
           flag = true
           return true
         }
       })
        //如果循环完毕，flag还是false，把商品push到购物中去
        if(!flag){
            state.car.push(goodsinfo)
        }
        //当更新car之后，把car数组存储到本地localStore中
        localStorage.setItem('car',JSON.stringify(state.car))
    },
     updateGoodsInfo(state,goodsinfo){
        //修改商品数量
       state.car.some(item =>{
         if(item.id === goodsinfo.id){
             item.count = parseInt(goodsinfo.count);
           return true;
         }
       })
       //修改数量把最新数量保存到本地存储
       localStorage.setItem('car',JSON.stringify(state.car))
     },
     removeFromCar(state,id){
       //根据id从store中的购物车中删除对应的那条商品数据
       state.car.some((item,i) =>{
         if(item.id==id){
           state.car.splice(i,1);
           console.log('ok');
           return true;
         }
       })
       //将删除完毕后的最新购物车数据同步到本地存储
       localStorage.setItem('car',JSON.stringify(state.car))
     },
     updateGoodsSeleted(state,info){
       state.car.some(item =>{
         if(item.id === info.id){
             item.selected = info.selected
         }
       })
       //保存最新的所有购物车商品状态保存到本地
       localStorage.setItem('car',JSON.stringify(state.car))
     }
  },
  getters:{ // this.$store.getters.***
    //计算属性
    getAllCount(state){
      var c = 0
      state.car.forEach(item =>{
        c += item.count
      })
      return c
    },
    getGoodsCount(state){
      var o = {}
      state.car.forEach(item => {
        o[item.id] = item.count
      })
      return o
    },
    getGoodsSelected(state){
      var o = {}
      state.car.forEach(item =>{
        o[item.id] = item.selected
      })
      return o
    },
    getGoodsAndmount(state){
      var o = {
        count:0, //勾选的数量
        amount:0 //勾选的总价
      }
      state.car.forEach(item =>{
        if(item.selected){
          o.count += item.count
          o.amount += item.price * item.count
        }
      })
      return o
    }
  }

})


//导入时间的插件
import moment from 'moment'

//定义全局的过滤器
Vue.filter('dateFormat',function (dataStr,pattern ="YYYY-MM-DD HH:mm:ss") {
  return  moment(dataStr).format(pattern)
})

//2.1导入Vue-resource
import VueResource from 'vue-resource'
//2.2安装vue-resource
Vue.use(VueResource)

//设置请求根路 径
//http://www.liulongbin.top:3005/api/getlunbo
Vue.http.options.root='http://www.liulongbin.top:3005'
//设置post 表单数据格式的组织形式 application/x-www-form-urlencoded
Vue.http.options.emulateJSON =true

// 导入MUI样式
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

//按需导入Mint-UI组件
/*import  {Header,Swipe,SwipeItem,Button,Lazyload} from 'mint-ui'
Vue.component(Header.name,Header)
Vue.component(Swipe.name,Swipe)
Vue.component(SwipeItem.name,SwipeItem)
Vue.component(Button.name,Button)
Vue.use(Lazyload);*/
import MintUI from 'mint-ui'
Vue.use(MintUI);
import 'mint-ui/lib/style.css'

//安装图片预览插件

import  VuePreview from 'vue-preview'
Vue.use(VuePreview)


//1.3导入自己的Router.js文件
import router from './router.js'

//导入App组件
import app from './App.vue'




var vm =  new Vue({
    el : '#app',

    render:c => c(app),
    router,  //1.4挂载路由对象
    store    // 挂载store
});