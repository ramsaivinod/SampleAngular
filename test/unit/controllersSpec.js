'use strict';

/* jasmine specs for controllers go here */


describe('MyCtrl1', function(){
  var myCtrl1,scope,controller;

  beforeEach(inject(function(_$controller_,_$rootScope_){
        scope = _$rootScope_.$new();
       controller = _$controller_('MyCtrl1', { $scope: scope });
  }));

  it('should Define controller:MyCtrl1', function() {
    expect(scope.viewNumber).toEqual('This is the partial for view 1');
  });
});


describe('MyCtrl2', function(){
  var myCtrl2,$scope,controller;


 beforeEach(inject(function(_$controller_,_$rootScope_){
        $scope = _$rootScope_.$new();
        controller = _$controller_('MyCtrl2', { $scope: $scope });
  }));


  it('should Define controller:MyCtrl2', function() {
    expect($scope.viewNumber).toEqual('This is the partial for view 2');
  });
});
