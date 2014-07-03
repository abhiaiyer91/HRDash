'use strict';

/**
 * @ngdoc overview
 * @name hrdashApp
 * @description
 * # hrdashApp
 *
 * Main module of the application.
 */
angular
  .module('hrdashApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
