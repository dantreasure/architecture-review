app.factory('particulates', function($http) {
	var api = {};
	api.get = function() {
		return $http.get('http://apis.is/particulates');
	}
	return api;
})