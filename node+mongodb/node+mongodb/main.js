var http = require('http');
var cheerio = require('cheerio');
var shuju = require('./get.js');

var content =null;
var proxy = http.createServer(function(req, res) {
    res.writeHead(200, {
        "Content-Type": "text/html;charset=utf-8"
    });

    /*var _url = 'http://movie.mtime.com/108737/';
    var url_get = http.get(_url, function(res) {
        var html = "";
        res.on('data', (data) => {
            html += data;

        });
        res.on('end', () => {
            var $ = cheerio.load(html);
            content = $('#db_head img').attr('src');
            //return content;
        });

    }).on('error', (e) => {
        console.log(`Got error: ${e.message}`);
    });

    setTimeout(function(){console.log(content);},3000)*/
    res.end(shuju);

}).listen(8080);

/*function qinqiu(url, callback) {
    var _url = 'http://movie.mtime.com/108737/';
    http.get(_url, function(res) {
        var html = "";
        res.on('data', (data) => {
            html += data;

        });
        res.on('end', () => {
            var $ = cheerio.load(html);
            var content = $('#db_head img').attr('src');

            
            callback(content);
        });

    }).on('error', (e) => {
        console.log(`Got error: ${e.message}`);
    });
}*/
