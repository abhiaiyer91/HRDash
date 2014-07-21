'use strict';

window.app.factory('Blogs', [function () {
	var blogs = [];
	for (var i = 1; i <= 10; i++) {
		for (var mon = 0; mon < 12; mon++) {
			var mon_tit = mon+1;
			var blog = {
				'content':'<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea tempora, aliquam laboriosam qui, minima tenetur aperiam laudantium non labore velit quis dolorum amet earum, ipsam asperiores quasi explicabo officiis debitis.</p>'
						 +'<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea tempora, aliquam laboriosam qui, minima tenetur aperiam laudantium non labore velit quis dolorum amet earum, ipsam asperiores quasi explicabo officiis debitis.</p>'
						 +'<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea tempora, aliquam laboriosam qui, minima tenetur aperiam laudantium non labore velit quis dolorum amet earum, ipsam asperiores quasi explicabo officiis debitis.</p>'
						 +'<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea tempora, aliquam laboriosam qui, minima tenetur aperiam laudantium non labore velit quis dolorum amet earum, ipsam asperiores quasi explicabo officiis debitis.</p>'
						 +'<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea tempora, aliquam laboriosam qui, minima tenetur aperiam laudantium non labore velit quis dolorum amet earum, ipsam asperiores quasi explicabo officiis debitis.</p>',
				'img':'http://placehold.it/960x540',
				'votes':0
			};
			blog['title'] = 'Test ' + mon_tit + ' ' + i;
			blog['date'] = new Date(2014,mon,i);
			blog['id'] = mon_tit + '_' + i;
			blogs.push(blog);
		}
	}
	var Blogs = {
		all: blogs,
		up: function (blog) { blog.votes++; },
		down: function (blog) { blog.votes--; }
	};
	return Blogs;
}]);

window.app.factory('getBlog', ['Blogs', function (Blogs) {
	return function (id) {
		var blogs = Blogs.all;
		var blog = {};
		blogs.forEach(function (obj) {
			if (obj.id === id) { blog = obj; }
		});
		return blog;
	};
}]);

window.app.controller('allBlogs', ['$scope', 'Blogs', function ($scope, Blogs) {
	$scope.blogs = Blogs.all;
}]);

window.app.controller('blogsCtrl', ['$scope','Blogs', '$filter', function ($scope, Blogs, $filter) {
	$scope.blogs = [];
	var allBlogs = $filter('orderBy')(Blogs.all, 'date', false);

	$scope.pagingFunction = function () {
		$scope.blogs.push(allBlogs.pop());
		$scope.blogs.push(allBlogs.pop());
	};
}]);

window.app.controller('blogCtrl', ['$scope', 'blog', 'Blogs', function ($scope, blog, Blogs) {
	$scope.blog = blog;
	var voted = false;
	
	$scope.voteUp = function () {
		if (!voted) { Blogs.up(blog); voted=true; }
	};
	$scope.voteDown = function () {
		if (!voted) { Blogs.down(blog); voted=true; }
	};
}]);