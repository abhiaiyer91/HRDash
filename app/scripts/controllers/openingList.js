'use strict';

window.app.factory('openings', [function () {
	var jobs = [];
	var openings = {
		all: jobs,
		create: function (job) {
			return jobs.push(job);
		},
		find: function (id) {
			return jobs.filter(function (obj) {
				return obj.job === id;
			});
		}
	};
	return openings;
}]);

window.app.controller('OpeningList', ['$scope', '$location', 'openings', function ($scope, $location, openings) {
	$scope.openings = openings.all;

	$scope.view = function (index) {
		$location.path('/job/' + index);
	};
}]);

window.app.controller('OpeningCtrl', ['$scope', '$route', '$filter', 'openings', 'applications', function ($scope, $route, $filter,openings, applications) {
	$scope.job = false;
	$scope.applications = false;
	var open = openings.find($route.current.params.id)[0];
	if (open) {
		$scope.job = open;
		$scope.applications = $filter('filter')(applications(),$scope.job.job);
	}
}]);

window.app.controller('AddJobCtrl', ['$scope', 'openings', function ($scope, openings) {
	$scope.data = {};
	$scope.add = function () {
		openings.create($scope.data);
		$scope.data = {};
	};	
}]);