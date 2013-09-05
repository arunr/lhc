var LetsHaveCoffee = angular.module('letsHaveCoffee', ['ui.bootstrap']);

LetsHaveCoffee.config(function ($routeProvider) {
	$routeProvider.
	when('/', {
		controller: PublicController,
		templateUrl: '/web/templates/home.html'
	}).
	when('/about', {
		controller: PublicController,
		templateUrl: '/web/templates/about.html'
	}).
	when('/contact', {
		controller: PublicController,
		templateUrl: '/web/templates/contact.html'
	}).
	when('/faqs', {
		controller: PublicController,
		templateUrl: '/web/templates/faqs.html'
	}).		
	when('/privacy', {
		controller: PublicController,
		templateUrl: '/web/templates/privacy.html'
	}).	
	otherwise({
		redirectTo: '/error'
	});
});