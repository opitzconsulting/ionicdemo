(function (angular) {
    'use strict';

    var controllers = angular.module('starter.controllers', ['starter.services']);

    controllers.controller('DashCtrl', function ($scope, $ionicModal, Tasks) {

        $scope.tasks = Tasks.all();

        $ionicModal.fromTemplateUrl('templates/new-task.html', function (modal) {
            $scope.taskModal = modal;
        }, {
            scope: $scope,
            animation: 'slide-in-up'
        });

        $scope.showNewTask = function () {
            $scope.taskModal.show();
        };

        $scope.createNewTask = function (task) {
            $scope.taskModal.hide();
            Tasks.add({ title: task.title });
            task.title = "";
        };

        $scope.closeNewTask = function () {
            $scope.taskModal.hide();
        };

    });

})(window.angular);
