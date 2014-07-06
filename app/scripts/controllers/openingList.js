'use strict';

window.app.controller('OpeningList', ['$scope', '$location', 'Parse', function ($scope, $location, Parse) {

	function successHandler(response){
		$scope.jobs = response;
		console.log(response);
		$scope.$apply();
	}
	function errorHandler(error){
		alert(error);
	}
	Parse.getJob().then(successHandler, errorHandler);

	$scope.view = function (index) {
		$location.path('/job/' + index);
	}
}]);

window.app.controller('OpeningCtrl', ['$scope', '$route','Parse', function ($scope, $route, Parse) {

	function successHandler(response){
		$scope.job = response[$route.current.params.id];
		console.log($scope.job);
		$scope.$apply();
	}
	function errorHandler(error){
		alert(error);
	}

	Parse.getJob().then(successHandler, errorHandler);

	// $scope.applications = $filter('filter')(applications(),$scope.job.job);
}]);

window.app.controller('AddJobCtrl', ['$scope', 'openings', 'Parse', function ($scope, openings, Parse) {
	$scope.data = {};
	$scope.submit = function(data){
		Parse.postJob(data);
		data = '';
	}
}]);
