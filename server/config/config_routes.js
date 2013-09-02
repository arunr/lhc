var mongoose = require('mongoose');
var passport = require('passport');

module.exports = function(app) {

	function checkAuthenticated() {
		return function(req,res,next) {
			if (req.isAuthenticated()) {
				next();
			} else {
				res.send({	'status': 'error',
							'message': 'Authentication failed on server',
							'info': JSON.stringify(err)
				});
			}
		}
	}

	(function authentication_routes() {
		var AccountCtrl = require('../controllers/account');
		app.post('/api/v1/auth/login', passport.authenticate('local'), AccountCtrl.login);	
		app.post('/api/v1/auth/register', AccountCtrl.register);
		app.get('/api/v1/auth/logout', AccountCtrl.logout);
	})();

	(function handle_defaults() {
		app.use(function (req,res){
			res.end('404 - Page not found');
		});
	})();
};	