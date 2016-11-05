'use strict';

angular.module('angularFullstackGruntTestApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('video', {
        url: '/',
        templateUrl: 'app/video/video.html',
        controller: 'VideoCtrl'
      });
  });
