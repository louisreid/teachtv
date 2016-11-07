'use strict';

angular.module('teachtvApp')
  .controller('VideoSingleCtrl', function ($scope, $stateParams, VideoService) {
  	VideoService.get({id:$stateParams.id}, function(video){
  		$scope.video = video;
  	});
  });
