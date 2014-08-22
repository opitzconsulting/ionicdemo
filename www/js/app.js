// Ionic Starter App

(function (angular) {
    'use strict';

    var app = angular.module('starter', ['ionic', 'ngStorage', 'starter.controllers', 'starter.services']);

    app.run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    });

})(window.angular);

