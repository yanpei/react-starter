yarn add --dev webpack webpack-dev-server path

yarn add babel-loader babel-core babel-preset-es2015 babel-preset-react --dev

touch .babelrc

{
    "presets":[
        "es2015", "react"
    ]
}

touch index.js index.html file

yarn add html-webpack-plugin

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
})
plugins: [HtmlWebpackPluginConfig]
