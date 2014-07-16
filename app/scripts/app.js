(function(window){
'use strict';

  window.app = angular.module('hrdashApp', ['ngRoute']);

  window.app.run(['$rootScope', '$location', function($rootScope, $location){
      //Enumerate routes that don't need authentication
      var routesThatDontRequireAuth = ['/login'];

      //check if current location matches route
      var routeClean = function (route) {
          return _.find(routesThatDontRequireAuth,
              function (noAuthRoute) {
                  return _.str.startsWith(route, noAuthRoute);
              });
      };

      $rootScope.$on('$routeChangeStart', function(event,next,current){
          // if route requires auth and user is not logged in
          if (!routeClean($location.url()) && !$rootScope.loggedIn()) {
              // redirect back to login
              $location.path('/login');
          }
      });
  }]);



  window.app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'weatherCtrl'
      })
      .when('/applications', {
        templateUrl: 'views/application-list.html',
        controller: 'ApplicationCtrl'
      })
      .when('/jobs', {
        templateUrl: 'views/jobs-list-view.html',
        controller: 'OpeningList'
      })
      .when('/new-job', {
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
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'loginCtrl'
      })
      .when('/job/:id/edit', {
         templateUrl: 'views/edit.html',
         controller: 'OpeningList'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);



}(window));
