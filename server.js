const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

new WebpackDevServer(webpack(config), { // Start a server
  publicPath: config.output.publicPath,
  hot: true, // With hot reloading
  inline: false,
  historyApiFallback: true,
  headers: { 'Access-Control-Allow-Origin': '*' }, // Allow CORS requests
  quiet: true // Without logging
}).listen(3000, 'localhost', function(err) {
  if (err) {
    console.error(err);
  } else {
    console.info('==> Server started. Listening at http://localhost:3000');
  }
});
