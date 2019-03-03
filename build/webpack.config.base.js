const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
// const webpack = require('webpack');

const srcPath = path.resolve(__dirname, '../src');

module.exports = {
  entry: './src/inmain.ts',
  output: {
    filename: 'out.js',
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'],
    alias: {
      // extensions: ['.ts', '.js', '.vue', '.json'],
      vue: 'vue/dist/vue.esm.js',
      path: path.resolve(__dirname, '../src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
        },
      },
      {
        test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/', // fonts output
          },
        }],
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader', // creates style nodes from JS strings(string to css styles:np)
          'css-loader', // translates CSS into CommonJS(into string :np)
          // 'sass-loader',
          {
            loader: 'sass-loader', // compiles Sass to CSS, using Node Sass by default
            options: {
              // indentedSyntax: true,
              data: `@import '${srcPath}/scss/global.scss';`,
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          // options: {
          //   presets: ['@babel/preset-env'],
          // },
        },
        // esModule: true,
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',

      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    // new webpack.EnvironmentPlugin([
    //   'NODE_ENV',
    // ]),
    new VueLoaderPlugin(),
  ],
};
