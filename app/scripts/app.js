(function(window){
'use strict';

  window.app = angular.module('hrdashApp', ['ngRoute', 'summernote']);

    app.config(function ($httpProvider) {
        var logsOutUserOn401 = ['$q', '$location', function ($q, $location) {
            var success = function (response) {
                return response;
            };

            var error = function (response) {
                if (response.status === 401) {
                    //redirect them back to login page
                    $location.path('/login');

                    return $q.reject(response);
                } else {
                    return $q.reject(response);
                }
            };

            return function (promise) {
                return promise.then(success, error);
            };
        }];

        $httpProvider.responseInterceptors.push(logsOutUserOn401);
    });

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

   window.app.run(function ($rootScope, $location, ParseLoginService, RoleService) {

        // enumerate routes that don't need authentication
        var routesThatDontRequireAuth = ['/login'];
        var routesForAdmin = ['/jobs'];

        // check if current location matches route
        var routeClean = function (route) {
            return _.find(routesThatDontRequireAuth,
                function (noAuthRoute) {
                    return _.str.startsWith(route, noAuthRoute);
                });
        };

        // check if current location matches route
        var routeAdmin = function (route) {
            return _.find(routesForAdmin,
                function (noAuthRoute) {
                    return _.str.startsWith(route, noAuthRoute);
                });
        };

        $rootScope.$on('$routeChangeStart', function (ev, to, toParams, from, fromParams) {
            // if route requires auth and user is not logged in
            if (!routeClean($location.url()) && !$rootScope.loggedIn()) {
                // redirect back to login
                ev.preventDefault();
                $location.path('/login');
            }
            else if (routeAdmin($location.url()) && !RoleService.validateRoleAdmin($rootScope.currentUser.attributes)) {
                // redirect back to login
                ev.preventDefault();
                $location.path('/error');
            }
        });
    });



}(window));
