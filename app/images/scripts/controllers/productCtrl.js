window.app.controller('productCtrl', function($scope, $route, ProductsTop) {

  $scope.path = $route.current.params['type'];
  $scope.productsTop = ProductsTop.productsTop;
  $scope.beverages = ProductsTop.beverages;
  $scope.snacks = ProductsTop.snacks;
  $scope.prodShow = true;
  $scope.active = null;
  $scope.show = function(bev){
    this.showSlide = true;
    this.prodShow = false;
  };
  $scope.unshow = function(bev){
    this.showSlide = false;
    this.prodShow = true;
  };
  $scope.narrow = function (obj) {
    $scope.bevFilter = obj;
    if (obj === null) {
      $scope.active = null;
      $scope.selected = null;
      $scope.equal = $scope.active === $scope.selected;
      console.log($scope.equal);
    }
    else{
      $scope.active = obj.category;
      $scope.selected = obj
      $scope.equal = $scope.active === $scope.selected.category;
      console.log($scope.equal);
      $scope.unequal = false;
    }
  };
  $scope.narrowS = function (obj) {
    $scope.snackFilter = obj;
    if (obj === null) {
      $scope.active = null;
      $scope.selected = null;
      $scope.equal = $scope.active === $scope.selected;
      console.log($scope.equal);
    }
    else {
      $scope.active = obj.category;
      $scope.selected = obj
      $scope.equal = $scope.active === $scope.selected.category;
      console.log($scope.equal);
      $scope.unequal = false;
    }
  }
});
