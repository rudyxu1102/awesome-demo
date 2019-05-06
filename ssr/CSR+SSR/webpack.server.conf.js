const merge = require('webpack-merge');
const base = require('./webpack.base.conf.js');

// 生成serverBundle.js

module.exports = merge(base, {
    target: 'node',      // webpack 会编译为用于类 Node.js 环境，使用 Node.js 的 require去加载
    entry: {
        serverBundle: './entry-server.js'
    },
    output: {
        filename: '[name].js',
        // “commonjs2” 以module.exports形式输出; 
        //  module.exports = _entry_return_ ;
        libraryTarget: 'commonjs2'
    }
});