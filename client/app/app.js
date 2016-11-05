'use strict';

angular.module('angularFullstackGruntTestApp', [
  'angularFullstackGruntTestApp.auth',
  'angularFullstackGruntTestApp.admin',
  'angularFullstackGruntTestApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
