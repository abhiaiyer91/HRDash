window.app.controller('mediaCtrl', ['$scope', 'albumService', function($scope, albumService){

  $scope.album = albumService();
  console.log($scope.album);

}]);
