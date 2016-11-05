'use strict';

angular.module('angularFullstackGruntTestApp.auth', [
  'angularFullstackGruntTestApp.constants',
  'angularFullstackGruntTestApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
