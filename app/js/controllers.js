'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
        controller('main', function($scope) {

        }).
        controller('home', function($scope) {
            $scope.pageClass = 'page-home';
            $('.homepara').delay(1000).animate({
                opacity: 1.0
            }, 3000);
        }).
        controller('tech', function($scope) {
            $scope.pageClass = 'page-tech';
            $('#html5').delay(1000).animate({
                opacity: 1.0,
                bottom: "300px"
            }, 4000);
            $('#nodejs').delay(1000).animate({
                opacity: 1.0,
                bottom: '-30%'
            }, 4000);
            $('#angularjs').delay(1000).animate({
                opacity: 1.0,
                top: '25%'
            }, 4000);
            $('#express').delay(1000).animate({
                opacity: 1.0,
                bottom: '30%'
            }, 4000);

            $('#mongodb').delay(1000).animate({
                opacity: 1.0,
                top: '33%'
            }, 4000);
            $('#java').delay(1000).animate({
                opacity: 1.0,
                top: '-2%'
            }, 4000);
            $('#mean').delay(2000).animate({
                opacity: 1.0
            }, 6000);
        }).
        controller('bio', function($scope) {
            $scope.pageClass = 'page-bio';
        }).
        controller('about', function($scope) {
            $scope.pageClass = 'page-about';
        }).
        controller('contact', function($scope) {
            $scope.pageClass = 'page-contact';
        });
