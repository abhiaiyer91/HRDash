window.app.factory('Parse', function(parseConstant) {

var inputElement = document.getElementById("input");
var file;
var parseFile;
function successHandler() {
    alert('Resume Sent!');
}
function errorHandler() {
    alert('There was an error');
}
function handleFiles() {
    file = this.files[0];
    parseFile = new Parse.File(file.name, file);
}


  return {
    upload: function(){
      inputElement.addEventListener("change", handleFiles, false);
    },
    post: function(data){
      parseFile.save().then(function () {
          var resume = new Parse.Object('Resume');
          resume.set('attachment', parseFile);
          resume.save(data).then(successHandler, errorHandler);
        });
    },
    getJob: function(){
      var jobsObj = Parse.Object.extend("Jobs");
      var query = new Parse.Query(jobsObj);
      return query.find();
    }

  };





});
