'use strict';

angular.module('teachtvApp').controller('VideoSingleCtrl', function ($scope, $stateParams, VideoService, LoadVideos, LoadStaticData) {
  VideoService.get({ id: $stateParams.id }, function (video) {

    var newVideo = {"_id":video._id, "youtube":video.data[0].items[0]};
    $scope.video = newVideo;

    // LoadStaticData(function(res) {
    //   $scope.videos = res.data;

    // LoadVideos([$scope.video.youtubeid], function (res) {
    //   $scope.video.youtubeObject = res.data.items[0];
    // }, true);

    var checkAPI = setInterval(function () {
      if (youTubeAPIReady === true) {
        clearInterval(checkAPI);
        $scope.video.player = new YT.Player('playerVideo', {
          height: '300',
          width: '480',
          videoId: $scope.video.youtube.id,
          events: {
            'onStateChange': function onStateChange(event) {
              var myTimer;
              if (event.data === 1) {
                // playing
                myTimer = setInterval(function () {
                  var currentTime = $scope.video.player.getCurrentTime();
                  $scope.video.currentTime = currentTime;
                  document.getElementById("player" + index + "Time").innerHTML = Math.round(currentTime) + 's';
                }, 1000);
              } else {
                // not playing
                clearInterval(myTimer);
              }
            }
          }
        });
      }
    }, 100);
  });

  // Load the youtube API

  var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  var youTubeAPIReady = false;
  window.onYouTubeIframeAPIReady = function () {
    youTubeAPIReady = true;
  };

  $scope.goBack = function () {
    window.history.back();
  };
});
//# sourceMappingURL=videoSingle.controller.js.map
//# sourceMappingURL=videoSingle.controller.js.map
