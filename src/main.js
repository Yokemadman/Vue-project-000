//入口文件
import Vue from 'Vue'

// 导入MUI样式
import './lib/mui/css/mui.css'

//按需导入Mint-UI组件
import  {Header} from 'mint-ui'
Vue.component(Header.name,Header)


//导入App组件
import app from './App.vue'



new Vue({
    el : '#app',
    data : {
    
    },
    methods : {
    
    },
    
    components : {

    },

    render:c => c(app)

    
});