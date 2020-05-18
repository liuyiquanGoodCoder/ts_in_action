const merge = require('webpack-merge')
const baseconfig = require('./webpack.base.config')
const devconfig = require('./webpack.dev.config')
const proconfig = require('./webpack.pro.config')

module.exports = (env,argv) =>{
    let config = argv.mode === 'development' ? devconfig:proconfig;
    return merge(baseconfig,config);
}