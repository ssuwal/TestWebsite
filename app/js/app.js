'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'ngAnimate',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'home'});
  $routeProvider.when('/tech', {templateUrl: 'partials/tech.html', controller: 'tech'});
  $routeProvider.when('/bio', {templateUrl: 'partials/bio.html', controller: 'bio'});
  $routeProvider.when('/about', {templateUrl: 'partials/about.html', controller: 'about'});
  $routeProvider.when('/contact', {templateUrl: 'partials/contact.html', controller: 'contact'});
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
