'use script';

angular.module('teachtvApp')
	.factory('VideoService', ['$resource', function($resource){
		return $resource('/api/videos/:id',{
			id: '@id'	
		});
	}])