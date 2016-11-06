var app = angular.module('wos', []);

app.controller('MainCtrl', ['$scope', function($scope, posts){
	$scope.test = 'Hello world!';
	$scope.posts = [
		'post 1',
		'post 2',
		'post 3',
		'post 4',
		'post 5',
	];
	$scope.addPost = function(){
	  $scope.posts.push({title: 'A new post!', upvotes: 0});
	};
}]);