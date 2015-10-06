var app = angular.module('app', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'home.html',
			controller: 'main-ctrl'
		})
		.state('users', {
			url: '/users',
			templateUrl: 'users.html',
			controller: 'users-ctrl'
		})

})
app.controller('main-ctrl', function($scope){
	$scope.message = "How?????";
})
app.controller('users-ctrl', function($scope){
	$scope.message = "Why?????";
})
