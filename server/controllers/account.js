var mongoose = require('mongoose');
var Account = mongoose.model('Account');
var _ = require('underscore');

module.exports.signup = function(req,res) {
	console.log(req.body);
	var acct = {};
	acct = _.extend(acct, req.body);
	var new_acct = new Account(acct);	
	console.log(new_acct);
	new_acct.save(function(err, account) {
	    if (err) {
	        res.send({	'status' : 'error',
	        		  	'message' : 'Error creating account',
	        		  	'info':  err });
	    } else {
	    	res.send({	'status': 'success',
						'message' : 'Account created',
						'info' : account});
	    }    	
	});
};

