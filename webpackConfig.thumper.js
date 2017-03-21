'use strict';
var path = require('path');
var webpack = require('webpack');
var WebpackNotifierPlugin = require('webpack-notifier');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ProgressBarPlugin = require('progress-bar-webpack-plugin');
var version = require('./package.json').version;
var LiveReloadPlugin = require('webpack-livereload-plugin');
console.log('webpacking', version);

var plugins = [
  new ProgressBarPlugin(),
  new WebpackNotifierPlugin(),
  new webpack.BannerPlugin({banner: ['© Go Nimbly Inc.', new Date().getFullYear(), 'Thumper ' + version].join('\n'), entryOnly: true}),
  new ExtractTextPlugin(`[name].css`)
];
var location;
if(process.env.NODE_ENV === 'development') {
  location = 'public';
  plugins.push(new LiveReloadPlugin({appendScriptTag: true}));
  plugins.push(new ExtractTextPlugin(`[name].css`));
} else {
  location = 'dist';
  plugins.push(new webpack.optimize.UglifyJsPlugin({
    sourceMap: true,
    compress: {
      warnings: true
    }
  }));
}

var config = {
  context: __dirname + '/src',
  entry: {
    'thumper': './thumper.js', 
    'thumper-scoped': './thumper-scoped.js'
  },
  devtool: 'cheap-module-source-map',
  output: {
    path: path.join(__dirname, location),
    filename: '[name].js'
  },
  stats: {
    colors: true,
    reasons: false,
    assets: false
  },

  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
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
    rules: [
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
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          //resolve-url-loader may be chained before sass-loader if necessary
          use: ['css-loader?sourceMap', 'postcss-loader', 'sass-loader?sourceMap']
        })
      },
      {
         test: /\.(png|jpg|svg)$/,
         loader: 'url-loader'
      },
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: 'url-loader?limit=100000000&mimetype=application/font-woff' },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,   loader: 'url-loader?limit=100000000&mimetype=application/font-woff2' },
      { test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,    loader: 'file-loader' }
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