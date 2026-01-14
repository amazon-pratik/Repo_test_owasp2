var app = angular.module('MyApp', []);
app.controller('myCtrl', function($scope, $sce) {
    // {fact rule=cross-site-scripting@v1.0 defects=1}
    // ruleid: detect-angular-translateprovider-useStrategy-method
    $translateSanitization.useStrategy();
    // {/fact}

    // {fact rule=cross-site-scripting@v1.0 defects=1}
    var output = 'Hallo ' + $scope.name;
    // ruleid:detect-angular-translateprovider-translations-method
    $translateProvider.translations('de', {output});
    // {/fact}

    // {fact rule=cross-site-scripting@v1.0 defects=1}
    // ruleid:detect-angular-translateprovider-translations-method
    $translateProvider.translations('de', {GREETING: $scope.name});
    // {/fact}

    // {fact rule=cross-site-scripting@v1.0 defects=1}
    // ruleid:detect-angular-translateprovider-translations-method
    var name =$scope.name
    var output = 'Hallo <b>{{name}}</b>
    $translateProvider.translations('de', {output});
    // {/fact}

   // {fact rule=cross-site-scripting@v1.0 defects=1}
    // OK:detect-angular-translateprovider-translations-method
   var name = 'xyz';
   var output = 'Hallo <b>{{name}}</b>
   $translateProvider.translations('de', {output});
    // {/fact}
});