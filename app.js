var app = angular.module('app', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'home.html',
			controller: 'users-ctrl'
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
	this.post = function(users) {
		return $http.post('http://localhost:3000/users', users)
		}
	}
})

//TODO: Inject the users service in to this controller and call the get
// method and place the response object on the scope
app.controller('users-ctrl', function($scope, users){
	users.get().then(function(response){
		$scope.users = response.data;
	})
});






