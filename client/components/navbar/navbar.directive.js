'use strict';

angular.module('teachtvApp')
  .directive('navbar', () => ({
    templateUrl: 'components/navbar/navbar.html',
    restrict: 'E',
    replace: true,
    controller: 'NavbarController',
    controllerAs: 'nav'
  }));
