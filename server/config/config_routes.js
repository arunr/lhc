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

    function requireRole(role) {
        return function(req, res, next) {
            if (req.isAuthenticated() && req.user.role === role && req.user.validated)
                next();
            else {
				res.send({	'status': 'error',
							'message': 'Authentication failed on server',
							'info': JSON.stringify(err)
				});
            }
        };
    }

	(function authentication_routes() {
		var AccountCtrl = require('../controllers/account');
		app.post('/api/v1/auth/login', passport.authenticate('local'), AccountCtrl.login);	
		app.post('/api/v1/auth/register', AccountCtrl.register);
		app.get('/api/v1/auth/logout', AccountCtrl.logout);
		app.get('/api/v1/auth/users', AccountCtrl.query);
		app.get('/api/v1/auth/users/:user_id', AccountCtrl.read);
		app.put('/api/v1/auth/users/:user_id', AccountCtrl.update);
		app.delete('/api/v1/auth/users/:user_id', AccountCtrl.delete);
	})();

	(function outlet_routes() {
		var OutletCtrl = require('../controllers/outlet');
		app.get('/api/v1/outlets', checkAuthenticated(), OutletCtrl.query);
		app.get('/api/v1/outlets/:outlet_id', checkAuthenticated(), OutletCtrl.read);
		app.post('/api/v1/outlets', checkAuthenticated(), OutletCtrl.create);		
		app.put('/api/v1/outlets/:outlet_id', checkAuthenticated(), OutletCtrl.update);
		app.delete('/api/v1/outlets/:outlet_id', checkAuthenticated(), OutletCtrl.delete);
	})();

	(function offer_routes() {
		var OfferCtrl = require('../controllers/offer');
		app.get('/api/v1/offers', checkAuthenticated(), OfferCtrl.query);
		app.get('/api/v1/offers/:offer_id', checkAuthenticated(), OfferCtrl.read);
		app.post('/api/v1/offers', checkAuthenticated(), OfferCtrl.create);
		app.put('/api/v1/offers/:offer_id', checkAuthenticated(), OfferCtrl.update);
		app.delete('/api/v1/offers/:offer_id', checkAuthenticated(), OfferCtrl.delete);
	})();

	(function voucher_routes() {
		var VoucherCtrl = require('../controllers/voucher');
		app.get('/api/v1/vouchers', checkAuthenticated(), VoucherCtrl.query);
		app.get('/api/v1/vouchers/:voucher_id', checkAuthenticated(), VoucherCtrl.read);
		app.post('/api/v1/vouchers', checkAuthenticated(), VoucherCtrl.create);
		app.put('/api/v1/vouchers/:voucher_id', checkAuthenticated(), VoucherCtrl.update);
		app.delete('/api/v1/vouchers/:voucher_id', checkAuthenticated(), VoucherCtrl.delete);
	})();

	(function tier_routes() {
		var TierCtrl = require('../controllers/tier');
		app.get('/api/v1/tiers', checkAuthenticated(), TierCtrl.query);
		app.get('/api/v1/tiers/:tier_id', checkAuthenticated(), TierCtrl.read);
		app.post('/api/v1/tiers', checkAuthenticated(), TierCtrl.create);
		app.put('/api/v1/tiers/:tier_id', checkAuthenticated(), TierCtrl.update);
		app.delete('/api/v1/tiers/:tier_id', checkAuthenticated(), TierCtrl.delete);
	})();

	(function user_profile_routes() {
		var User_profileCtrl = require('../controllers/user_profile');
		app.get('/api/v1/user_profiles', User_profileCtrl.query);
		app.get('/api/v1/user_profiles/:user_profile_id', User_profileCtrl.read);
		app.post('/api/v1/user_profiles', User_profileCtrl.create);
		app.put('/api/v1/user_profiles/:user_profile_id', User_profileCtrl.update);
		app.delete('/api/v1/user_profiles/:user_profile_id', User_profileCtrl.delete);
	})();

	(function checkin_routes() {
		var CheckinCtrl = require('../controllers/checkin');
		app.get('/api/v1/checkins', CheckinCtrl.query);
		app.get('/api/v1/checkins/:checkin_id', CheckinCtrl.read);
		app.post('/api/v1/checkins', CheckinCtrl.create);
		app.put('/api/v1/checkins/:checkin_id', CheckinCtrl.update);
		app.delete('/api/v1/checkins/:checkin_id', CheckinCtrl.delete);
	})();

	(function favourite_routes() {
		var FavouriteCtrl = require('../controllers/favourite');
		app.get('/api/v1/favourites', FavouriteCtrl.query);
		app.get('/api/v1/favourites/:favourite_id', FavouriteCtrl.read);
		app.post('/api/v1/favourites', FavouriteCtrl.create);
		app.put('/api/v1/favourites/:favourite_id', FavouriteCtrl.update);
		app.delete('/api/v1/favourites/:favourite_id', FavouriteCtrl.delete);
	})();

	(function recommendation_routes() {
		var RecommendationCtrl = require('../controllers/recommendation');
		app.get('/api/v1/recommendations', RecommendationCtrl.query);
		app.get('/api/v1/recommendations/:recommendation_id', RecommendationCtrl.read);
		app.post('/api/v1/recommendations', RecommendationCtrl.create);
		app.put('/api/v1/recommendations/:recommendation_id', RecommendationCtrl.update);
		app.delete('/api/v1/recommendations/:recommendation_id', RecommendationCtrl.delete);
	})();

	(function beta_routes() {
		var BetaUserCtrl = require('../controllers/beta_users');
		var BetaMerchantCtrl = require('../controllers/beta_merchants');
		app.post('/api/v1/beta/users', BetaUserCtrl.create);
		app.post('/api/v1/beta/merchants', BetaMerchantCtrl.create);

	})();

	(function handle_defaults() {
		app.use(function (req,res){
			res.end('404 - Page not found');
		});
	})();
};	