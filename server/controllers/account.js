var mongoose = require('mongoose');
var Account = mongoose.model('Account');
var _ = require('underscore');

module.exports.login = function(req,res) {
	res.send({	'status': 'success',
				'message': 'Login successful',
				'info': req.user});
};

module.exports.register = function(req,res) {
	console.log(req.body);
	Account.register(new Account({ username : req.body.username, college: req.body.college }), req.body.password, function(err, account) {
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

module.exports.logout = function(req,res) {
	req.logout();
	res.send({	'status': 'success',
				'message': 'Logout successful',
				'info': ''
			});
};

module.exports.query = function(req,res) {
	Account.find({}, function(err,users) {
		if (err) {
			res.send(400, {	'status': 'error',
						'message': 'Error getting list of users',
						'info': JSON.stringify(err)
			});
		} else {
			res.send(200, {	'status': 'success',
						'message': 'Got all users',
						'info': JSON.stringify(users)
			});
		}
	}); 
}

module.exports.read = function(req,res) {
	Account.find({username: req.params.user_id}, function(err,user) {
		user.salt = "";
		user.hash = "";
		if (err) {
			res.send(400, {	'status': 'error',
						'message': 'Error getting user id ' + req.params.user_id,
						'info': JSON.stringify(err)
			});
		} else {
			res.send(200, {	'status': 'success',
						'message': 'Got user ' + req.params.user_id,
						'info': JSON.stringify(user)
			});
		}
	});
}

module.exports.update = function(req,res) {
	var update_user = {};
	update_user = _.extend(update_user, req.body);
	delete update_user.name; // Disallow editing of username
	Account.findOneAndUpdate(
							{username:req.params.user_id}, 
							{$set: update_user }, 
							{upsert:true},
							function(err,user) {
								if (err) {
									res.send(400, {	'status': 'error',
												'message': 'Error updating user ' + req.params.user_id,
												'info': JSON.stringify(err)
									});
								} else {
									res.send(200, {	'status': 'success',
												'message': 'Successfully updated user',
												'info': JSON.stringify(user)
									});
								}
							});	
}

module.exports.delete = function(req,res) {
    Account.findOneAndRemove({username:req.params.user_id}, function(err){
		if (err) {
			res.send(400, {	'status': 'error',
						'message': 'Error deleting user ' + req.params.user_id,
						'info': JSON.stringify(err)
			});
		} else {
			res.send(200, {	'status': 'success',
						'message': 'Successfully deleted user',
						'info': ''
			});
		}
	});	
}