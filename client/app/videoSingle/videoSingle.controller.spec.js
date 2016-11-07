'use strict';

describe('Controller: VideoSingleCtrl', function () {

  // load the controller's module
  beforeEach(module('teachtvApp'));

  var VideoSingleCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VideoSingleCtrl = $controller('VideoSingleCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
