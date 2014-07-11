'use strict';
window.app.factory('Parse', function(parseConstant) {

  function successHandler(){
    alert('Success!');
  }

  function errorHandler(){
    alert('You fucked up!');
  }


  return {
    get: function(){
      var resumeObj = Parse.Object.extend("Resume");
      var query = new Parse.Query(resumeObj);
      return query.find();
    },
    getJob: function(){
      var jobPosting = Parse.Object.extend("Jobs");
      var query = new Parse.Query(jobPosting);
      return query.find();
    },
    postJob: function(data){
      var jobPosting = new Parse.Object("Jobs");
      jobPosting.save(data).then(successHandler, errorHandler);
    },
    delete: function(id){
      var jobPosting = Parse.Object.extend("Jobs");
      var query = new Parse.Query(jobPosting);
       console.log(query.get(id));
       return query.get(id);
    }
  };
});
