window.app.controller('adminCtrl', function($scope, $sce, Parse){
  $scope.posts = [];

  $scope.post = {};

  $scope.submit = function(){
    Parse.post($scope.post);
  }
  
  $scope.renderHtml = function (html) {
      return $sce.trustAsHtml(html);
  };

});
