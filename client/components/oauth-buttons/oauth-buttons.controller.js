'use strict';

angular.module('teachtvApp')
  .controller('OauthButtonsCtrl', function($window) {
    this.loginOauth = function(provider) {
      $window.location.href = '/auth/' + provider;
    };
  });
