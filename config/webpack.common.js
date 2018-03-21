const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, '..', 'assets'),
    publicPath: '/',
  },
  optimization: {
    runtimeChunk: true,
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    }, {
      test: /\.scss$/,
      use: [{
        loader: 'style-loader',
      }, {
        loader: 'css-loader',
        options: {
          module: true,
          sourceMap: true,
        },
      }, {
        loader: 'sass-loader',
      }],
    }],
  },
  plugins: [
    new CleanWebpackPlugin(['assets'], {
      root: path.resolve(__dirname, '..'),
    }),
    new webpack.HashedModuleIdsPlugin(),
    new HtmlWebpackPlugin({ // 模板插件
      title: 'app',
      templateContent(templateParams, compilation) {
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
    }),
  ],
};
