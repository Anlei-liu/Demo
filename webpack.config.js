const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyjsPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
    entry: {
        app: ['webpack-hot-middleware/client','./src/app.js'],
        vendor: [
            'react',
            'react-dom'
        ],
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'public'),
        publicPath: '/'
    },
    devtool: 'inlne-source-map',
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env', 'stage-0', 'react'],
                    plugins: [['import', {libraryName: 'antd', style: 'css'}]]
                }
            }
        }, {
            test: /-m\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [{
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        localIdentName: '[path][name]-[local]-[hash:base64:5]'
                    }
                }]
            })
        },{
            test: /^((?!(-m)).)*\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: 'css-loader'
            })
        }]
    },
    plugins: [
        new ExtractTextPlugin('styles.css'),
        new webpack.HotModuleReplacementPlugin(), //热更新
        new webpack.NoEmitOnErrorsPlugin(), //编译完成提示错误
        new webpack.HashedModuleIdsPlugin(), //防止公共模块多次打包
        new webpack.optimize.CommonsChunkPlugin({ //公共模块
            name: ['vendor', 'manifest']
        }),
        new webpack.optimize.CommonsChunkPlugin({ //公共模块
            name: 'runtime'
        }),
        // new UglifyjsPlugin(),  //树抖动
        new CleanWebpackPlugin(['public']), //清理打包文件夹
        new HtmlWebpackPlugin({  //模板插件
            title: 'app',
            templateContent: function (templateParams, compilation) {
                return `<!doctype html>
                        <html lang="en">
                        <head>
                            <meta charset="UTF-8">
                            <meta name="viewport"
                                  content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
                            <meta http-equiv="X-UA-Compatible" content="ie=edge">
                            <title>Document</title>
                        </head>
                        <body>
                            <div id="main"></div>
                        </body>
                        </html>`;
            },
        })
    ]
};
