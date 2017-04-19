const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './index.html',
  filename: 'index.html',
  inject: 'body'
})


module.exports = {
    entry: {
        index: './app/index.js',
        form: './app/atwt-react-form.jsx'
    },
     module: {
        rules: [
           {
              test: /\.(js|jsx)$/, 
              use: 'babel-loader'
              
           }
        ]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [HtmlWebpackPluginConfig]
} 

