
//==========================================//
//App dependencies
//==========================================//

var App = angular.module('repzio', [
	'ngRoute',
	'ngResource']);







//==========================================//
//Routing
//==========================================//
App.config(function($routeProvider){

	$routeProvider
		.when('/', {
			templateUrl : 'views/home.tpl',
			controller 	: 'home'
		})
		.otherwise({
		    redirectTo: '/'
		  })
});