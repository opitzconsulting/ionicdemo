(function (angular) {
    'use strict';

    var services = angular.module('starter.services', []);

    services.factory('Tasks', function ($localStorage) {
        var storage = $localStorage.$default({tasks: [], initalized: false});

        function add(task) {
            storage.tasks.push(task);
        }

        function all() {
            return storage.tasks;
        }

        function init() {
            if (!storage.initalized) {
                add({ title: 'Install ionic' });
                add({ title: 'Create Todo app' });
                add({ title: 'Make money!' });
                storage.initalized = true;
            }
        }

        return {
            add: add,
            all: all,
            init: init
        }

    });

    services.factory('Friends', function () {
        // Might use a resource here that returns a JSON array

        // Some fake testing data
        var friends = [
            { id: 0, name: 'Scruff McGruff' },
            { id: 1, name: 'G.I. Joe' },
            { id: 2, name: 'Miss Frizzle' },
            { id: 3, name: 'Ash Ketchum' }
        ];

        return {
            all: function () {
                return friends;
            },
            get: function (friendId) {
                // Simple index lookup
                return friends[friendId];
            }
        }
    });

    services.run(function (Tasks) {
        Tasks.init();
    });

})(window.angular);
