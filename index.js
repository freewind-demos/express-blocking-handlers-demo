var express = require('express');
var sleep = require('sleep').sleep;

var app = express();

app.use(function(req, res, next) {
  console.log(req.path + ': ' + new Date);
  next();
});

app.get('/', function(req, res) {
  sleep(10);
  res.send('Hello');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});