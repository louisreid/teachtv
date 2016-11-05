'use strict';

angular.module('teachtvApp.auth', [
  'teachtvApp.constants',
  'teachtvApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
