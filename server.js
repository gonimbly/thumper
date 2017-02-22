var express = require('express');
var path = require('path');
var app = express();

// configure app
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// routes
if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'dist')));
} else {
  app.use(express.static(path.join(__dirname, 'public')));
}

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/:route', function(req, res) {
  if(req.params.route.split('.').length === 1) {
    console.log('req.params.route', req.params.route);
    res.render('index');
  } else {
    res.sendStatus(404);
  }
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