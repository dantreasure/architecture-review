var app = angular.module('app', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

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


app.controller('main-ctrl', function($scope, particulates){
	$scope.message = "How?????";
	particulates.get().then(function(response){
		$scope.particulates = response.data.results[0];
	})

})

app.controller('users-ctrl', function($scope){
	$scope.message = "Why?????";
})

app.service('users', function($http){
	this.get = function(){
		return $http.get('http://localhost:3000/users');
	}
})

app.factory('particulates', function($http){
	var api = {};
	api.get = function(){
		return $http.get('http://apis.is/particulates');
	}
	return api;
})




