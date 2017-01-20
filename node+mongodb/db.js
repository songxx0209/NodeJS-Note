var content = require('./get.js');

console.log(content)
var mongoose = require('mongoose');
 mongoose.connect('mongodb://localhost/song');
 var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
  console.log('data');
});

var hand = mongoose.Schema({
	name:String
})

var handsight = mongoose.model('handsight', hand);

var hd = new handsight({
	name:content
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