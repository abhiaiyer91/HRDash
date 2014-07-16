'use strict';

window.app.controller('ApplicationsCtrl', ['$scope', '$location', 'Parse', '$rootScope', '$filter', function ($scope, $location, Parse, $rootScope, $filter) {
	function successHandler(response){
	    $scope.applications = response;
        $rootScope.appcount = response.length;
        $rootScope.unseen = $filter('filter')($scope.applications,'!seen').length;
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
	    $scope.app = response;
	    Parse.opened($scope.app).then(success, errorHandler);
	    $scope.$apply();
	}
	function success (object) {
		object.attributes.viewed = 'seen';
		object.save(object);
	}
	function errorHandler(error){
	    console.log(error);
	}

	Parse.getById($route.current.params.id).then(successHandler, errorHandler);

	$scope.trustedSrc = function(src){
    return $sce.trustAsResourceUrl("http://docs.google.com/gview?url=" + src + '&embedded=true&output=embed');
  }



}]);
