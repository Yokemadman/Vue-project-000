## Vue实现的项目 Vue项目实践
### 一个有灵魂的程序猿
[开源协议之间有何区别](https://www.zhihu.com/question/19568896)
## 传统方式将代码上传
1. git add .
2. git commit -m "提交信息"
3. git push 


## 制作首页App组件
1. 完成Hearder区域，使用Mint-UI中Header组件
2. 制作底部Tabbar区域，使用MUI的Tabbar.html
   + 在制作购物车小图标时，操作相对较多
   + 把扩展图标css样式，拷贝到项目中（icon-extra.css）
   + 拷贝字体图标 ttf文件，到项目中
   + 为购物车小图标，添加如下样式`mui-icon mui-icon-extra mui-icon-extra-cart`
3. 要在中间区域放置一个router-view 来展示路由匹配的组件

## 改造Tabbar为router-link
1. 设置路由高亮
2. 点击Tabbar中的路由链接，展示对应路由
## 首页
1. 制作首页轮播图布局
   + 加载首页数据
     1. 获取数据，使用vue-resource 
     2. 使用vue-resource的this.$http.get获取数据
     3. 数据保存到data上
     4. 使用v-for渲染每个item项 
2. 改造九宫格样式

## 改造新闻咨询，路由链接
## 新闻页面 制作
1. 绘制界面，使用MUI的media-list
2. 使用vue-resource获取数据
3. 渲染真实数据

## 实习新闻咨询列表 点击跳转到新闻详情
1. 把 每一项改造为router-link，同时跳转时提供唯一的id标识
2. 创建新闻详情的组件页面 NewsInfo.vue
3. 路由模块中，将新闻详情的路由地址和组件页面对应

## 实现新闻详情页面布局和渲染


## 单独封装一个comment.vue评论子组件
1. 先创建单独的comment.vue组件模板
2. 在需要使用comment组件的页面中，先手动导入comment组件`import comment from './comment.vue'`
3. 在父组件中，使用`comments`属性，将刚才导入comment组件，注册为自己的组件
4. 将注册子组件时候的，注册名称，以标签的形式，在页面中引用即可


## 获取所有的评论数据显示到页面中

## 实现点击加载更多
1. 为加载更多绑定监听事件，请求下一页数据
2. 点击加载更多。让pageIndex++ ,然后重新调用this.getComments()方法重新获取最新数据
3. 为防止新数据覆盖老数据，点击加载更多是，获取到的新数据，让老数据调用数组的concat方法，拼接上新数组