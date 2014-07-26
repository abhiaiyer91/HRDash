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

	$scope.cities = [
        { "value": 1 , "text": "Amsterdam"   , "continent": "Europe"    },
        { "value": 4 , "text": "Washington"  , "continent": "America"   },
        { "value": 7 , "text": "Sydney"      , "continent": "Australia" },
        { "value": 10, "text": "Beijing"     , "continent": "Asia"      },
        { "value": 13, "text": "Cairo"       , "continent": "Africa"    }
      ];

      $scope.queryCities = function(query) {
        return $http.get('cities.json');
      };

      $scope.getTagClass = function(city) {
        switch (city.continent) {
          case 'Europe'   : return 'badge badge-info';
          case 'America'  : return 'label label-important';
          case 'Australia': return 'badge badge-success';
          case 'Africa'   : return 'label label-inverse';
          case 'Asia'     : return 'badge badge-warning';
        }
      };

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
