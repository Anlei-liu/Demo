import merge from 'webpack-merge'
import baseConfig from './base.config'
import UglifyjsPlugin from 'uglifyjs-webpack-plugin'
import CleanWebpackPlugin from 'clean-webpack-plugin'
import path from 'path'
import Visualizer from 'webpack-visualizer-plugin'

export default merge(baseConfig, {
  devtool: 'none',
  mode: 'production',
  entry: {
    app: ['./src/app.js'],
  },
  optimization: {
    minimizer: [
      new UglifyjsPlugin()
    ],
    noEmitOnErrors: false,
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '..')
    }),
    new Visualizer()
  ]
})
