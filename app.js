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

});

app.service('users', function($http) {
	this.get = function() {
		return $http.get("http://localhost:3000/users");
	}
})

app.factory('particulates', function($http) {
	var api = {};
	api.get = function() {
		return $http.get('http://apis.is/particulates');
	}
})

app.controller('main-ctrl', function($scope){
	$scope.message = "How?????";
});
app.controller('users-ctrl', function($scope){
	$scope.message = "Why?????";
});
