var express = require('express');
var app = express();
var fs = require("fs");

// cookie-parser - 这就是一个解析Cookie的工具。通过req.cookies可以取到传过来的cookie，并把它们转成对象
// multer - node.js 中间件，用于处理 enctype="multipart/form-data"（设置表单的MIME编码）的表单数据。

var bodyParser = require('body-parser'); // 中间件，用于处理 JSON, Raw, Text 和 URL 编码的数据。
var multer  = require('multer');
 
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/tmp/'}).array('image'));

app.post('/file_upload', function (req, res) {
 
  console.log('ss=', req.files[0]);  // 上传的文件信息

  var des_file = __dirname + "/" + req.files[0].originalname;

  console.log('des_file=', des_file);
  fs.readFile( req.files[0].path, function (err, data) {
       fs.writeFile(des_file, data, function (err) {
        if( err ){
            console.log( err );
        }else{
            response = {
                message:'File uploaded successfully', 
                filename:req.files[0].originalname
            };
         }
         console.log( response );
         res.end( JSON.stringify( response ) );
      });
  });
})

var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
})