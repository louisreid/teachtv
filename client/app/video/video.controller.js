'use strict';

angular.module('teachtvApp')
  .controller('VideoCtrl', function($http, $scope, $state, VideoService, LoadVideos, LoadStaticData, socket) {

    $scope.reverse = false;
    $scope.propToSortOn = 'n';
    $scope.videos = [];
    $scope.test =[];
    var jsonToDownload = [];

    console.log($scope.propToSortOn)

    $scope.sort = function(keyname) {
      console.log(keyname);
      $scope.propToSolution = keyname;
      $scope.reverse = !$scope.reverse;
    }

    // Tools for adding new playlists

    // Tool for getting ID's out of a playlist
    // $http.get('/json/playlist-to-extract-ids.json')
    //   .then(function(res){
    //     angular.forEach(res.data.items, function(video,i){
    //       console.log(video.snippet.resourceId.videoId);
    //     })
    //   });

    // Tool for getting youtube out of ids   
    // $http.get('/json/ids-to-extract-videodata-from.json')
    //   .then(function(res) {
    //     angular.forEach(res.data, function(video, i) {
    //       // console.log(video);
    //       LoadVideos([video], function(res) {
    //         // console.log(res);
    //         // $scope.test.push(res);
    //         jsonToDownload.push(res);

    //       }, true)
    //     })
    //   });

    // Tool to activate download button
    // $scope.downloadJson = function() {
    //   var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(jsonToDownload));
    //   var dlAnchorElem = document.getElementById('downloadAnchorElem');
    //   dlAnchorElem.setAttribute("href", dataStr);
    //   dlAnchorElem.setAttribute("download", "jason.json");
    //   dlAnchorElem.click();
    // }

    VideoService.query(function(videoData) {
      // $scope.videoIds = videoIds;
      // socket.syncUpdates('video', $scope.videos);


      // LoadStaticData(function(res) {
      //   $scope.videos = res.data;

      // Since the data has been manually loaded into seed.js, it's now only one line
      angular.forEach(videoData, function(videoDataItem, i) {
        var newVideo = { "_id": videoDataItem._id, "youtube": videoDataItem.data[0].items[0], "category": videoDataItem.data[0].items[0].category, "n":i};
        $scope.videos.push(newVideo);
      })


      // $scope.videos = [];
      // var videoIds = [];
      // angular.forEach(videoData, function(video) {
      //   videoIds.push(video.youtubeid);
      // });

      // LoadVideos(videoIds, function(res) {
      //   console.log(res)
      //   angular.forEach(res.data.items, function(video, key) {
      //     $scope.videos[key].youtubeObject = video;
      //   });
      // }, true);

      // console.log(testArray);
      // angular.forEach(videoIds, function(video, i){
      //   LoadVideos([video], function(res){
      //     console.log(res);
      //     $scope.videos.push(res.data.items[0]);
      //   });
      // })

    });


    // $scope.createVideo = function() {
    //   VideoService.save($scope.newVideo, function(video) {
    //     console.log(video);
    //   })
    // }

    // $scope.deleteVideo = function(video) {
    //   VideoService.delete({ id: video._id }, function(video) {
    //     console.log("Video deleted");
    //   })
    // }

    $scope.goToVideo = function(video) {
      $state.go('videoSingle', {
        id: video._id
      });
    }

    // $scope.$on('$destroy', function() {
    //   socket.unsyncUpdates('video');
    // });


  });
