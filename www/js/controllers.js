angular.module('starter')

.controller('HomeCtrl', function($scope, $ionicPlatform, $cordovaInAppBrowser) {

  var options = {
      location: 'yes',
      clearcache: 'yes',
      // toolbar: 'no'
    };

  $scope.openBrowser = function() {
    $ionicPlatform.ready(function () {
      $cordovaInAppBrowser.open('http://rodrigom.tk/', '_system', options)
        .then(function(event) {
          // success
        })
        .catch(function(event) {
          // error
        });

      $cordovaInAppBrowser.close();
    });

      // $cordovaInAppBrowser.open('http://rodrigom.tk/', '_system', options);
      // window.open('http://rodrigom.tk/','_blank','location=yes');
  }
})
.controller('SobreCtrl', function($scope) {});
