var app = angular.module('MyApp', []);
app.controller('myCtrl', function($scope, $sce) {

$scope.userInput = 'foo';
    $scope.sayHello = function() {
      // {fact rule=cross-site-scripting@v1.0 defects=1}
      // ruleid:detect-angular-trust-as-resourceurl-method
     $scope.trustedurl = $sce.trustAsResourceUrl($scope.html);
     // {/fact}

      // {fact rule=cross-site-scripting@v1.0 defects=1}
     // ruleid:detect-angular-trust-as-resourceurl-method
     input = $scope.html
     $scope.trustedurl = $sce.trustAsResourceUrl(input);
     // {/fact}


     //Data is not coming from user input
     $scope.trustedurl = $sce.trustAsResourceUrl('stringLiteral');
   };

});
