angular.module('starter.services', [])

        /**
         * A simple example service that returns some data.
         */
        .factory('Friends', function() {
          // Might use a resource here that returns a JSON array

          // Some fake testing data
          var friends = [
            {id: 0, name: 'Scruff McGruff'},
            {id: 1, name: 'G.I. Joe'},
            {id: 2, name: 'Miss Frizzle'},
            {id: 3, name: 'Ash Ketchum'}
          ];

          return {
            all: function() {
              return friends;
            },
            get: function(friendId) {
              // Simple index lookup
              return friends[friendId];
            }
          }
        })
        .factory('QrCodeScanner', function($q, $rootScope) {
          return {
            scanQrCode: function() {

              var deferred = $q.defer();

              barcodeScanner = cordova.require("cordova/plugin/BarcodeScanner");

              barcodeScanner.scan(
                      function(result) {
                        console.info("We got a barcode\n" +
                                "Result: " + result.text + "\n" +
                                "Format: " + result.format + "\n" +
                                "Cancelled: " + result.cancelled);

                        if (result.cancelled) {
                          deferred.reject();
                        }
                        deferred.resolve(result.text);
                        $rootScope.$apply();
                      },
                      function(error) {
                        console.info("error reject " + error);
                        deferred.reject(error);
                      }
              );

              return deferred.promise;
              ;
            }
          }
        });
