var mongoose = require('./db.js'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    username : { type: String },
    userpwd: {type: String},
    userage: {type: Number},
    logindate : { type: Date}
});

module.exports = mongoose.model('person',UserSchema, 'person');