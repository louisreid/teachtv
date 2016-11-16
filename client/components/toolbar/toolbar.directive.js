'use strict';

angular.module('teachtvApp')
  .directive('toolbar', () => ({
    templateUrl: 'components/toolbar/toolbar.html',
    restrict: 'E',
    replace: true,
    controller: 'ToolbarController',
    controllerAs: 'toolbar'
  }));
