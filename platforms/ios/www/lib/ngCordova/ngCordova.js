!function() {
  angular.module("ngCordova", ["ngCordova.plugins"]), angular.module("ngCordova.plugins.appAvailability", []).factory("$cordovaAppAvailability", ["$q", function(n) {
      return{check: function(e) {
          var r = n.defer();
          return appAvailability.check(e, function(n) {
            r.resolve(n)
          }, function(n) {
            r.reject(n)
          }), r.promise
        }}
    }]), angular.module("ngCordova.plugins.barcodeScanner", []).factory("$cordovaBarcodeScanner", ["$q", function(n) {
      return{scan: function() {
          var e = n.defer();
          return cordova.plugins.barcodeScanner.scan(function(n) {
            e.resolve(n)
          }, function(n) {
            e.reject(n)
          }), e.promise
        }, encode: function(e, r) {
          var o = n.defer();
          return cordova.plugins.barcodeScanner.encode(e, r, function(n) {
            o.resolve(n)
          }, function(n) {
            o.reject(n)
          }), o.promise
        }}
    }]), angular.module("ngCordova.plugins.bluetoothSerial", []).factory("$cordovaBluetoothSerial", ["$q", function(n) {
      var e = function() {
        var e = n.defer(), r = function(n) {
          e.resolve(n)
        }, o = function(n) {
          e.reject(n)
        }, t = arguments[0], i = Array.prototype.slice.call(arguments, 1, arguments.length);
        return i.push(r), i.push(o), cordova.plugins.bluetoothSerial[t].apply(this, i), e.promise
      };
      return{connect: e("connect", macAddress), connectInsecure: e("connectInsecure", macAddress), disconnect: e("disconnect"), list: e("list"), isEnabled: e("isEnabled"), isConnected: e("isConnected"), available: e("available"), read: e("read"), readUntil: e("readUntil", delimiter), write: e("write", data), subscribe: e("subscribe", delimiter), unsubscribe: e("unsubscribe"), clear: e("clear"), readRSSI: e("readRSSI")}
    }]), angular.module("ngCordova.plugins.camera", []).factory("$cordovaCamera", ["$q", function(n) {
      return{getPicture: function(e) {
          var r = n.defer();
          return navigator.camera ? (navigator.camera.getPicture(function(n) {
            r.resolve(n)
          }, function(n) {
            r.reject(n)
          }, e), r.promise) : (r.resolve(null), r.promise)
        }, cleanup: function() {
          var e = n.defer();
          return navigator.camera.cleanup(function() {
            e.resolve(arguments)
          }, function(n) {
            e.reject(n)
          }), e.promise
        }}
    }]), angular.module("ngCordova.plugins.capture", []).factory("$cordovaCapture", ["$q", function(n) {
      return{captureAudio: function(e) {
          var r = n.defer();
          return navigator.device.capture ? (navigator.device.capture.captureAudio(function(n) {
            r.resolve(n)
          }, function(n) {
            r.reject(n)
          }, e), r.promise) : (r.resolve(null), r.promise)
        }, captureImage: function(e) {
          var r = n.defer();
          return navigator.device.capture ? (navigator.device.capture.captureImage(function(n) {
            r.resolve(n)
          }, function(n) {
            r.reject(n)
          }, e), r.promise) : (r.resolve(null), r.promise)
        }, captureVideo: function(e) {
          var r = n.defer();
          return navigator.device.capture ? (navigator.device.capture.captureVideo(function(n) {
            r.resolve(n)
          }, function(n) {
            r.reject(n)
          }, e), r.promise) : (r.resolve(null), r.promise)
        }}
    }]), angular.module("ngCordova.plugins.contacts", []).factory("$cordovaContacts", ["$q", function(n) {
      return{save: function(e) {
          var r = n.defer(), o = navigator.contacts.create(e);
          return o.save(function(n) {
            r.resolve(n)
          }, function(n) {
            r.reject(n)
          }), r.promise
        }, remove: function(e) {
          var r = n.defer(), o = navigator.contacts.create(e);
          return o.remove(function(n) {
            r.resolve(n)
          }, function(n) {
            r.reject(n)
          }), r.promise
        }, clone: function(n) {
          var e = navigator.contacts.create(n);
          return e.clone(n)
        }, find: function(e) {
          var r = n.defer(), o = e.fields || ["id", "displayName"];
          return delete e.fields, navigator.contacts.find(o, function(n) {
            r.resolve(n)
          }, function(n) {
            r.reject(n)
          }, e), r.promise
        }}
    }]), angular.module("ngCordova.plugins.device", []).factory("$cordovaDevice", [function() {
      return{getDevice: function() {
          return device
        }, getCordova: function() {
          return device.cordova
        }, getModel: function() {
          return device.model
        }, getName: function() {
          return device.name
        }, getPlatform: function() {
          return device.platform
        }, getUUID: function() {
          return device.uuid
        }, getVersion: function() {
          return device.version
        }}
    }]), angular.module("ngCordova.plugins.deviceMotion", []).factory("$cordovaDeviceMotion", ["$q", function(n) {
      return{getCurrentAcceleration: function() {
          var e = n.defer();
          return navigator.accelerometer.getCurrentAcceleration(function(n) {
            e.resolve(n)
          }, function(n) {
            e.reject(n)
          }), e.promise
        }, watchAcceleration: function(e) {
          var r = n.defer(), o = navigator.accelerometer.watchAcceleration(function(n) {
            r.notify(n)
          }, function(n) {
            r.reject(n)
          }, e);
          return{watchId: o, promise: r.promise}
        }, clearWatch: function(n) {
          return navigator.accelerometer.clearWatch(n)
        }}
    }]), angular.module("ngCordova.plugins.deviceOrientation", []).factory("$cordovaDeviceOrientation", ["$q", function(n) {
      return{getCurrentHeading: function() {
          var e = n.defer();
          return navigator.compass.getCurrentHeading(function(n) {
            e.resolve(n)
          }, function(n) {
            e.reject(n)
          }), e.promise
        }, watchHeading: function(e) {
          var r = n.defer(), o = navigator.compass.watchHeading(function(n) {
            r.notify(n)
          }, function(n) {
            r.reject(n)
          }, e);
          return{watchId: o, promise: r.promise}
        }, clearWatch: function() {
          navigator.compass.clearWatch()
        }}
    }]), angular.module("ngCordova.plugins.dialogs", []).factory("$cordovaDialogs", [function() {
      return{alert: function() {
          return navigator.notification.alert.apply(navigator.notification, arguments)
        }, confirm: function() {
          return navigator.notification.confirm.apply(navigator.notification, arguments)
        }, prompt: function() {
          return navigator.notification.prompt.apply(navigator.notification, arguments)
        }, beep: function(n) {
          return navigator.notification.beep(n)
        }}
    }]), angular.module("ngCordova.plugins.file", []).factory("$cordovaFile", ["$q", function(n) {
      function e() {
        var e = n.defer();
        return window.requestFileSystem(LocalFileSystem.PERSISTENT, 1048576, function(n) {
          e.resolve(n)
        }, function(n) {
          e.reject(n)
        }), e.promise
      }
      return{checkDir: function(r) {
          var o = n.defer();
          return e().then(function(n) {
            n.root.getDirectory(r, {create: !1}, function() {
              o.resolve()
            }, function() {
              o.reject()
            })
          }), o.promise
        }, createDir: function(n, r) {
          e().then(function(e) {
            e.root.getDirectory(n, {create: !0, exclusive: r})
          })
        }, checkFile: function(r) {
          var o = n.defer();
          return 2 == arguments.length && (r = "/" + r + "/" + arguments[1]), e().then(function(n) {
            n.root.getFile(r, {create: !1}, function() {
              o.resolve()
            }, function() {
              o.reject()
            })
          }), o.promise
        }, createFile: function(n, r) {
          3 == arguments.length && (n = "/" + n + "/" + arguments[1], r = arguments[2]), e().then(function(e) {
            e.root.getFile(n, {create: !0, exclusive: r}, function() {
            }, function() {
            })
          })
        }, removeFile: function(r) {
          var o = n.defer();
          return 2 == arguments.length && (r = "/" + r + "/" + arguments[1]), e().then(function(n) {
            n.root.getFile(r, {create: !1}, function(n) {
              n.remove(function() {
                o.resolve()
              })
            })
          }), o.promise
        }, writeFile: function(r, o) {
          var t = n.defer();
          return e().then(function(n) {
            n.root.getFile(r, {create: !0}, function(n) {
              n.createWriter(function(n) {
                n.onwriteend = function(n) {
                  t.resolve(n)
                }, n.write(o)
              }, function(n) {
                t.reject(n)
              })
            })
          }), t.promise
        }, readFile: function(r) {
          var o = n.defer();
          return 2 == arguments.length && (r = "/" + r + "/" + arguments[1]), e().then(function(n) {
            n.root.getFile(r, {create: !1}, function(n) {
              n.file(function(n) {
                var e = new FileReader;
                e.onloadend = function() {
                  o.resolve(this.result)
                }, e.readAsText(n)
              })
            }, function(n) {
              o.reject(n)
            })
          }), o.promise
        }, readFileMetadata: function(r) {
          var o = n.defer();
          return e().then(function(n) {
            n.root.getFile(r, {create: !1}, function(n) {
              n.file(function(n) {
                o.resolve(n)
              })
            }, function(n) {
              o.reject(n)
            })
          }), o.promise
        }, downloadFile: function(e, r, o, t) {
          var i = n.defer(), a = new FileTransfer, u = encodeURI(e);
          return a.onprogress = function(n) {
            i.notify(n)
          }, a.download(u, r, function(n) {
            i.resolve(n)
          }, function(n) {
            i.reject(n)
          }, o, t), i.promise
        }, uploadFile: function(e, r, o) {
          var t = n.defer(), i = new FileTransfer, a = encodeURI(e);
          return i.onprogress = function(n) {
            t.notify(n)
          }, i.upload(r, a, function(n) {
            t.resolve(n)
          }, function(n) {
            t.reject(n)
          }, o), t.promise
        }}
    }]), angular.module("ngCordova.plugins.flashlight", []).factory("$cordovaFlashlight", ["$q", function(n) {
      return{available: function() {
          var e = n.defer();
          return window.plugins.flashlight.available(function(n) {
            e.resolve(n)
          }), e.promise
        }, switchOn: function() {
          var e = n.defer();
          return window.plugins.flashlight.switchOn(function(n) {
            e.resolve(n)
          }, function(n) {
            e.reject(n)
          }), e.promise
        }, switchOff: function() {
          var e = n.defer();
          return window.plugins.flashlight.switchOff(function(n) {
            e.resolve(n)
          }, function(n) {
            e.reject(n)
          }), e.promise
        }}
    }]), angular.module("ngCordova.plugins.ga", []).factory("$cordovaGA", ["$q", function(n) {
      return{init: function(e, r) {
          var o = n.defer();
          return r = r >= 0 ? r : 10, window.plugins.gaPlugin.init(function(n) {
            o.resolve(n)
          }, function(n) {
            o.reject(n)
          }, e, r), o.promise
        }, trackEvent: function(e, r, o, t, i, a) {
          var u = n.defer();
          return window.plugins.gaPlugin.trackEvent(function(n) {
            u.resolve(n)
          }, function(n) {
            u.reject(n)
          }, o, t, i, a), u.promise
        }, trackPage: function(e, r, o) {
          var t = n.defer();
          return window.plugins.gaPlugin.trackPage(function(n) {
            t.resolve(n)
          }, function(n) {
            t.reject(n)
          }, o), t.promise
        }, setVariable: function(e, r, o, t) {
          var i = n.defer();
          return window.plugins.gaPlugin.setVariable(function(n) {
            i.resolve(n)
          }, function(n) {
            i.reject(n)
          }, o, t), i.promise
        }, exit: function() {
          var e = n.defer();
          return window.plugins.gaPlugin.exit(function(n) {
            e.resolve(n)
          }, function(n) {
            e.reject(n)
          }), e.promise
        }}
    }]), angular.module("ngCordova.plugins.geolocation", []).factory("$cordovaGeolocation", ["$q", function(n) {
      return{getCurrentPosition: function(e) {
          var r = n.defer();
          return navigator.geolocation.getCurrentPosition(function(n) {
            r.resolve(n)
          }, function(n) {
            r.reject(n)
          }, e), r.promise
        }, watchPosition: function(e) {
          var r = n.defer(), o = navigator.geolocation.watchPosition(function(n) {
            r.notify(n)
          }, function(n) {
            r.reject(n)
          }, e);
          return{watchId: o, promise: r.promise}
        }, clearWatch: function(n) {
          return navigator.geolocation.clearWatch(n)
        }}
    }]), angular.module("ngCordova.plugins.globalization", []).factory("$cordovaGlobalization", ["$q", function(n) {
      return{getPreferredLanguage: function() {
          var e = n.defer();
          return navigator.globalization.getPreferredLanguage(function(n) {
            e.resolve(n)
          }, function(n) {
            e.reject(n)
          }), e.promise
        }, getLocaleName: function() {
          var e = n.defer();
          return navigator.globalization.getLocaleName(function(n) {
            e.resolve(n)
          }, function(n) {
            e.reject(n)
          }), e.promise
        }, getFirstDayOfWeek: function() {
          var e = n.defer();
          return navigator.globalization.getFirstDayOfWeek(function(n) {
            e.resolve(n)
          }, function(n) {
            e.reject(n)
          }), e.promise
        }, dateToString: function(e, r) {
          var o = n.defer();
          return navigator.globalization.dateToString(e, function(n) {
            o.resolve(n)
          }, function(n) {
            o.reject(n)
          }, r), o.promise
        }, stringToDate: function(e, r) {
          var o = n.defer();
          return navigator.globalization.stringToDate(e, function(n) {
            o.resolve(n)
          }, function(n) {
            o.reject(n)
          }, r), o.promise
        }, getDatePattern: function(e) {
          var r = n.defer();
          return navigator.globalization.getDatePattern(function(n) {
            r.resolve(n)
          }, function(n) {
            r.reject(n)
          }, e), r.promise
        }, getDateNames: function(e) {
          var r = n.defer();
          return navigator.globalization.getDateNames(function(n) {
            r.resolve(n)
          }, function(n) {
            r.reject(n)
          }, e), r.promise
        }, isDayLightSavingsTime: function(e) {
          var r = n.defer();
          return navigator.globalization.isDayLightSavingsTime(e, function(n) {
            r.resolve(n)
          }, function(n) {
            r.reject(n)
          }), r.promise
        }, numberToString: function(e, r) {
          var o = n.defer();
          return navigator.globalization.numberToString(e, function(n) {
            o.resolve(n)
          }, function(n) {
            o.reject(n)
          }, r), o.promise
        }, stringToNumber: function(e, r) {
          var o = n.defer();
          return navigator.globalization.stringToNumber(e, function(n) {
            o.resolve(n)
          }, function(n) {
            o.reject(n)
          }, r), o.promise
        }, getNumberPattern: function(e) {
          var r = n.defer();
          return navigator.globalization.getNumberPattern(function(n) {
            r.resolve(n)
          }, function(n) {
            r.reject(n)
          }, e), r.promise
        }, getCurrencyPattern: function(e) {
          var r = n.defer();
          return navigator.globalization.getCurrencyPattern(e, function(n) {
            r.resolve(n)
          }, function(n) {
            r.reject(n)
          }), r.promise
        }}
    }]), angular.module("ngCordova.plugins.keyboard", []).factory("$cordovaKeyboard", [function() {
      return{hideAccessoryBar: function(n) {
          return cordova.plugins.Keyboard.hideKeyboardAccessoryBar(n)
        }, close: function() {
          return cordova.plugins.Keyboard.close()
        }, disableScroll: function(n) {
          return cordova.plugins.Keyboard.disableScroll(n)
        }, isVisible: function() {
          return cordova.plugins.Keyboard.isVisible
        }}
    }]), angular.module("ngCordova.plugins.localNotification", []).factory("$cordovaLocalNotification", ["$q", function(n) {
      return{add: function(e, r) {
          var o = n.defer();
          return window.plugin.notification.local.add(e, function(n) {
            o.resolve(n)
          }, r), o.promise
        }, cancel: function(e, r) {
          var o = n.defer();
          return window.plugin.notification.local.cancel(e, function(n) {
            o.resolve(n)
          }, r), o.promise
        }, cancelAll: function(e) {
          var r = n.defer();
          return window.plugin.notification.local.cancelAll(function(n) {
            r.resolve(n)
          }, e), r.promise
        }, isScheduled: function(e, r) {
          var o = n.defer();
          return window.plugin.notification.local.isScheduled(e, function(n) {
            o.resolve(n)
          }, r), o.promise
        }, getScheduledIds: function(e) {
          var r = n.defer();
          return window.plugin.notification.local.getScheduledIds(function(n) {
            r.resolve(n)
          }, e), r.promise
        }, isTriggered: function(e, r) {
          var o = n.defer();
          return window.plugin.notification.local.isTriggered(e, function(n) {
            o.resolve(n)
          }, r), o.promise
        }, getTriggeredIds: function(e) {
          var r = n.defer();
          return window.plugin.notification.local.getTriggeredIds(function(n) {
            r.resolve(n)
          }, e), r.promise
        }, getDefaults: function() {
          return window.plugin.notification.local.getDefaults()
        }, setDefaults: function(n) {
          window.plugin.notification.local.setDefaults(n)
        }, onadd: function() {
          return window.plugin.notification.local.onadd
        }, ontrigger: function() {
          return window.plugin.notification.local.ontrigger
        }, onclick: function() {
          return window.plugin.notification.local.onclick
        }, oncancel: function() {
          return window.plugin.notification.local.oncancel
        }}
    }]), angular.module("ngCordova.plugins", ["ngCordova.plugins.deviceMotion", "ngCordova.plugins.camera", "ngCordova.plugins.geolocation", "ngCordova.plugins.deviceOrientation", "ngCordova.plugins.dialogs", "ngCordova.plugins.vibration", "ngCordova.plugins.network", "ngCordova.plugins.device", "ngCordova.plugins.barcodeScanner", "ngCordova.plugins.splashscreen", "ngCordova.plugins.keyboard", "ngCordova.plugins.contacts", "ngCordova.plugins.statusbar", "ngCordova.plugins.file", "ngCordova.plugins.socialSharing", "ngCordova.plugins.globalization", "ngCordova.plugins.sqlite", "ngCordova.plugins.ga", "ngCordova.plugins.push", "ngCordova.plugins.spinnerDialog", "ngCordova.plugins.sms", "ngCordova.plugins.pinDialog", "ngCordova.plugins.localNotification", "ngCordova.plugins.toast", "ngCordova.plugins.flashlight", "ngCordova.plugins.capture", "ngCordova.plugins.appAvailability", "ngCordova.plugins.prefs", "ngCordova.plugins.printer", "ngCordova.plugins.bluetoothSerial"]), angular.module("ngCordova.plugins.network", []).factory("$cordovaNetwork", [function() {
      return{getNetwork: function() {
          return navigator.connection.type
        }, isOnline: function() {
          var n = navigator.connection.type;
          return n !== Connection.UNKNOWN && n !== Connection.NONE
        }, isOffline: function() {
          var n = navigator.connection.type;
          return n === Connection.UNKNOWN || n === Connection.NONE
        }}
    }]), angular.module("ngCordova.plugins.pinDialog", []).factory("$cordovaPinDialog", [function() {
      return{prompt: function() {
          return window.plugins.pinDialog.prompt.apply(navigator.notification, arguments)
        }}
    }]), angular.module("ngCordova.plugins.prefs", []).factory("$cordovaPreferences", ["$window", "$q", function(n, e) {
      return{set: function(r, o) {
          var t = e.defer();
          return n.applicationPreferences.set(r, o, function(n) {
            t.resolve(n)
          }, function(n) {
            t.reject(n)
          }), t.promise
        }, get: function(r) {
          var o = e.defer();
          return n.applicationPreferences.get(r, function(n) {
            o.resolve(n)
          }, function(n) {
            o.reject(n)
          }), o.promise
        }}
    }]), angular.module("ngCordova.plugins.printer", []).factory("$cordovaPrinter", ["$q", function() {
      return{isAvailable: function() {
          window.plugin.printer.isServiceAvailable(function(n) {
            return n ? !0 : !1
          })
        }, print: function(n) {
          window.plugin.printer.print(n)
        }}
    }]), angular.module("ngCordova.plugins.push", []).factory("$cordovaPush", ["$q", function(n) {
      return{register: function(e) {
          var r = n.defer();
          return window.plugins.pushNotification.register(function(n) {
            r.resolve(n)
          }, function(n) {
            r.reject(n)
          }, e), r.promise
        }, unregister: function(e) {
          var r = n.defer();
          return window.plugins.pushNotification.unregister(function(n) {
            r.resolve(n)
          }, function(n) {
            r.reject(n)
          }, e), r.promise
        }, setBadgeNumber: function(e) {
          var r = n.defer();
          return window.plugins.pushNotification.setApplicationIconBadgeNumber(function(n) {
            r.resolve(n)
          }, function(n) {
            r.reject(n)
          }, e), r.promise
        }}
    }]), angular.module("ngCordova.plugins.sms", []).factory("$cordovaSms", ["$q", function(n) {
      return{send: function(e, r, o) {
          var t = n.defer();
          return sms.send(e, r, o, function(n) {
            t.resolve(n)
          }, function(n) {
            t.reject(n)
          }), t.promise
        }}
    }]), angular.module("ngCordova.plugins.socialSharing", []).factory("$cordovaSocialSharing", ["$q", function(n) {
      return{share: function(e, r, o, t) {
          var i = n.defer();
          return window.plugins.socialsharing.share(e, r, o, t, function() {
            i.resolve(!0)
          }, function() {
            i.reject(!1)
          }), i.promise
        }, shareViaTwitter: function(e, r, o) {
          var t = n.defer();
          return window.plugins.socialsharing.shareViaTwitter(e, r, o, function() {
            t.resolve(!0)
          }, function() {
            t.reject(!1)
          }), t.promise
        }, shareViaWhatsApp: function(e, r, o) {
          var t = n.defer();
          return window.plugins.socialsharing.shareViaWhatsApp(e, r, o, function() {
            t.resolve(!0)
          }, function() {
            t.reject(!1)
          }), t.promise
        }, shareViaFacebook: function(e, r, o) {
          var t = n.defer();
          return window.plugins.socialsharing.shareViaFacebook(e, r, o, function() {
            t.resolve(!0)
          }, function() {
            t.reject(!1)
          }), t.promise
        }, shareViaSMS: function(e, r) {
          var o = n.defer();
          return window.plugins.socialsharing.shareViaSMS(e, r, function() {
            o.resolve(!0)
          }, function() {
            o.reject(!1)
          }), o.promise
        }, shareViaEmail: function(e, r, o, t, i, a) {
          var u = n.defer();
          return window.plugins.socialsharing.shareViaEmail(e, r, o, t, i, a, function() {
            u.resolve(!0)
          }, function() {
            u.reject(!1)
          }), u.promise
        }, canShareViaEmail: function() {
          var e = n.defer();
          return window.plugins.socialsharing.canShareViaEmail(function() {
            e.resolve(!0)
          }, function() {
            e.reject(!1)
          }), e.promise
        }, canShareVia: function(e, r, o, t, i) {
          var a = n.defer();
          return window.plugins.socialsharing.canShareVia(e, r, o, t, i, function(n) {
            a.resolve(n)
          }, function(n) {
            a.reject(n)
          }), a.promise
        }, shareVia: function(e, r, o, t, i) {
          var a = n.defer();
          return window.plugins.socialsharing.shareVia(e, r, o, t, i, function() {
            a.resolve(!0)
          }, function() {
            a.reject(!1)
          }), a.promise
        }}
    }]), angular.module("ngCordova.plugins.spinnerDialog", []).factory("$cordovaSpinnerDialog", [function() {
      return{show: function(n, e) {
          return window.plugins.spinnerDialog.show(n, e)
        }, hide: function() {
          return window.plugins.spinnerDialog.hide()
        }}
    }]), angular.module("ngCordova.plugins.splashscreen", []).factory("$cordovaSplashscreen", [function() {
      return{hide: function() {
          return navigator.splashscreen.hide()
        }, show: function() {
          return navigator.splashscreen.show()
        }}
    }]), angular.module("ngCordova.plugins.sqlite", []).factory("$cordovaSQLite", ["$q", function(n) {
      return{openDB: function(n) {
          return window.sqlitePlugin.openDatabase({name: n})
        }, openDBBackground: function(n) {
          return window.sqlitePlugin.openDatabase({name: n, bgType: 1})
        }, execute: function(e, r, o) {
          return q = n.defer(), e.transaction(function(n) {
            n.executeSql(r, o, function(n, e) {
              q.resolve(e)
            }, function(n, e) {
              q.reject(e)
            })
          }), q.promise
        }, nestedExecute: function(e, r, o, t, i) {
          return q = n.defer(), e.transaction(function(n) {
            n.executeSql(r, t, function(n, e) {
              q.resolve(e), n.executeSql(o, i, function(n, e) {
                q.resolve(e)
              })
            })
          }, function(n, e) {
            q.reject(e)
          }), q.promise
        }}
    }]), angular.module("ngCordova.plugins.statusbar", []).factory("$cordovaStatusbar", [function() {
      return{overlaysWebView: function() {
          return StatusBar.overlaysWebView(!0)
        }, style: function(n) {
          switch (n) {
            case 0:
              return StatusBar.styleDefault();
            case 1:
              return StatusBar.styleLightContent();
            case 2:
              return StatusBar.styleBlackTranslucent();
            case 3:
              return StatusBar.styleBlackOpaque();
            default:
              return StatusBar.styleDefault()
            }
        }, styleColor: function(n) {
          return StatusBar.backgroundColorByName(n)
        }, styleHex: function(n) {
          return StatusBar.backgroundColorByHexString(n)
        }, hide: function() {
          return StatusBar.hide()
        }, show: function() {
          return StatusBar.show()
        }, isVisible: function() {
          return StatusBar.isVisible()
        }}
    }]), angular.module("ngCordova.plugins.toast", []).factory("$cordovaToast", ["$q", function(n) {
      return{showShortTop: function(e) {
          var r = n.defer();
          return window.plugins.toast.showShortTop(e, function(n) {
            r.resolve(n)
          }, function(n) {
            r.reject(n)
          }), r.promise
        }, showShortCenter: function(e) {
          var r = n.defer();
          return window.plugins.toast.showShortCenter(e, function(n) {
            r.resolve(n)
          }, function(n) {
            r.reject(n)
          }), r.promise
        }, showShortBottom: function(e) {
          var r = n.defer();
          return window.plugins.toast.showShortBottom(e, function(n) {
            r.resolve(n)
          }, function(n) {
            r.reject(n)
          }), r.promise
        }, showLongTop: function(e) {
          var r = n.defer();
          return window.plugins.toast.showLongTop(e, function(n) {
            r.resolve(n)
          }, function(n) {
            r.reject(n)
          }), r.promise
        }, showLongCenter: function(e) {
          var r = n.defer();
          return window.plugins.toast.showLongCenter(e, function(n) {
            r.resolve(n)
          }, function(n) {
            r.reject(n)
          }), r.promise
        }, showLongBottom: function(e) {
          var r = n.defer();
          return window.plugins.toast.showLongBottom(e, function(n) {
            r.resolve(n)
          }, function(n) {
            r.reject(n)
          }), r.promise
        }, show: function(e, r, o) {
          var t = n.defer();
          return window.plugins.toast.show(e, r, o, function(n) {
            t.resolve(n)
          }, function(n) {
            t.reject(n)
          }), t.promise
        }}
    }]), angular.module("ngCordova.plugins.vibration", []).factory("$cordovaVibration", [function() {
      return{vibrate: function(n) {
          return navigator.notification.vibrate(n)
        }, vibrateWithPattern: function(n, e) {
          return navigator.notification.vibrateWithPattern(n, e)
        }, cancelVibration: function() {
          return navigator.notification.cancelVibration()
        }}
    }])
}();