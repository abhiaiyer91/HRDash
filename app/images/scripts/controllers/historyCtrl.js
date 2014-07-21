'use strict'

window.app.controller('historyCtrl', ['$scope', 'historyService', function ($scope, historyService) {

	$scope.events = historyService.events;

}]);
