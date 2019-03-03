const HtmlWebPackPlugin = require('html-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.config.base');

// const compiler = require('vue-template-compiler');

module.exports = merge(baseWebpackConfig, {
  // devtool: 'eval-source-map',
  mode: 'development',
  devServer: {
    // inline: true,
    // contentBase: 'src',
    port: '4000',
    hot: true,
    // quiet: true, //necessary for friendly
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    // it should be in dev mode
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: ['You application is running here http://localhost:4000'],
      },
    }),
  ],

});
