import VueRouter from 'vue-router'

//导入对应路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import NewsList from './components/news/NewList.vue'
import NewsInfo from './components/news/NewsInfo.vue'
//3.创建路由对象
var router = new VueRouter({
  routes:[//配置路由规则
    {path:'/',redirect:'/home'},
    {path:'/home',component:HomeContainer},
    {path:'/member',component:MemberContainer},
    {path:'/shopcar',component:ShopcarContainer},
    {path:'/search',component:SearchContainer},
    {path:'/home/newList',component:NewsList},
    {path:'/home/newsinfo/:id',component:NewsInfo}
  ],
  linkActiveClass:'mui-active' //覆盖默认路由高亮的类，router-link-active
})
//把路由实例暴露出去
export default  router