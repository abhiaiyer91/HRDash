window.app.factory('ParseLoginService', ['parseConstant', '$location', function(parseConstant, $location){
    return {
      login: function(data){
          var username = data.username;
          var password = data.password;
          return Parse.User.logIn(username, password);
      },
      getCurrentUser: function(){
          return Parse.User.current();
      },
      logout: function(){
          $location.path('/login');
          return Parse.User.logOut();
      }
    };
}]);