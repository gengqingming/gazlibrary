const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
let config = {
    mode: 'development',
    entry: './src/main.js',
    output:{
        path:path.resolve(__dirname, "dist"), 
        filename: "gazlibrary.js",
        library: 'gazlibrary'
    },
    devtool: 'inline-source-map',
    module: {
        rules: []
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: '功能参数测试',
            template: './asset/index.html',
            filename: './index.html'
        })
    ],
    devServer: {
        contentBase: './dist',
        
    },
};


module.exports = config;

