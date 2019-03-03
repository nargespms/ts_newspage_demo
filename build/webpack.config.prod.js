// const webpack = require('webpack');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const baseWebpackConfig = require('./webpack.config.base');


module.exports = merge(baseWebpackConfig, {
  mode: 'production',
  externals: [nodeExternals()],
  devtool: 'inline-cheap-module-source-map',
  plugins: [
    // Extract imported CSS into own file
    // new ExtractTextPlugin('[name].bundle.[chunkhash].css'),
    // Minify JS
    // new UglifyJsPlugin({
    //   // sourceMap: false,
    //   // compress: true,
    // }),
    // Minify CSS
    // new webpack.LoaderOptionsPlugin({
    //   minimize: true,
    // }),
  ],
});
