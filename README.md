yarn add --dev webpack webpack-dev-server path

4 yarn add babel-loader babel-core babel-preset-es2015 babel-preset-react --dev

5 touch .babelrc

{
    "presets":[
        "es2015", "react"
    ]
}

6 touch index.js index.html file

7 yarn add html-webpack-plugin

8 webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
})
plugins: [HtmlWebpackPluginConfig]

9 package.json
"scripts": {
    "start": "webpack-dev-server"
  },
  
  10App.jsx
  ```
  import React from 'react';

export default class App extends React.Component {
  render() {
    return (
     <div style={{textAlign: 'center'}}>
        <h1>Hello World</h1>
      </div>);
  }
}
```
