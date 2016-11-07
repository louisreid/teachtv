'use strict';

angular.module('teachtvApp')
  .controller('VideoCtrl', function($scope, $state, VideoService, LoadVideos, socket) {

    VideoService.query(function(videos) {
      $scope.videos = videos;
      socket.syncUpdates('video', $scope.videos);

      var videoIds = [];
      angular.forEach($scope.videos, function(video) {
        videoIds.push(video.youtubeid);
      });

      LoadVideos(videoIds, function(res) {
        console.log(res)
        angular.forEach(res.data.items, function(video, key) {
          $scope.videos[key].youtubeObject = video;
        });
      }, true);


      // for (var i = 0; i < $scope.videos.length; i++) {
      //   LoadVideos($scope.videos[i].youtubeid, i, function(res) {
      //     console.log(i);
      //     console.log(res.data.items[0]);
      //     $scope.videos[i].statistics = res.data.items[0].statistics;
      //     $scope.videos[i].snippet = res.data.items[0].snippet;
      //   });
      // }
    });


    $scope.createVideo = function() {
      VideoService.save($scope.newVideo, function(video) {
        console.log(video);
      })
    }

    $scope.deleteVideo = function(video) {
      VideoService.delete({id: video._id}, function(video) {
        console.log("Video deleted");
      })
    }

    $scope.goToVideo = function(video) {
      $state.go('videoSingle', {
        id: video._id
      });
    }

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('video');
    });


  });
