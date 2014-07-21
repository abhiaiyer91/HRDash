window.app.directive("scroll", ['$window', '$rootScope', '$route', function ($window, $rootScope, $route) {




  var linker = function(scope, element, attrs) {
      function scrollHandler() {
          var offset = element.offset();
          if(offset.top > 0){
            element.addClass('bg-red');
          } else {
            element.removeClass('bg-red');
          }
          scope.$apply();
      }

      $rootScope.$on('$routeChangeSuccess', function(event,current){
          if($route.current.controller === 'MainCtrl'){
            element.removeClass('bg-red');
            angular.element($window).bind("scroll", scrollHandler);
          } else {
            angular.element($window).unbind("scroll", scrollHandler);
            element.addClass('bg-red');
          }
      })


  };

  return{
    restrict : "C",
    link: linker
  }


}]);
