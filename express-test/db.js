var mysql      = require('mysql');
var dbconn = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : 's123456X',
  database: 'node'
});

module.exports = {
  fetch: function(req, res, next) {
    dbconn.connect(function(err){
      if(err){
        console.log('Database connection error');
      }else{
        console.log('Database connection successful');
      }
    });
    
    dbconn.query('SELECT * FROM teacher WHERE id=?', [1],function(err, records){
      if(err) throw err;
      console.log('Data received from Db:n');
      console.log(records);

      res.json(records);
    });
    
    dbconn.end(function(err) {
      // Function to close database connection
    });
  }
}