window.app.factory('emailService', ['parseEmailConstant', function(parseEmailConstant){

    return {
      sendEmail: function(data){
        var EmailObject = Parse.Object.extend("Email");
        var email = new EmailObject();
        return email.save(data);
      }
    }

}]);
