const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: ['webpack-hot-middleware/client','./src/app.js'],
        vendor: ['react']
    },
    output: {
        filename: 'entry.js',
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
        new webpack.optimize.CommonsChunkPlugin(),
        new webpack.ProvidePlugin({
            React: 'react'
        })
    ]
};
