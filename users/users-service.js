app.service('users', function($http) {
	this.get = function() {
		return $http.get("http://localhost:3000/users");
	}
	this.post = function(user) {
		return $http.post("http://localhost:3000/users", user);
	}
})