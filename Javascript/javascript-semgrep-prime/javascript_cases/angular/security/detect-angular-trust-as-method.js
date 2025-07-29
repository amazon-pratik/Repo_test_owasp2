var app = angular.module('MyApp', []);
app.controller('myCtrl', function($scope, $sce) {
    $scope.userInput = 'foo';

    $scope.sayHello = function() {

     value = $scope.html
     // {fact rule=cross-site-scripting@v1.0 defects=1}
     // ruleid:detect-angular-trust-as-method
     $sce.trustAs($sce.HTML, value);
     // {/fact}

     // {fact rule=cross-site-scripting@v1.0 defects=1}
     // ruleid:detect-angular-trust-as-method
     $sce.trustAs($sce.CSS, value);
     // {/fact}

     // {fact rule=cross-site-scripting@v1.0 defects=1}
     // ruleid:detect-angular-trust-as-method
     $sce.trustAs($sce.JS, value);
     // {/fact}

     // {fact rule=cross-site-scripting@v1.0 defects=1}
     // ruleid:detect-angular-trust-as-method
     $sce.trustAs($sce.RESOURCE_URL, value);
     // {/fact}

     // {fact rule=cross-site-scripting@v1.0 defects=1}
     // ruleid:detect-angular-trust-as-method
     $sce.trustAs($sce.URL, value);
     // {/fact}


     //Data is not coming from user input
     $scope.trustedurl = $sce.trustAs('stringLiteral');
   };

});
