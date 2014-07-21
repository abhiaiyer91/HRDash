'use strict';

window.app.controller('bioCtrl', ['$scope', 'officer', 'getName', function ($scope, officer, getName) {
	$scope.officer = officer;
	$scope.officer.name = getName(officer.link);
}]);