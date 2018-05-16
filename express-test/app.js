var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');

var post = require('./db');

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })


app.get('/', function (req, res, next) {
  console.log('response will be sent by the next function ...');
  next();
}, function (req, res) {
  post.fetch(req, res);
});

app.post('/about', urlencodedParser, function (req, res) {
  console.log(req.body);
  res.send({name: 'exxx'});
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});


