'use strict';

window.app.controller('aboutCtrl', ['$scope', 'officersSrvc', 'getName', function($scope, officersSrvc, getName){

    $scope.officers = officersSrvc();

    $scope.name = function (link) {
    	return getName(link);
    }; 
}]);