'use strict';

window.app.controller('MainCtrl', ['$scope', 'Partners', 'ProductsTop', function ($scope, Partners, ProductsTop) {
    $scope.partners = Partners.partners;
    $scope.productsTop = ProductsTop.productsTop;
  }]);
