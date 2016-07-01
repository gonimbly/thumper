var express = require('express');
var path = require('path');
var app = express();

// configure app
app.engine('html', require('ejs').renderFile);
app.use('/public', express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// routes
app.get('/*', function(req, res) {
  res.render('index');
});

// start
app.listen(process.env.PORT, function () {
  console.log('Example app listening on port ' + process.env.PORT);
});

function _isAuthenticated(callback) {
  return function(req, res, next) {
    if(req.isAuthenticated()) {
      callback(req, res, next);
    } else {
      next();
    }
  }
}