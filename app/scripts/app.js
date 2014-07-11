(function(window){
'use strict';

  window.app = angular.module('hrdashApp', ['ngRoute']);

  window.app.filter('truncate', function(){
  return function (text, length, end) {
      if (isNaN(length))
          length = 10;

      if (end === undefined)
          end = "...";

      if (text.length <= length || text.length - end.length <= length) {
          return text;
      }
      else {
          return String(text).substring(0, length-end.length) + end;
      }

  };
});

  window.app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/applications', {
        templateUrl: 'views/application-list.html',
        controller: 'ApplicationCtrl'
      })
      .when('/jobs', {
        templateUrl: 'views/jobs-list-view.html',
        controller: 'OpeningCtrl'
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
      .when('/account', {
        templateUrl: 'views/account.html',
        controller: 'accountCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

}(window));
