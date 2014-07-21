(function(window){
'use strict';

window.app = angular
  .module('mahaskaRebrandApp', [
    'ngRoute', 'duScroll', 'ui.bootstrap', 'angular-follow', 'infinite-scroll', 'ngSanitize'
  ]);
window.app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/products',{
        templateUrl: 'views/products.html',
        controller: 'productCtrl'
      })
      .when('/products/:type', {
        templateUrl: 'views/prodDetail.html',
        controller: 'productCtrl'
      })
      .when('/partners',{
        templateUrl: 'views/partners.html',
        controller: 'partnerCtrl'
      })
      .when('/services',{
        templateUrl: 'views/services.html',
        controller: 'serviceCtrl'
      })
      .when('/distribution',{
        templateUrl: 'views/distribution.html'
      })
      .when('/about',{
        templateUrl: 'views/about.html',
        controller: 'aboutCtrl'
      })
      .when('/blog',{
        templateUrl: 'views/blogs.html',
        controller: 'blogsCtrl'
      })
      .when('/blog/:id',{
        templateUrl: 'views/blog.html',
        controller: 'blogCtrl',
        resolve: {
          blog: function ($route, getBlog) {
            return getBlog($route.current.params.id);
          }
        }
      })
      .when('/about/:officer',{
        templateUrl: 'views/bio.html',
        controller: 'bioCtrl',
        resolve: {
          officer: function ($route, getOfficer) {
            return getOfficer($route.current.params.officer);
          }
        }
      })
      .when('/history',{
        templateUrl: 'views/history.html',
        controller: 'historyCtrl'
      })
      .when('/media',{
        templateUrl: 'views/media.html',
        controller: 'mediaCtrl'
      })
      .when('/media/:album',{
        templateUrl: 'views/gallery.html',
        controller: 'galleryCtrl',
        resolve: {
          album: function ($route, getAlbum) {
            return getAlbum($route.current.params.album);
          }
        }
      })
      .when('/careers',{
        templateUrl: 'views/careers.html',
        controller: 'careersCtrl'
      })
      .when('/contact',{
        templateUrl: 'views/contact.html',
        controller: 'contactCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
  window.app.run(['$rootScope', function($rootScope){
    $rootScope.$on('$routeChangeSuccess', function(current,next){
        window.scrollTo(0,0);

    });
  }]);


}(window));
