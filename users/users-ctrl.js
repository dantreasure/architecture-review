app.controller('users-ctrl', function($scope, users){
	$scope.message = "Create New User";
	users.get().then(function(response){
		$scope.users = response.data;
	})

	$scope.user = {};

	$scope.cancel = function(){
		$scope.user = {};
	}

	$scope.submit = function(){
		users.post($scope.user).then(function(){
			$scope.cancel();
		})
	}
});