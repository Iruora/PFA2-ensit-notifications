cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-device.device",
    "file": "plugins/cordova-plugin-device/www/device.js",
    "pluginId": "cordova-plugin-device",
    "clobbers": [
      "device"
    ]
  },
  {
    "id": "cordova-plugin-splashscreen.SplashScreen",
    "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
    "pluginId": "cordova-plugin-splashscreen",
    "clobbers": [
      "navigator.splashscreen"
    ]
  },
  {
    "id": "cordova-plugin-x-toast.Toast",
    "file": "plugins/cordova-plugin-x-toast/www/Toast.js",
    "pluginId": "cordova-plugin-x-toast",
    "clobbers": [
      "window.plugins.toast"
    ]
  },
  {
    "id": "cordova-plugin-firebase.FirebasePlugin",
    "file": "plugins/cordova-plugin-firebase/www/firebase.js",
    "pluginId": "cordova-plugin-firebase",
    "clobbers": [
      "FirebasePlugin"
    ]
  },
  {
    "id": "cordova-plugin-clipboard2.Clipboard",
    "file": "plugins/cordova-plugin-clipboard2/www/clipboard.js",
    "pluginId": "cordova-plugin-clipboard2",
    "clobbers": [
      "cordova.plugins.clipboard"
    ]
  },
  {
    "id": "cordova-plugin-ionic-wkkeyboard.keyboard",
    "file": "plugins/cordova-plugin-ionic-wkkeyboard/www/android/keyboard.js",
    "pluginId": "cordova-plugin-ionic-wkkeyboard",
    "clobbers": [
      "window.Keyboard"
    ]
  },
  {
    "id": "cordova-sqlite-storage.SQLitePlugin",
    "file": "plugins/cordova-sqlite-storage/www/SQLitePlugin.js",
    "pluginId": "cordova-sqlite-storage",
    "clobbers": [
      "SQLitePlugin"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-device": "2.0.1",
  "cordova-plugin-splashscreen": "5.0.2",
  "cordova-plugin-ionic-webview": "1.2.0",
  "cordova-plugin-x-toast": "2.6.2",
  "cordova-plugin-firebase": "1.0.0",
  "cordova-plugin-clipboard2": "0.1.0",
  "cordova-plugin-ionic-wkkeyboard": "1.1.15",
  "cordova-sqlite-storage": "2.3.1"
};
// BOTTOM OF METADATA
});