var mongoose = require('mongoose');
var passport = require('passport');

module.exports = function(app) {
	(function authentication_routes() {
		var AccountCtrl = require('../controllers/account');
		app.post('/api/v1/auth/register', AccountCtrl.signup);
	})();

	(function handle_defaults() {
		app.use(function (req,res){
			res.end('404 - Page not found');
		});
	})();
};	