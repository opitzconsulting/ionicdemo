(function (angular) {
    'use strict';

    var controllers = angular.module('starter.controllers', ['starter.services']);

    controllers.controller('DashCtrl', function ($scope, Tasks) {
        $scope.tasks = Tasks.all();
    });

    controllers.controller('FriendsCtrl', function ($scope, Friends) {
        $scope.friends = Friends.all();
    });

    controllers.controller('FriendDetailCtrl', function ($scope, $stateParams, Friends) {
        $scope.friend = Friends.get($stateParams.friendId);
    });

    controllers.controller('AccountCtrl', function ($scope) {
    });

})(window.angular);
