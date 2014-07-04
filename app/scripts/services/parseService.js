window.app.factory('Parse', function(parseConstant) {
  return {
    get: function(){
      var resumeObj = Parse.Object.extend("Resume");
      var query = new Parse.Query(resumeObj);
      return query.find();
    }

  };

});
