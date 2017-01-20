'use strict';


// Declare app level module which depends on filters, and services
angular.module('sampleApp', ['sampleApp.controllers', 'sampleApp.filters', 'sampleApp.services', 'sampleApp.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {templateUrl: 'partials/partial.html', controller: 'MyCtrl1'});
    $routeProvider.when('/view2', {templateUrl: 'partials/partial.html', controller: 'MyCtrl2'});
    $routeProvider.otherwise({redirectTo: '/view1'});
  }]);
