'use strict';

window.app.factory('Months', ['Blogs', function (Blogs) {
	return function () {
		var months = [];
		for (var i = 0; i < 12; i++) { months.push([]); }
		var blogs = Blogs.all;
		blogs.forEach(function (blog) {
			months[blog.date.getMonth()].push(blog);
		});
		return months;
	};
}]);

window.app.factory('numToMon', [function () {
	var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
	return function (index) {
		return months[index];
	}
}])

window.app.controller('archiveCtrl', ['$scope', 'Months', 'numToMon', function ($scope, Months, numToMon) {
	$scope.months = Months();

	$scope.getText = function (index) {
		return numToMon(index);
	};
}]);