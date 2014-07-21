window.app.controller('galleryCtrl', ['$scope', 'album', '$sce', function($scope, album, $sce){
  var albumCode = album.code;
  $scope.album = album;
  $scope.albumCodes = $sce.trustAsResourceUrl(albumCode);
  console.log(albumCode);
}]);
