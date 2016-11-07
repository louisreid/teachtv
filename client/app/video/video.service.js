'use script';

angular.module('teachtvApp')
  .factory('VideoService', ['$resource', function($resource) {
    return $resource('/api/videos/:id', {
      id: '@id'
    });
  }])

.service('LoadVideos', function($http, extractID) {
  return function(videoIds, callback, isID) {

    $http.get("https://www.googleapis.com/youtube/v3/videos", {
      params: {
        part: 'snippet,statistics',
        id: extractID(videoIds, isID),
        key: 'AIzaSyArvVCR-ijSJqvFtDE2Z7z5DGC1W9c_7U8'
      }
    }).then(callback);

  };

})

.service('extractID', function() {
  return function(videos, isID) {
    var videoIDList = "";
    angular.forEach(videos, function(video) {
      if (isID === false) {
        video = video.split('v=')[1];
        var ampersandPosition = video.indexOf('&');
        if (ampersandPosition !== -1) {
          video = video.substring(0, ampersandPosition);
        }
      }
      if (videos.length > 1) {
        videoIDList = videoIDList + video + ",";
      } else {
        videoIDList = video;
      }
    });
    return videoIDList;

  };
});
