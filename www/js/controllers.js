angular.module('starter.controllers', [])

        .controller('DashCtrl', function($scope) {
        })

        .controller('FriendsCtrl', function($scope, Friends) {
          $scope.friends = Friends.all();
        })

        .controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
          $scope.friend = Friends.get($stateParams.friendId);
        })

        .controller('QrCodeScanCtrl', function($scope, QrCodeScanner) {

          $scope.scannedBarcode = 'no barcode scanned yet.';

          $scope.scanQrCode = function() {
            QrCodeScanner.scanQrCode().then(function(scannedQrCode) {
              //console.info(">>>>>> BSC in Controller Success-Callback scannedQrCode= " + scannedQrCode)
              $scope.scannedBarcode = scannedQrCode;
            }, function(errorMessage) {
              //console.info(">>>>>> BSC in Controller Error-Callback errorMessage= " + errorMessage)
            });
          }
        });
