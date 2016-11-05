'use strict';

angular.module('teachtvApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('video', {
        url: '/',
        templateUrl: 'app/video/video.html',
        controller: 'VideoCtrl'
      });
  });
