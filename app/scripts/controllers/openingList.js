'use strict';

window.app.controller('OpeningList', ['$scope','$location', 'Parse', '$window', function ($scope, $location, Parse, $window) {

	function successHandler(response){
		$scope.jobs = response;
		$scope.$apply();
	}
	function errorHandler(error){
		alert(error);
	}
	Parse.getJob().then(successHandler, errorHandler);

    $scope.viewSingle = function(id){
        $location.path('/job/' + id + '/edit');
    };

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
		$scope.applications = $filter('filter')($scope.apps, $scope.job.attributes['job']);
		$scope.$apply();
	}
	function errorHandler(error){
		alert(error);
	}

	Parse.getJob().then(successJob, errorHandler);

}]);

window.app.controller('AddJobCtrl', ['$scope', 'Parse', '$window', function ($scope, Parse, $window) {
	function successHandler(){
        alert('Successfully Added Job Post');
        console.log('Success!!');
    }

    function errorHandler(){
        console.log('Error');
    }
    $scope.data = {};
	$scope.submit = function(data){
		Parse.postJob(data).then(successHandler, errorHandler);
		$window.location.href = '/HRDash/#/';
		data = {};

	}
}]);
