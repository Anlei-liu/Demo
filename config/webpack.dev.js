import merge from 'webpack-merge';
import common from './webpack.common';
import webpack from 'webpack';

module.exports = merge(common, {
  mode: 'development',
  entry: {
    app: ['webpack-hot-middleware/client', './src/app.js'],
    vendor: [
      'react',
      'react-dom',
    ],
  },
  devtool: 'inlne-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
});
