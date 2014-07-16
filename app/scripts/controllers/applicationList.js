'use strict';

window.app.controller('ApplicationsCtrl', ['$scope', '$location', 'Parse', '$rootScope', function ($scope, $location, Parse, $rootScope) {
	function successHandler(response){
	    $scope.applications = response;
        $rootScope.appcount = response.length;
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
