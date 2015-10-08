app.controller('home-ctrl', function($scope, particulates){
	$scope.message = "Show us you code!";
	particulates.get().then(function(response){
		$scope.particulates = response.data.results[0];
	})
});