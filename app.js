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
	return api;
})

app.controller('main-ctrl', function($scope, particulates){
	$scope.message = "How?????";
	particulates.get().then(function(response){
		$scope.particulates = response.data.results[0];
	})
});

//TODO: Inject the users service in to this controller and call the get
// method and place the response object on the scope
app.controller('users-ctrl', function($scope){
	$scope.message = "Why?????";
});






