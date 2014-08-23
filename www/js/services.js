(function (angular) {
    'use strict';

    var services = angular.module('starter.services', []);

    services.factory('Tasks', function ($localStorage) {
        var emptyStorage = {tasks: [], initalized: false};
        var storage = $localStorage.$default(emptyStorage);

        function add(task) {
            storage.tasks.push(task);
        }

        function all() {
            return storage.tasks;
        }

        function clear() {
            storage.tasks.length = 0;
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
            clear: clear,
            init: init
        }

    });

    services.run(function (Tasks) {
        Tasks.init();
    });

})(window.angular);
