'use strict';

window.app.factory('jobsCities', function (Parse) {
	
	return function (jobs) {
		var cities = ['ALL'];
		jobs.forEach(function (job) {
			if (cities.indexOf(job.attributes.loc) === -1) {
				cities.push(job.attributes.loc);
			}
		});
		return cities;
	}
});


window.app.controller('careersCtrl', ['$scope', 'jobsCities', 'Parse', function ($scope, jobsCities, Parse) {

	$scope.data = {};
	$scope.cities = {};
	$scope.selected = 0;

	$scope.validate = function(data){
		for ( var p in data ) {
			if ( data.hasOwnProperty( p ) ) {
				Parse(data);
				return false;
			} else {
				alert('Please Fill out the Job Form');
			}
		}
		return true;
	}

	$scope.post = function(data){
		data.votes=0;
		Parse.post(data);
		$scope.data = {};
	}

	$scope.narrow = function (city, id) {
		if(city==='ALL') { $scope.myFilter = null; }
		else { $scope.myFilter = {attributes: { loc: city}}; }
		$scope.selected = id;
	}

	Parse.upload();

	function successHandler(response){
	    $scope.trabajo = response;
	    $scope.cities = jobsCities(response);
	    $scope.$apply();
	}
	function errorHandler(error){
	    console.log(error);
	}

	Parse.getJob().then(successHandler, errorHandler);

}]);
