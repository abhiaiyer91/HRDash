(function(window){
'use strict';

  window.app = angular.module('hrdashApp', ['ngRoute']);

  window.app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/jobs', {
        templateUrl: 'views/add-job.html',
        controller: 'AddJobCtrl'
      })
      .when('/job/:id', {
        templateUrl: 'views/job.html',
        controller: 'OpeningCtrl'
      })
      .when('/app/:id', {
        templateUrl: 'views/app.html',
        controller: 'ApplicationCtrl'
      })
      .when('/about', {
        // Keep this and use for a FAQs and How To Guide
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

  window.app.config(function($httpProvider) {
   $httpProvider.defaults.useXDomain = true;
  });
  
}(window));
