'use strict';

window.app.controller('OpeningList', ['$scope', '$location', 'Parse', '$window', function ($scope, $location, Parse, $window) {

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
	function success(response){
		response.destroy({});
		alert('Successfully Deleted Job');
		$window.location.href =  '#/';

	}
	$scope.delete = function(id){
		Parse.delete(id).then(success,errorHandler);
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
		$scope.applications = $filter('filter')($scope.apps, $scope.job.attributes['job']);
		$scope.$apply();
	}
	function errorHandler(error){
		alert(error);
	}

	Parse.getJob().then(successJob, errorHandler);

}]);

window.app.controller('AddJobCtrl', ['$scope', 'Parse', '$window', function ($scope, Parse, $window) {
	$scope.data = {};
	$scope.submit = function(data){
		Parse.postJob(data);
		$window.location.href = '/';
		data = {};

	}
}]);
