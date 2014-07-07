'use strict';

window.app.controller('OpeningList', ['$scope', '$location', 'Parse', function ($scope, $location, Parse) {

	function successHandler(response){
		$scope.jobs = response;
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

window.app.controller('OpeningCtrl', ['$scope', '$route', '$filter','Parse', function ($scope, $route, $filter, Parse) {

	function successJob(response){
		$scope.job = response[$route.current.params.id];
		Parse.get().then(successApp, errorHandler);
		$scope.$apply();
	}
	function successApp(response){
		$scope.apps = response;
		console.log($scope.apps);
		$scope.applications = $filter('filter')($scope.apps, $scope.job.attributes['job']);
		$scope.$apply();
	}
	function errorHandler(error){
		alert(error);
	}

	Parse.getJob().then(successJob, errorHandler);

}]);

window.app.controller('AddJobCtrl', ['$scope', 'Parse', function ($scope, Parse) {
	$scope.data = {};
	$scope.submit = function(data){
		Parse.postJob(data);
		data = {};
	}
}]);
