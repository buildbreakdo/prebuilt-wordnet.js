const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
// const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  // optimization: {
  //   minimizer: [
  //     // we specify a custom UglifyJsPlugin here to get source maps in production
  //     new UglifyJsPlugin({
  //       cache: true,
  //       parallel: true,
  //       uglifyOptions: {
  //         compress: false,
  //         ecma: 6,
  //         mangle: false
  //       },
  //       sourceMap: false
  //     })
  //   ]
  // },
  target: 'node',
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    library: 'index',
    libraryTarget: 'commonjs2'
  },
  plugins: [
    // new HardSourceWebpackPlugin(),
    // new webpack.DefinePlugin({
    //   'process.env.BROWSER': false,
    //   __DEV__: process.env.NODE_ENV !== 'production',
    // }),
  ],
  module: {
    rules: [
      {
        // type: "javascript/auto",
        test: /(\.js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ],
  }
};