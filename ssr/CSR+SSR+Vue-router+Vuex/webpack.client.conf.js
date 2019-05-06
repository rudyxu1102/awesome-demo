const merge = require('webpack-merge');
const base = require('./webpack.base.conf.js');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')

// 以entry-client.js为入口，生成clientBundle.js文件
// 因为其引入了两个异步组件，所以分别打包为0.js，1.js

module.exports = merge(base, {
    entry: {
        clientBundle: './entry-client.js'
    },
    output: {
        filename: '[name].js'
    },
    plugins: [
        // 生成vue-ssr-client-manifest.json文件，用于服务端渲染html的时候混合进去
        new VueSSRClientPlugin()
    ],
});