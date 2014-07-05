'use strict';

window.app.controller('ApplicationsCtrl', ['$scope', '$location', 'Parse', function ($scope, $location, Parse) {
	function successHandler(response){
		console.log(response);
	    $scope.applications = response;
	    $scope.$apply();
	}
	function errorHandler(error){
	    console.log(error);
	}

	Parse.get().then(successHandler, errorHandler);

	$scope.view = function (index) {
		$location.path('/app/' + index);
	}
}]);

window.app.controller('ApplicationCtrl', ['$scope', '$route', 'Parse','$sce', function ($scope, $route, Parse, $sce) {
	function successHandler(response){
		console.log(response);
	    $scope.app = response[$route.current.params.id];
	    $scope.$apply();
	}
	function errorHandler(error){
	    console.log(error);
	}

	Parse.get().then(successHandler, errorHandler);

	$scope.trustedSrc = function(src){
    return $sce.trustAsResourceUrl("http://docs.google.com/gview?url=" + src + '&embedded=true&output=embed');
  }

}]);
