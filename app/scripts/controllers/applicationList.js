'use strict';

window.app.factory('applications', [function () {
	var applications = [
		{name:'Hahakd',job:'111',email:'ryan@anthro.is'},
		{name:'Jdhdk',job:'222',email:'ryan@anthro.is'},
		{name:'Kjjc',job:'333',email:'ryan@anthro.is'},
		{name:'Ykdklc',job:'444',email:'ryan@anthro.is'},
		{name:'Lkdkd',job:'555',email:'ryan@anthro.is'},
		{name:'Hdkdll',job:'666',email:'ryan@anthro.is'},
		{name:'Hahakd',job:'777',email:'ryan@anthro.is'},
		{name:'Jdhdk',job:'888',email:'ryan@anthro.is'},
		{name:'Kjjc',job:'999',email:'ryan@anthro.is'},
		{name:'Ykdklc',job:'111',email:'ryan@anthro.is'},
		{name:'Lkdkd',job:'222',email:'ryan@anthro.is'},
		{name:'Hdkdll',job:'333',email:'ryan@anthro.is'},
		{name:'Hahakd',job:'444',email:'ryan@anthro.is'},
		{name:'Jdhdk',job:'555',email:'ryan@anthro.is'},
		{name:'Kjjc',job:'666',email:'ryan@anthro.is'},
		{name:'Ykdklc',job:'777',email:'ryan@anthro.is'},
		{name:'Lkdkd',job:'888',email:'ryan@anthro.is'},
		{name:'Hdkdll',job:'999',email:'ryan@anthro.is'},
		{name:'Hahakd',job:'111',email:'ryan@anthro.is'},
		{name:'Jdhdk',job:'222',email:'ryan@anthro.is'},
		{name:'Kjjc',job:'333',email:'ryan@anthro.is'},
		{name:'Ykdklc',job:'444',email:'ryan@anthro.is'},
		{name:'Lkdkd',job:'555',email:'ryan@anthro.is'},
		{name:'Hdkdll',job:'666',email:'ryan@anthro.is'},
		{name:'Kyle',job:'777',email:'ryan@anthro.is'}
	];
	return function () {
		return applications;
	};
}]);

window.app.controller('ApplicationsCtrl', ['$scope', '$location', 'applications', function ($scope, $location, applications) {
	$scope.applications = applications();

	$scope.view = function (index) {
		$location.path('/app/' + index);
	};
}]);

window.app.controller('ApplicationCtrl', ['$scope', '$route', 'applications', function ($scope, $route, applications) {
	$scope.app = applications()[$route.current.params.id];
}]);