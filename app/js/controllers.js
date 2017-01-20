'use strict';

/* Controllers */


function MyCtrl1($scope) {
	$scope.viewNumber = 'This is the partial for view 1';
}
MyCtrl1.$inject = ['$scope'];


function MyCtrl2($scope) {
	$scope.viewNumber = 'This is the partial for view 2';
}
MyCtrl2.$inject = ['$scope'];

angular.module('sampleApp.controllers', []).
	controller('MyCtrl1', MyCtrl1).
	
	controller('MyCtrl2', MyCtrl2);
