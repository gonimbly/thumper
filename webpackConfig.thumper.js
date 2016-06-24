'use strict';
var path = require('path');
var webpack = require('webpack');
var WebpackNotifierPlugin = require('webpack-notifier');
var ProgressBarPlugin = require('progress-bar-webpack-plugin');
var autoprefixer = require('autoprefixer');
var version = require('./package.json').version;
var LiveReloadPlugin = require('webpack-livereload-plugin');
console.log('webpacking', version);

module.exports = function() {
  var config = {
    debug: false,
    context: __dirname + '/src',
    entry: './thumper.js',
    devtool: 'cheap-module-source-map',
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
          loader: 'style!css?sourceMap!postcss!sass?sourceMap'
        }, {
           test: /\.(png|jpg)$/,
           loader: 'url'
        },
        { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: 'url?limit=100000&mimetype=application/font-woff' },
        { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,   loader: 'url?limit=100000&mimetype=application/font-woff2' },
        { test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,    loader: 'file' }
      ]
    },

    plugins: [
      new ProgressBarPlugin(),
      new WebpackNotifierPlugin(),
      new webpack.BannerPlugin(['© Go Nimbly Inc.', new Date().getFullYear(), 'Thumper ' + version].join('\n')),
      new LiveReloadPlugin({appendScriptTag: true})
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