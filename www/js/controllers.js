(function (angular) {
    'use strict';

    var controllers = angular.module('starter.controllers', ['starter.services']);

    controllers.controller('DashCtrl', function ($scope, $ionicModal, Tasks) {

        $ionicModal.fromTemplateUrl('templates/new-task.html', function (modal) {
            $scope.taskModal = modal;
        }, {
            scope: $scope,
            animation: 'slide-in-up'
        });

        $scope.tasks = Tasks.all();

        $scope.showNewTask = function () {
            $scope.taskModal.show();
        };

        $scope.createNewTask = function(task) {
            $scope.taskModal.hide();
            Tasks.add({ title: task.title })
            task.title = "";
        };

        $scope.closeNewTask = function() {
            $scope.taskModal.hide();
        };

    });

    controllers.controller('ActionsCtrl', function ($scope, $location, Tasks) {

        $scope.clearStorage = function () {
            Tasks.clear();
            $location.path('/tab/dash');
        };

        $scope.createTasks = function () {
            for (var i = 1; i <= 100; i++) {
                Tasks.add({ title: 'Task ' + i});
            }
            $location.path('/tab/dash');
        };

    });

    controllers.controller('FriendsCtrl', function ($scope, Friends) {
        $scope.friends = Friends.all();
    });

    controllers.controller('FriendDetailCtrl', function ($scope, $stateParams, Friends) {
        $scope.friend = Friends.get($stateParams.friendId);
    });

})(window.angular);
