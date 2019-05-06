const merge = require('webpack-merge');
const base = require('./webpack.base.conf.js');
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')

// 生成vue-ssr-server-bundle.json文件

module.exports = merge(base, {
    target: 'node',         // webpack 会编译为用于类 Node.js 环境，使用 Node.js 的 require去加载
    entry: {
        serverBundle: './entry-server.js'
    },
    output: {
        // “commonjs2” 以module.exports形式输出; 
        //  module.exports = _entry_return_ ;
        libraryTarget: 'commonjs2'
    },
    plugins: [
        // 生成vue-ssr-server-bundle.json文件
        new VueSSRServerPlugin()
    ]
});