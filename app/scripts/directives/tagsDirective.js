window.app.directive('tags', function(){


  return {
    link: function(scope,elm,attrs){
      elm.tagsInput();
    }

  }
});
