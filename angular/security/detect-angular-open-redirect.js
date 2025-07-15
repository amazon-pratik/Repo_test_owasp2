var app = angular.module('MyApp', []);
app.controller('myCtrl', function($scope, $sce) {
    $scope.userInput = 'foo';

    $scope.sayHello = function() {
     // {fact rule=cross-site-scripting@v1.0 defects=1}
     // ruleid:detect-angular-open-redirect
     $window.location.href = input + '/app/logout';
     // {/fact}

     // {fact rule=cross-site-scripting@v1.0 defects=1}
     input = $scope.input;
     // ruleid:detect-angular-open-redirect
     $window.location.href = input + '/app/logout';
     // {/fact}

     //Data is not coming from user input
     $location.location.location = test

     // {fact rule=cross-site-scripting@v1.0 defects=0}
     // ok:detect-angular-open-redirect
     $window.location.href = "//untatintedredirect"
     // {/fact}
   };

});
