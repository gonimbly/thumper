'use strict';
var path = require('path');
var webpack = require('webpack');
var WebpackNotifierPlugin = require('webpack-notifier');
var ProgressBarPlugin = require('progress-bar-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = function() {
  var config = {
    debug: false,
    context: __dirname + '/src',
    entry: './thumper.js',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'thumper.js'
    },
    stats: {
      colors: true,
      reasons: false,
      assets: false
    },

    resolve: {
      extensions: ['', '.js', '.jsx', '.scss'],
      alias: {
        'styles': __dirname + '/styles',
        'mixins': __dirname + '/mixins',
        'components': __dirname + '/components/',
        'stores': __dirname + '/stores/',
        'actions': __dirname + '/actions/'
      }
    },
    module: {
      // payment.js is required by card-react
      preLoaders: [{
        // loads rules from .eslintrc.json
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }],
      loaders: [
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
          loader: 'style-loader!css-loader!sass-loader?outputStyle=compressed'
        }, {
           test: /\.(png|jpg|svg)$/,
           loader: 'url-loader'
        },
        { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: 'url?limit=100000&mimetype=application/font-woff' },
        { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,   loader: 'url-loader?limit=100000&minetype=application/font-woff2' },
        { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: 'file-loader' },
        { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: 'file-loader' }
      ]
    },

    plugins: [
      new ProgressBarPlugin(),
      new WebpackNotifierPlugin()
    ],
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