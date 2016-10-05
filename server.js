'use strict'
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./config/webpack.config.js');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  // IF YOU ARE DOING ONLY JAVASCRIPT(MODULE) RELOADING AND NOT BOTH JAVASCRIPT(MODULE) AND HTML RELOADING,
  // THEN UNCOMMENT 'hot: true' BELOW. IF YOU ARE DOING BOTH JAVASCRIPT(MODULE) AND HTML RELOADING, THEN
  // YOU MUST LEAVE 'hot: true' UNCOMMENTED OTHERWISE HTML RELOADING WILL NOT WORK AND ONLY JAVASCRIPT MODULE 
  // WILL WORK
  // hot: true,
  // The rest is terminal configurations
  quiet: false,
  noInfo: false,
  stats: {
    colors: true,
    progress: true
  },
  inline: true,
  historyApiFallback: true
}).listen(3000, 'localhost', function (err, result) {
  if (err) {
    return console.log(err);
  }
  console.log('Listening at http://localhost:3000/');
});
