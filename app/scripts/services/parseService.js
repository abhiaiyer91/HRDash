window.app.factory('Parse', function() {
Parse.initialize("Jh6DNvCXuJwHltaSIovN1ZRd5119mLpckheZtTGA", "UK28hxofsydsjiMpF1ft9dKQjM27ZfJ2PHOoWrDl");



  return {
    get: function(){
      var resumeObj = Parse.Object.extend("Resume");
      var query = new Parse.Query(resumeObj);
      return query.find();
    }

  };

});
