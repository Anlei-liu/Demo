const path = require('path');

const webpack = require('webpack');
const UglifyjsPlugin = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const html = require('./src/html')
const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  devtool: 'none',
  mode: 'production',
  entry: {
    app: ['./src/app.js'],
  },
  output: {
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].chunk.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  optimization: {
    minimizer: [
      new UglifyjsPlugin()
    ],
    runtimeChunk: {
      name: 'runtime'
    },
    noEmitOnErrors: false,
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 2
        },
        vendor: {
          test: /node_modules/,
          name: 'vendors',
          chunks: 'all'
        }
      },
    },
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: ['babel-loader'],
    }, {
      test: /\.(sa|sc)ss$/,
      exclude: /node_modules/,
      use: [devMode ? 'style-loader' : MiniCssExtractPlugin.loader, {
        loader: 'css-loader',
        options: {
          module: true,
          sourceMap: true,
        },
      }, 'sass-loader'],
    }, {
      test: /\.css$/,
      use: [devMode ? 'style-loader' : MiniCssExtractPlugin.loader, {
        loader: 'css-loader',
      }],
    }],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'app',
      templateContent: html(),
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    }),
    new webpack.HashedModuleIdsPlugin(),
  ]
}
