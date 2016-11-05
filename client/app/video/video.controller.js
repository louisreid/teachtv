'use strict';

angular.module('angularFullstackGruntTestApp')
  .controller('VideoCtrl', function ($scope) {
  	VideoService.save($scope.newVideo,function(video){
  		console.log(video)
  	})
  });
