'use strict'
const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const BUILD_DIR = path.resolve(__dirname, '../src/dist')
const APP_DIR = path.resolve(__dirname, '../src/app')
const NODE_MODULES_DIR = path.resolve(__dirname, '../node_modules')

const config = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    `${APP_DIR}/app` // Your appʼs entry point
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js', // //this is the default name, so you can skip it
    // at this directory our bundle file will be available
    // make sure port 3000 is used when launching webpack-dev-server
    // In our example we will access our index.html from
    // http://localhost:3000/dist/index.html
    publicPath: '/dist'
  },
  // Important! Do not remove ''. If you do, imports without
  // an extension won't work anymore!
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        // Enable caching for improved performance during development
        // It uses default OS directory by default. If you need
        // something more custom, pass a path to it.
        // I.e., babel?cacheDirectory=<path>
        loaders: ['babel?cacheDirectory'],
        // Parse only app files! Without this it will go through
        // the entire project. In addition to being slow,
        // that will most likely result in an error.
        include: APP_DIR,
        exclude: [NODE_MODULES_DIR]
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.html$/,
        loader: 'raw-loader' // loaders: ['raw-loader'] is also perfectly acceptable.
      }
    ]
  },
  devServer: {
    // IF YOU ARE DOING ONLY JAVASCRIPT(MODULE) RELOADING AND NOT BOTH JAVASCRIPT(MODULE) AND HTML RELOADING,
    // THEN UNCOMMENT 'hot: true' BELOW. IF YOU ARE DOING BOTH JAVASCRIPT(MODULE) AND HTML RELOADING, THEN
    // YOU MUST LEAVE 'hot: true' UNCOMMENTED OTHERWISE HTML RELOADING WILL NOT WORK AND ONLY JAVASCRIPT MODULE
    // WILL WORK
    // hot: true,
    contentBase: BUILD_DIR,
    port: 3000,
    historyApiFallback: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: 'body',
      template: `${APP_DIR}/index.html`
    })
  ]
}

module.exports = config
