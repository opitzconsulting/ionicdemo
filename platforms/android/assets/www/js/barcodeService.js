(function (angular) {
    /*
     * barcodeService
     */

    function barcodeServiceFactory($window, $q, $rootScope, localStorageService) {

        function scanBarcode() {
            var deferred = $q.defer();

            if (angular.isUndefined(barcodeScanner)) {
                //console.info("only for android");
                barcodeScanner = cordova.require("cordova/plugin/BarcodeScanner");
            }

            barcodeScanner.scan(
                function (result) {
                    /*      console.info("We got a barcode\n" +
                     "Result: " + result.text + "\n" +
                     "Format: " + result.format + "\n" +
                     "Cancelled: " + result.cancelled);
                     */
                    if (result.cancelled) {
                        deferred.reject();
                    }
                    deferred.resolve(result.text);
                    $rootScope.$apply();
                },
                function (error) {
                    deferred.reject(error);
                }
            );
            return deferred.promise;
        }

        function barcodeContainsReceipientAddreess(barcode) {
            var barcode_rules = localStorageService.loadBarCodeRules();

            var rule, i;
            for (i = 0; i < barcode_rules.length; i++) {
                rule = barcode_rules[i];
                if (!angular.isUndefined(rule.includes_recipient_address) && angular.isUndefined(rule.pattern)) {
                    return false;
                }
                var regExp = new RegExp(rule.pattern);
                if (barcode.match(regExp) !== null) {
                    return rule.includes_recipient_address;
                }
            }
            return false;
        }

        return {
            scanBarcode: scanBarcode,
            barcodeContainsReceipientAddreess: barcodeContainsReceipientAddreess
        };
    }

    barcodeServiceFactory.$inject = ['$window', '$q', '$rootScope', 'localStorageService'];

    /*
     * define angular module
     */
    var module = angular.module("tnt-services");

    module.factory("barcodeService", barcodeServiceFactory);


})(angular);