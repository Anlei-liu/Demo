import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import html from '../src/html'
const devMode = process.env.NODE_ENV !== 'production'

export default {
  output: {
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].js',
    path: path.resolve(__dirname, '..', 'dist'),
    publicPath: '/',
  },
  optimization: {
    runtimeChunk: true,
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
  resolve: {
    modules: ['node_modules'],
    extensions: ['.wasm', '.mjs', '.js', '.json']
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
