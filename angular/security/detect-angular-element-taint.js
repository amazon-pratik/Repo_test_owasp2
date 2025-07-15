var app = angular.module('MyApp', []);
app.controller('myCtrl', function($scope,$sanitize) {
    // {fact rule=cross-site-scripting@v1.0 defects=1}
    let a = unescape(window.location.href)
    // ruleid: detect-angular-element-taint
    angular.element('div').html(a)
    // {/fact}

    // {fact rule=cross-site-scripting@v1.0 defects=0}
    let b = $sanitize(unescape(window.location.href))
    // ok: detect-angular-element-taint
    angular.element('div').html(b)
    // {/fact}

    // {fact rule=cross-site-scripting@v1.0 defects=1}
    let b = window.location.href
    // ruleid: detect-angular-element-taint
    angular.element('div').html((new URLSearchParams(window.location.search)).get('returnUrl'))
    // {/fact}

});
