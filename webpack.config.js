const path = require('path');
module.exports = {
  entry: './client/index.js', //打包的入口文件
  output: {
    path: path.resolve('dist'), // path.resolve():把相对路径转为绝对路径
    filename: 'index_bundle.js' //打包完存储的文件地址与名称
  },
 module: {
    rules: [
      { test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }, {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  }
}
