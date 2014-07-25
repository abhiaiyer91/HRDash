'use strict';

window.app.controller('BlogsCtrl', ['$scope', '$sce', '$filter', 'Parse', function ($scope, $sce, $filter, Parse) {
	function successHandler(response) {
		$scope.blogs = response;
		$scope.$apply;
	}
	function errorHandler (error) {
		alert(error);
	}
	Parse.getBlogs().then(successHandler, errorHandler);

	$scope.truncHtml = function (data) {
		var str = $filter('limitTo')(data, 200)+"..."; 
		return $sce.trustAsHtml(str);
	};
}]);

window.app.controller('AddBlogCtrl', ['$scope', 'Parse', function ($scope, Parse) {
	function successHandler(response) {
		alert("Your post has been saved");
		$scope.data = {};
	}
	function errorHandler (error) {
		alert(error);
	}

	$scope.data = {};

	$scope.post = function () {
		$scope.data.createdAt = new Date();
		$scope.data.updatedAt = new Date();
		$scope.data.tags = $scope.data.tags.split(',');
		Parse.postBlog($scope.data).then(successHandler, errorHandler);
	}
}]);