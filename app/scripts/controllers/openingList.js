'use strict';

window.app.factory('openings', [function () {
	var jobs = [];
	var openings = {
		all: jobs,
		create: function (job) {
			return jobs.push(job);
		},
		find: function (id) {
			jobs.forEach(function (job) {
				console.log("service job" + job.job);
				console.log("service" + id);
				if (job.job === id) {return job;}
			});
		}
	};
	return openings;
}]);

window.app.controller('OpeningList', ['$scope', '$location', 'openings', function ($scope, $location, openings) {
	$scope.openings = openings.all;

	$scope.view = function (index) {
		$location.path('/job/' + index);
	}
}]);

window.app.controller('OpeningCtrl', ['$scope', '$route', '$filter', 'openings', 'applications', function ($scope, $route, $filter,openings, applications) {
	$scope.job = openings.find($route.current.params.id);
	console.log($scope.job);
	$scope.applications = $filter('filter')(applications(),$scope.job.job);
}]);

window.app.controller('AddJobCtrl', ['$scope', 'openings', function ($scope, openings) {
	$scope.data = {};
	$scope.add = function () {
		openings.create($scope.data);
		$scope.data = {};
	};	
}]);