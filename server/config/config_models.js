var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = function() {
	var account = require('../models/account');
	var offer = require('../models/offer');
	var placeholder = require('../models/placeholder');
	var outlet = require('../models/outlet');
	var voucher = require('../models/voucher');
	var user_profile = require('../models/user_profile');
	var tier = require('../models/tier');
	var recommendation = require('../models/recommendation');
	var checkin = require('../models/checkin');
	var favourite = require('../models/favourite');
	var beta_users = require('../models/beta_users');
	var beta_merchants = require('../models/beta_merchants');

	mongoose.model('Outlet').schema.add(
		{
			outlet_meta: {
				parent: {type: Schema.ObjectId, ref: 'PlaceHolder'},
				offers: [{type: Schema.ObjectId, ref: 'Offer'}]
			}
		}
	);

	mongoose.model('Offer').schema.add(
		{
			basics: {
				outlets: [{type:Schema.ObjectId, ref: 'Outlet'}]						
			}
		}
	);

	mongoose.model('Account').schema.add(
		{
			outlets: [{type: Schema.ObjectId, ref: 'Outlet'}],
		}
	);
};