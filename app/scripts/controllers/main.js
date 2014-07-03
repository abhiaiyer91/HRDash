'use strict';

/**
 * @ngdoc function
 * @name hrdashApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hrdashApp
 */
angular.module('hrdashApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
