// {fact rule=cross-site-scripting@v1.0 defects=1}
var app = angular.module('MyApp', []).config(function ($sceProvider) {
    // ruleid: detect-angular-sce-disabled
    $sceProvider.enabled(false);
});
// {/fact}
 app.controller('myCtrl', function($scope) {

 $scope.userInput = 'foo';
     $scope.sayHello = function() {
      $scope.html = "Hello <b>" + $scope.userInput + "</b>!"

    };

 });


  var app = angular.module('MyApp2', []).config(function ($sceProvider) {
    $sceProvider.enabled(true);
});
