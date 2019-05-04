const merge = require('webpack-merge');
const base = require('./webpack.base.conf.js');

module.exports = merge(base, {
    target: 'node',
    entry: {
        serverBundle: './entry-server.js'
    },
    output: {
        filename: '[name].js',
        libraryTarget: 'commonjs2'
    },
    plugins: [

    ]
});