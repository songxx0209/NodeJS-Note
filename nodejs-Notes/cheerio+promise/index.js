var http = require('http');
var cheerio = require('cheerio');

var proxy = http.createServer(function(req, res) {
	res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    // res.end('我才黑');	

	qinqiu('',function(content){
		res.end(content );
	});
    
}).listen(8080);

function qinqiu (url, callback){
	var _url = 'http://cnodejs.org/';
	http.get(_url, function (res){
    	var html = "";
        res.on('data', (data) => {
            html += data;
        });
        res.on('end', () => {
        	var $ =  cheerio.load(html);
            var content = $('#topic_list .cell').eq(2).text();
            var ss = content.replace(' ','');
            console.log(ss);
            callback(content);
        });

    }).on('error', (e) => {
        console.log(`Got error: ${e.message}`);
    });
}