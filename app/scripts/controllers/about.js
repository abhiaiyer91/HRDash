'use strict';

/**
 * @ngdoc function
 * @name hrdashApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the hrdashApp
 */
angular.module('hrdashApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
