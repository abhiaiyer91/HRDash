'use strict';
window.app.factory('Parse', ['parseConstant', function(parseConstant) {
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
    getJobById: function(id){
      var jobPosting = Parse.Object.extend("Jobs");
      var query = new Parse.Query(jobPosting);
      console.log(query.get(id));
      return query.get(id);
    },
    postJob: function(data){
      var jobPosting = new Parse.Object("Jobs");
      return jobPosting.save(data);
    }
  };
}]);
