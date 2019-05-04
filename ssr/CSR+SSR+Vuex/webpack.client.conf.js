const merge = require('webpack-merge');
const base = require('./webpack.base.conf.js');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')


module.exports = merge(base, {
   entry: {
       client: './entry-client.js'
   },
    plugins: [
        new VueSSRClientPlugin()
    ],
});