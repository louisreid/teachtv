'use strict';

angular.module('teachtvApp')
  .controller('VideoCtrl', function ($scope, VideoService) {
  	$scope.createVideo = function (){
  		console.log($scope.newVideo);
	  	VideoService.save($scope.newVideo,function(video){
	  		console.log(video)
	  	})
  	}
  });
