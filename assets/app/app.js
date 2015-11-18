'use strict';

angular.module('mbta', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states

  $stateProvider
    .state('home', {
        url: '/',
        templateUrl: 'views/home.html',
    });
});