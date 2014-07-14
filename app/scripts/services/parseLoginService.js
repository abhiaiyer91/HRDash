window.app.factory('ParseLoginService', ['parseConstant', function(parseConstant){
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
          return Parse.User.logOut();
      }
    };
}]);