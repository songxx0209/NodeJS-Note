var http = require('http');
var cheerio = require('cheerio');

var content = null;
var _url = 'http://movie.mtime.com/108737/';
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

setTimeout(function() {
    var mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/song');
    var db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        // we're connected!
        console.log('data');
    });

    var hand = mongoose.Schema({
        name: String
    })

    var handsight = mongoose.model('handsight', hand);

    var hd = new handsight({
        name: content
    });
    console.log(hd.name);

    /*var shuju = handsight.find(function (err, data){
        if(err) return console.error(err);
        console.log(data);
    });*/
    var shuju = hd.save(function(err, hd, callback) {
        if (err) return console.error(err);
        handsight.find(function(err, data) {
            if (err) return console.error(err);
            console.log('data=====', data);
        })
    });

    module.exports = shuju;
}, 3000)
