var webpack = require('webpack');

// webpack thumper
var webpackConfig = require('./webpackConfig.thumper')(false);
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
    process.exit(0);
  }
}