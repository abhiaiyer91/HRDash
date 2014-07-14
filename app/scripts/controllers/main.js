'use strict';

/**
 * @ngdoc function
 * @name hrdashApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hrdashApp
 */
window.app.controller('MainCtrl', function ($scope, ParseLoginService, $rootScope, $location) {

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
      return ParseLoginService.logout();
  };

});
