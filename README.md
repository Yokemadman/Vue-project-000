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


