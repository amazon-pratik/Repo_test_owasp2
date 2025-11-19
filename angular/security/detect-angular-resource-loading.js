var app = angular.module('MyApp', []).config(function ($sceDelegateProvider) {
    // {fact rule=cross-site-scripting@v1.0 defects=1}
    // ruleid: detect-angular-resource-loading
    $sceDelegateProvider.resourceUrlWhitelist([ '**' ]);
    // {/fact}

    // {fact rule=cross-site-scripting@v1.0 defects=1}
    // ruleid: detect-angular-resource-loading
    $sceDelegateProvider.resourceUrlWhitelist(['http://semgrep.dev', '**']);
    // {/fact}

    // {fact rule=cross-site-scripting@v1.0 defects=1}
    // ruleid: detect-angular-resource-loading
    $sceDelegateProvider.resourceUrlWhitelist(['http://semgrep.dev', '**', 'http://semgrep.dev']);
    // {/fact}

    // {fact rule=cross-site-scripting@v1.0 defects=1}
    // ruleid: detect-angular-resource-loading
    $sceDelegateProvider.resourceUrlWhitelist(['http://**.semgrep.dev']);
    // {/fact}

    // {fact rule=cross-site-scripting@v1.0 defects=0}
    // ok: detect-angular-resource-loading
    $sceDelegateProvider.resourceUrlWhitelist(['http://semgrep.dev/ooo']);
    // {/fact}

    // {fact rule=cross-site-scripting@v1.0 defects=0}
    // ok: detect-angular-resource-loading
    $sceDelegateProvider.resourceUrlWhitelist(['http://semgrep.dev/**']);
    // {/fact}

    // {fact rule=cross-site-scripting@v1.0 defects=0}
    // ok: detect-angular-resource-loading
    $sceDelegateProvider.resourceUrlWhitelist(['http://semgrep.dev']);
    // {/fact}

});
 app.controller('myCtrl', function($scope) {

 $scope.userInput = 'foo';
     $scope.sayHello = function() {
      $scope.html = "Hello <b>" + $scope.userInput + "</b>!"

    };

 });
