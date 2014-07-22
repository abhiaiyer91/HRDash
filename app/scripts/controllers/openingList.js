'use strict';

window.app.controller('OpeningList', ['$scope','$location', 'Parse', '$rootScope','$sce','$filter', function ($scope, $location, Parse, $rootScope, $sce, $filter) {

	function successHandler(response){
		$rootScope.jobs = response;
        $rootScope.jobcount = response.length;
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
	};

	$scope.truncHtml = function (data) {
		var str = $filter('limitTo')(data, 200)+"..."; 
		return $sce.trustAsHtml(str);
	};
}]);

window.app.controller('OpeningCtrl', ['$scope', '$route', '$filter','Parse', function ($scope, $route, $filter, Parse) {

	function successJob(response){
		$scope.job = response;
		Parse.get().then(successApp, errorHandler);
	}
	function successApp(response){
		$scope.apps = response;
		$scope.applications = $filter('filter')($scope.apps, $scope.job.id);
		$scope.$apply();
	}
	function errorHandler(error){
		alert(error);
	}

	Parse.getJobById($route.current.params.id).then(successJob, errorHandler);

}]);

window.app.controller('AddJobCtrl', ['$scope', 'Parse', '$window', function ($scope, Parse, $window) {

	function successHandler(){
        alert('Successfully Added Job Post');
        console.log('Success!!');
        console.log($scope.data.description);
    }

    function errorHandler(){
        console.log('Error');
    }
    $scope.data = {};
	$scope.submit = function(data){
		Parse.postJob(data).then(successHandler, errorHandler);
		$window.location.href = '/#/';
		data = {};

	}
    $scope.options = {
        height: 300,
        focus: true,
        toolbar: [
            ['style', ['bold', 'italic', 'underline', 'clear']],
            ['fontsize', ['fontsize']],
            ['color', ['color']],
            ['para', ['ul', 'ol', 'paragraph']],
            ['height', ['height']]
        ]
    }


}]);
