'use strict';

window.app.controller('contactCtrl', ['$scope', 'emailService', function ($scope, emailService) {
	$scope.contact = {};

	function successHandler(){
		console.log('success');
		alert('Thank you, we will be in touch with you soon!');

	}

	function errorHandler(e){
		console.dir(e);
		alert('There was an error submitting your form.');
	}

	$scope.postEmail = function(data){
		emailService.sendEmail(data).then(successHandler, errorHandler);
		$scope.contact = {};
		window.scrollTo(0,0);
	}
}]);
