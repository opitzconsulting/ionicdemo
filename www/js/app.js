// Ionic Starter App

(function (angular) {
    'use strict';

    var app = angular.module('starter', ['ionic', 'ngStorage', 'starter.controllers', 'starter.services']);

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
            .state('tab.actions', {
                url: '/actions',
                views: {
                    'tab-actions': {
                        templateUrl: 'templates/tab-actions.html',
                        controller: 'ActionsCtrl'
                    }
                }
            });

        // if none of the above states are matched, use this as the fallback
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


