'use strict';

const path = require('path');
const webpack = require('webpack');
const WebpackNotifierPlugin = require('webpack-notifier');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const plugins = [];
let location;
if (process.env.NODE_ENV === 'development') {
  location = 'public';
  plugins.push(new WebpackNotifierPlugin());
  plugins.push(new ProgressBarPlugin());
} else {
  location = 'dist';
  plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    })
  );
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false,
      },
    })
  );
}

const config = {
  entry: './app.js',
  output: {
    path: path.join(__dirname, location),
    filename: 'app.js',
  },
  stats: {
    colors: true,
    reasons: false,
    assets: false,
  },
  devtool: 'sourcemap',

  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          plugins: ['transform-object-rest-spread'],
        },
      },
      {
        test: /\.scss/,
        loader: [
          'style-loader',
          'css-loader?sourceMap',
          'postcss-loader',
          'sass-loader?sourceMap',
        ],
      },
      {
        test: /\.(png|jpg|svg)$/,
        loader: 'url-loader',
      },
    ],
  },

  plugins: plugins,
  externals: {
    // added for enzyme: https://github.com/airbnb/enzyme/blob/master/docs/guides/webpack.md
    cheerio: 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
};

module.exports = config;
