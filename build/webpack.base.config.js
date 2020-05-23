const HtmlWebpackPlugin = require('html-webpack-plugin')
//const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const {check}

module.exports = {
    entry :'./src/index.ts',
    output:{
        filename:'app.js'
    },
    resolve:{
        extensions:['.js','.ts','.tsx']
    },
    module:{
        rules:[
            {
                test:/\.tsx?$/i,
                use:[{
                    //loader:'ts-loader',
                    loader:'awesome-typescript-loader',
                    options: {
                        transpileOnly: true
                    }   
                }],
                exclude:/node_modules/
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/tpl/index.html',
            
        }),
        //new ForkTsCheckerWebpackPlugin() 
    ]
}