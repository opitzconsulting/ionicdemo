// Ionic Starter App

(function (angular) {
    'use strict';

    var app = angular.module('starter', ['ionic', 'ngCordova', 'ngStorage', 'starter.controllers', 'starter.services']);

    app.config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('tab', {
                url: "/tab",
                abstract: true,
                templateUrl: "templates/tabs.html"
            })
            .state('tab.dash', {
                url: '/dash',
                views: {
                    'tab-dash': {
                        templateUrl: 'templates/tab-dash.html',
                        controller: 'DashCtrl'
                    }
                }
            })
            .state('tab.qrcodescan', {
                url: '/qrcodescan',
                views: {
                    'tab-qrcodescan': {
                        templateUrl: 'templates/tab-qrcodescan.html',
                        controller: 'QrCodeScanCtrl'
                    }
                }
            });
        $urlRouterProvider.otherwise('/tab/dash');
    });

    app.run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    });

})(window.angular);

