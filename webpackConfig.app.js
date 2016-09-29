'use strict';
var path = require('path');
var webpack = require('webpack');
var WebpackNotifierPlugin = require('webpack-notifier');
var ProgressBarPlugin = require('progress-bar-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = function(development) {

  var plugins = [];
  var location;
  if(development) {
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
    plugins.push(new webpack.optimize.UglifyJsPlugin());
  }

  var config = {
    debug: false,
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
      extensions: ['', '.js', '.jsx', '.scss']
    },
    module: {
      preLoaders: [{
        // loads rules from .eslintrc.json
        test: /\.jsx?$/,
        loader: 'eslint',
        exclude: /node_modules/
      }],
      loaders: [
        {
          test: /\.jsx?$/,
          loader: 'babel',
          exclude: /node_modules/,
          query: {
            plugins: ['transform-object-rest-spread']
          }
        },
        {
          test: /\.scss/,
          loader: 'style!css!sass?outputStyle=compressed!postcss'
        }, {
           test: /\.(png|jpg|svg)$/,
           loader: 'url'
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
    },
    postcss: function () {
        return [autoprefixer];
    }
  };

  return config;
};