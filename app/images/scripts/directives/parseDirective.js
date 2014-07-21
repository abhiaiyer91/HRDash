window.app.directive('applicant', function (Parse){
  return {
      restrict: 'A',
      link: function (scope, element, attrs){
        Parse.upload();
      }
    }
});
