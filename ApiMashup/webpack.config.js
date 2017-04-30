let path = require('path');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        index: './js/mashupMain.js',
        global: './sass/global.scss'
    },
     module: {
        rules: [
           {
              test: /\.(js|jsx)$/, 
              use: {
                  loader: 'babel-loader',
                  options: {
                      presets: ['env', 'react']
                  }
              }
            },
           { // sass / scss loader for webpack
               test: /\.(sass|scss)$/,
               loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
           }
        ]
    },
    plugins: [
        new ExtractTextPlugin({ // define where to save the file
            filename: 'css/[name].css',
            allChunks: true
        }),
    ],
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'wwwroot/dist')
    }
}