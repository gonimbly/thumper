console.log('Running with NODE_ENV:', process.env.NODE_ENV);

// start server
require('dotenv').config();
var nodemon = require('nodemon');
nodemon({
  script: 'server.js',
  ignore: ['components/*', 'src', 'app.js'],
  ext: 'js json ejs env'
});

nodemon.on('start', function () {
  console.log('App has started');
}).on('quit', function () {
  console.log('App has quit');
}).on('restart', function (files) {
  console.log('App restarted due to: ', files);
});

// webpack the app
var webpack = require('webpack');
var webpackConfig = require('./webpackConfig.app')(true);
var compiler = webpack(webpackConfig);
compiler.watch(300, _webpackComplete);


// webpack thumper
var webpackConfig = require('./webpackConfig.thumper')(true);
var compiler = webpack(webpackConfig);
compiler.watch(300, _webpackComplete);

function _webpackComplete(err, stats) {
  if(err) {
    console.error(err);
    process.exit(0);
  }
  var jsonStats = stats.toJson();
  if(jsonStats.errors.length > 0){
    console.error.apply(this, jsonStats.errors);
    process.exit(0);
  }
  if(jsonStats.warnings.length > 0) {
    console.error.apply(this, jsonStats.warnings);
  }
}