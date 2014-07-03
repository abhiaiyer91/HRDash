'use strict';

/**
 * @ngdoc function
 * @name hrdashApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hrdashApp
 */
window.app.controller('MainCtrl', function ($scope, Parse, $sce) {
  function successHandler(response){
    console.log('success');
    $scope.data = response;
    console.log($scope.data);
    $scope.$apply();
  }

  function errorHandler(error){
    console.log(error);
  }

  Parse.get().then(successHandler, errorHandler);


  $scope.trustedSrc = function(src){
    return $sce.trustAsResourceUrl("http://docs.google.com/gview?url=" + src + '&embedded=true&output=embed');
  }

});
