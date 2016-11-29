var http = require('http');
var cheerio = require('cheerio');
var Promise = require('promise');

var arr = [];
function runAsync(url){
    var p = new Promise(function(resolve, reject){
        getHtml(url, function(data){
            var $ =  cheerio.load(data);
            var content = $('#footer_main .dark').text();
            var ss = content.replace(' ','');
            console.log(ss);
            arr.push(ss);
            resolve(ss);// 回调函数
        });
    });
    return p;            
}

runAsync('http://cnodejs.org/')
.then(function (data){
    console.log(data);
    setTimeout(function(){
        getHtml('http://www.cnblogs.com/roverliang/p/5340902.html', function(data){
            var $ =  cheerio.load(data);
            var content = $('#Header1_HeaderTitle').text();
            arr.push(content);
            console.log(content);
            console.log('最终返回的数组，先后请求2个不同的网址：', arr);
        });
    },3000)
})

function getHtml(url, callback){
    http.get(url, function (res){
        var html = '';
        res.on('data', (data) =>{
            html += data;
        });
        res.on('end', () =>{
            callback(html); 
        })
    }).on('error', (e) =>{
        console.log(`Got error: ${e.message}`);
    });
}