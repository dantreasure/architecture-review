var app = angular.module('app', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'home/home.html',
			controller: 'home-ctrl'
		})
		.state('users', {
			url: '/users',
			templateUrl: 'users/users.html',
			controller: 'users-ctrl'
		})

});




