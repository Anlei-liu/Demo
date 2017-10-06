const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        app: ['webpack-hot-middleware/client','./src/app.js'],
        vendor: [
            'react',
            'react-dom'
        ]
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'public')
    },
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
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.HashedModuleIdsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        // new webpack.ClearWebpackPlugin(['public']),
        new HtmlWebpackPlugin({
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
