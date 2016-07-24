const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const entry = [
  'webpack-dev-server/client?http://localhost:3000', // Needed for hot reloading
  path.join(__dirname, 'src/js/app.js') // Start with js/app.js
];
// Output
const output = { // Compile into build/ directory
  path: path.join(__dirname, 'build'),
  filename: 'js/bundle.js', // in js folder as bundle.js
  publicPath: '/build/',
};

const cssLoaders = 'style-loader!css-loader!';
// Hot module replacement plugin
const plugins = [
  new webpack.HotModuleReplacementPlugin(), // Make hot loading work
  new webpack.optimize.OccurenceOrderPlugin(),
  new HtmlWebpackPlugin({
    template: 'index.html', // Move the index.html file
    inject: true
  })
];

const loaders = [
  { test: /\.js$/, loader: 'babel', exclude: path.join(__dirname, '/node_modules/') },
  { test: /\.jsx$/, loader: 'babel', exclude: path.join(__dirname, '/node_modules/') },
  { test: /\.css$/, loader: cssLoaders },
  { test: /\.jpe?g$|\.gif$|\.png$/i, loader: 'url-loader?limit=8000' },
  { test: /\.json$/, loader: 'json' },
];

const preLoaders = [
  {
    test: /\.js$/,
    loaders: ['eslint-loader'],
    exclude: [path.join(__dirname, '/node_modules/'), path.join(__dirname, '/build/')]
  }
];

module.exports = {
  entry: entry,
  output: output,
  module: {
    preLoaders: preLoaders,
    loaders: loaders
  },
  plugins: plugins,
  target: 'web', // Make web variables accessible to webpack, e.g. window
  stats: false, // Don't show stats in the console
  progress: true
};
