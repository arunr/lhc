var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passport = require('passport');
var passportLocalMongoose = require('passport-local-mongoose');
var LocalStrategy = require('passport-local').Strategy;

var Account = new Schema({
	college: String
});

Account.plugin(passportLocalMongoose);
module.exports = mongoose.model('Account', Account);	
