angular.module('starter.controllers', [])

        .controller('DashCtrl', function($scope) {
        })

        .controller('FriendsCtrl', function($scope, Friends) {
          $scope.friends = Friends.all();
        })

        .controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
          $scope.friend = Friends.get($stateParams.friendId);
        })

        .controller('QrCodeScanCtrl', function($scope, $cordovaBarcodeScanner) {

          $scope.scannedBarcode = 'no barcode scanned yet.';

          $scope.scanQrCode = function() {
            $cordovaBarcodeScanner.scan().then(function(scannedQrCode) {
              $scope.scannedBarcode = scannedQrCode.text;
            });
          }
        });
