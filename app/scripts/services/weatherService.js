"use strict";

window.app.service('weatherService', ['$q', '$http', function($q, $http){
    var authorizationResult = false;
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
        },
        fb: function() {
            var q = $q.defer();
            $http.get('https://graph.facebook.com/mahaska?fields=likes')
                .success(function (data) {
                    q.resolve(data);
                })
                .error(function (data) {
                    q.reject(data);
                });
            return q.promise

        },
        initialize: function() {

            //initialize OAuth.io with public key of the application

            OAuth.initialize('e6u0TKccWPGCnAqheXQYg76Vf2M', {cache:true});

            //try to create an authorization result when the page loads, this means a returning user won't have to click the twitter button again

            authorizationResult = OAuth.create('twitter');

            console.log(authorizationResult);
        },
        connectTwitter: function() {

            var deferred = $q.defer();

            OAuth.popup('twitter', {cache:true}, function(error, result) { //cache means to execute the callback if the tokens are already present

                if (!error) {

                    authorizationResult = result;

                    deferred.resolve();

                } else {

                    //do something if there's an erro
                }

            });

            return deferred.promise;

        }
    }
}]);

