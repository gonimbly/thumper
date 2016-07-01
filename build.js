var webpack = require('webpack');

// webpack thumper
var webpackConfig = require('./webpackConfig.thumper')(false);
var compiler = webpack(webpackConfig);
compiler.watch(300, _webpackComplete);

function _webpackComplete(err, stats) {
  if(err) {
    console.error(err);
    return;
  }
  var jsonStats = stats.toJson();
  if(jsonStats.errors.length > 0){
    console.error.apply(this, jsonStats.errors);
    return;
  }
  if(jsonStats.warnings.length > 0) {
    console.error.apply(this, jsonStats.warnings);
    return;
  }
}