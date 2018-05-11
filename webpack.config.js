const path = require('path');
const Webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        inline: true,
        hot: true,
        port: 9000,
    },
    module: {
        rules: [{
            test: /\.vue$/,
            use: 'vue-loader'//解析.vue类型文件
        },{
            test:/\.css$/,
            use:['style-loader','css-loader']//解析.vue中style样式
        }]
    },
    plugins: [
        new VueLoaderPlugin(),
        new Webpack.HotModuleReplacementPlugin()//热重载
    ]
    
};