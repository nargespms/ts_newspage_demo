const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const baseWebpackConfig = require('./webpack.config.base');


module.exports = merge(baseWebpackConfig, {
  mode : 'none',
  externals: [nodeExternals()],
  devtool: 'inline-cheap-module-source-map',
  plugins: [
  ],
  module: {
    rules: [].concat(
      {
        test: /.js$/,
        loader: 'istanbul-instrumenter-loader',
        options: { esModules: true }
      },
      {
        test: /.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
    ),
  },
});
