import merge from 'webpack-merge';
import common from './webpack.common';
import UglifyjsPlugin from 'uglifyjs-webpack-plugin';

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new UglifyjsPlugin(),
  ],
});
