import merge from 'webpack-merge'
import baseConfig from './base.config'
import webpack from 'webpack'

export default merge(baseConfig, {
  devtool: 'source-map',
  mode: 'development',
  entry: {
    app: ['webpack-hot-middleware/client', './src/app.js'],
  },
  optimization: {
    noEmitOnErrors: false,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
})
