const path = require("path")

const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports= {
  entry:path.join(__dirname,'./src/main.js'),
  output:{
    path:path.join(__dirname,'./dist'),
    filename:'bundle.js'
},

  plugins:[
    new htmlWebpackPlugin({
      template:path.join(__dirname,'./src/index.html'),
      filename:'index.html'
    })
  ],
  module:{
    rules:[
      {test:/\.css$/,use:['style-loader','css-loader']},
      {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
      {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
      {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader?limit=16050&name=[hash:8]-[name].[ext]'},
      //limit 给定的值，是图片的大小，单位是byte，如果引用的图片大于或等于给定的limit值，则不会被转换为base64格式的字符串，如果图片小于给定的limit值，则会被转换为base64的字符串
      //name 设置图片被编译好后的名称，原名输出name=[name].[ext], 加哈希值name=[hash:8]-[name].[ext]
      {test:/\.(ttf|eot|svg|woff|woff2|otf)$/, use: 'url-loader'}, //处理字体文件的
      {test:/\.js$/,use:'babel-loader',exclude:/node_modules/}, //配置Babel 来转换高级的ES语法
      {test:/\.vue$/,use:'vue-loader'} //处理.vue文件的loader
    ]
  },
  resolve:{
    alias:{ //修改vue被导入时候的包的路径
      /*"vue$":"vue/dist/vue.js"*/
    }
  }

}