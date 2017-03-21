'use strict';
var path = require('path');
var webpack = require('webpack');
var WebpackNotifierPlugin = require('webpack-notifier');
var ProgressBarPlugin = require('progress-bar-webpack-plugin');

var plugins = [];
var location;
if(process.env.NODE_ENV === 'development') {
  location = 'public';
  plugins.push(new WebpackNotifierPlugin());
  plugins.push(new ProgressBarPlugin());
} else {
  location = 'dist';
  plugins.push(new webpack.DefinePlugin({
    'process.env':{
      'NODE_ENV': JSON.stringify('production')
    }
  }));
  plugins.push(new webpack.optimize.UglifyJsPlugin({
    sourceMap: true,
    compress: {
      warnings: true
    }
  }));
}

var config = {
  entry: './app.js',
  output: {
    path: path.join(__dirname, location),
    filename: 'app.js'
  },
  stats: {
    colors: true,
    reasons: false,
    assets: false
  },

  resolve: {
    extensions: ['.js', '.jsx', '.scss']
  },
  module: {
    loaders: [
      {
        // loads rules from .eslintrc.json
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          plugins: ['transform-object-rest-spread']
        }
      },
      {
        test: /\.scss/,
        loader: ['style-loader', 'css-loader?sourceMap', 'postcss-loader', 'sass-loader?sourceMap']
      }, {
         test: /\.(png|jpg|svg)$/,
         loader: 'url-loader'
      }
    ]
  },

  plugins: plugins,
  externals: {
    // added for enzyme: https://github.com/airbnb/enzyme/blob/master/docs/guides/webpack.md
    'cheerio': 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  }
};

module.exports = config;