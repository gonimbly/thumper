var webpack = require('webpack');

// webpack the app
var webpackAppConfig = require('./webpackConfig.app')(false);
webpack(webpackAppConfig, (err, stats) => {
  console.log('webpack app complete');
  _checkErrors(err, stats);

  // webpack thumper
  var webpackThumperConfig = require('./webpackConfig.thumper')(false);
  webpack(webpackThumperConfig, (err, stats) => {
    console.log('webpack thumper complete');
    _checkErrors(err, stats);
    process.exit(0);
  });
});


function _checkErrors(err, stats) {
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