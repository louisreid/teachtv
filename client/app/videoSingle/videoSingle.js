'use strict';

angular.module('teachtvApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('videoSingle', {
        url: '/:id',
        templateUrl: 'app/videoSingle/videoSingle.html',
        controller: 'VideoSingleCtrl'
      });
  });
