import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import UglifyjsPlugin from 'uglifyjs-webpack-plugin';

module.exports = {
  mode: 'development',
  entry: {
    app: ['webpack-hot-middleware/client', './src/app.js'],
    vendor: [
      'react',
      'react-dom',
    ],
  },
  optimization: {
    runtimeChunk: true,
    splitChunks: {
      chunks: 'all',
    },
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'assets'),
    publicPath: '/',
  },
  devtool: 'inlne-source-map',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
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
    new webpack.HotModuleReplacementPlugin(), // 热更新
    new webpack.HashedModuleIdsPlugin(), // 防止公共模块多次打包
    // new UglifyjsPlugin(),  //树抖动
    new CleanWebpackPlugin(['assets']), // 清理打包文件夹
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
