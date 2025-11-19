var app = angular.module('MyApp', []);
app.controller('myCtrl', function($scope,$sanitize) {
    $rootScope.foo = getData();
    $scope.foo = getData();
    // {fact rule=cross-site-scripting@v1.0 defects=0}
    // ok: detect-angular-element-methods
    angular.element('div').html('hi')
    // {/fact}

    // {fact rule=cross-site-scripting@v1.0 defects=1}
    // ruleid: detect-angular-element-methods
    angular.element('div').html($rootScope.foo)
    // {/fact}

    // {fact rule=cross-site-scripting@v1.0 defects=1}
    // ruleid: detect-angular-element-methods
    angular.element('div').html($scope.foo)
    // {/fact}
});
