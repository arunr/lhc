var express = require('express');
var mongoose = require('mongoose');
var settings = require('./settings');

module.exports = function(app) {
	app.configure(function() {
		app.use(express.logger());
		app.use(express.bodyParser());


		app.use(express.cookieParser('some secret'));
		app.use(express.session());
		app.use(express.methodOverride());
		app.use(express.static(__dirname + '/../../web_apps/'));
	    app.use(app.router);
		

		app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));	

		var Account = require('../models/account'); 		
	});

	// Connect to the database
	mongoose.connect(settings.values.db)
};
