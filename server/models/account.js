var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Account = new Schema({
	email: {type: String, trim: true, required: true, unique: true, index: {unique: true}},
	college: {type:String, trim: true, required: true},
	sex: {type: String, enum: ['male', 'female']}
});

module.exports = mongoose.model('Account', Account);	

var College = new Schema({
	name: {type: String, trim: true, required: true, unique: true, index: true },
	city: {type: String, trim: true, required: true},
	email: {type: String, trim: true, required: true}
});

module.exports = mongoose.model('College', College);