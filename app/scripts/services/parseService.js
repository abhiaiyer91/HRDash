'use strict';
window.app.factory('Parse', ['parseConstant', function(parseConstant) {
  return {
    get: function(){
      var resumeObj = Parse.Object.extend("Resume");
      var query = new Parse.Query(resumeObj);
      return query.find();
    },
    getById: function (id) {
      var resumeObj = Parse.Object.extend("Resume");
      var query = new Parse.Query(resumeObj);
      return query.get(id);
    },
    opened: function(resume) {
      var resumeObj = Parse.Object.extend("Resume");
      var query = new Parse.Query(resumeObj);
      return query.get(resume.id);
    },
    getJob: function(){
      var jobPosting = Parse.Object.extend("Jobs");
      var query = new Parse.Query(jobPosting);
      return query.find();
    },
    getJobById: function(id){
      var jobPosting = Parse.Object.extend("Jobs");
      var query = new Parse.Query(jobPosting);
      return query.get(id);
    },
    postJob: function(data){
      var jobPosting = new Parse.Object("Jobs");
      return jobPosting.save(data);
    },
    getBlogs: function(){
      var blogPosting = Parse.Object.extend("Blogs");
      var query = new Parse.Query(blogPosting);
      return query.find();
    },
    getBlogById: function(id){
      var blogPosting = Parse.Object.extend("Blogs");
      var query = new Parse.Query(blogPosting);
      return query.get(id);
    },
    postBlog: function(data){
      var blogPosting = new Parse.Object("Blogs");
      return blogPosting.save(data);
    }
  };
}]);
