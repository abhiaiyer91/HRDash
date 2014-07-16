"use strict";

window.app.service('weatherService', ['$q', '$http', function($q, $http){
    return {
        get: function(city,state){
           var q = $q.defer();

           $http.jsonp("http://api.wunderground.com/api/1831e347efa686a0/conditions/q/" +state+"/"+city+".json?callback=JSON_CALLBACK")
               .success(function(data){
                   console.log('success');
                   q.resolve(data);
               })
               .error(function(data){
                   q.reject(data);
               });
            return q.promise;
        }
    }
}]);

