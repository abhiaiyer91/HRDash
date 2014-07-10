'use strict';

window.app.controller('loginCtrl', function($scope, $location, $rootScope, parseConstant){
  $scope.login = true;
  //We're going to redirect you to /login if youre not logged in muthafucka

  if ($rootScope.loggedIn() !== true){
    $location.path('/login');
  }

  function loginSuccessful(user){
    console.log('success');
    $rootScope.$apply(function(){
      $rootScope.currentUser = Parse.User.current();
      $location.path('/');
    });
  }

  function loginUnsuccessful(user,error){
    alert('Error' + error.message + "(" + error.code + ")");
    console.log('ERROR');
  }

  $scope.login = function(){
    var username = $scope.login.username;
    var password = $scope.login.password

    Parse.User.logIn(username, password).then(loginSuccessful, loginUnsuccessful);
  };

})
