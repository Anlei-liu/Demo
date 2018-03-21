const merge = require('webpack-merge')
const common = require('./config/webpack.common')
const UglifyjsPlugin = require('uglifyjs-webpack-plugin')
const path = require('path')

module.exports = merge(common, {
    mode: 'production',
    entry: {
        app: './src/app.js',
        vendor: [
            'react',
            'react-dom',
        ],
    },
    plugins: [
        new UglifyjsPlugin(),
    ],
});
