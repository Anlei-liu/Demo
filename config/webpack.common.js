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
      exclude: /node_modules/,
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
    }, {
      test: /\.css$/,
      use: [{
        loader: 'style-loader',
      }, {
        loader: 'css-loader',
        options: {
          module: false,
          sourceMap: true,
        },
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
      template: 'index.html',
    }),
  ],
};
