'use strict';

/**
 * @ngdoc function
 * @name hrdashApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hrdashApp
 */
window.app.controller('MainCtrl', ['$scope', 'ParseLoginService', '$rootScope', '$location', function ($scope, ParseLoginService, $rootScope, $location) {

  $rootScope.currentUser = ParseLoginService.getCurrentUser();

  $rootScope.loggedIn = function(){
    if ($rootScope.currentUser === null){
      return false;
    } else {
      return true;
    }
  };



  $scope.logout = function(){
    $rootScope.currentUser = null;
    return ParseLoginService.logout().then();
    $location.path("#/login");
  };

  $rootScope.global = {
     search: ''
  };

}]);
