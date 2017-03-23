var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        index: "./src/index.js",
        page: "./src/page.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        'css-loader?importLoaders=1',
                        'postcss-loader'
                    ]
                })
            },
            {
                test: /\.js/,
                loader: 'babel-loader',
                include: __dirname + '/src',
           }
       ]
    },
    plugins: [
        new ExtractTextPlugin({ 
            filename: '[name].css', 
            allChunks: true 
        })
    ],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    watch: true
};