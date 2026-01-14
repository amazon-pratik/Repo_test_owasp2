var thenify = require('thenify');

// {fact rule=code-injection@v1.0 defects=1}
function bad1() {
// ruleid: multiargs-code-execution
    var promise = thenify(function (callback) {
        callback(null, 1, 2, 3);
    }, { multiArgs: [ 'one', 'tow', 'three' ] });
}
// {/fact}

// {fact rule=code-injection@v1.0 defects=1}
function bad2() {
// ruleid: multiargs-code-execution
    var params = { multiArgs: [ 'one', 'tow', 'three' ] };

    var promise = thenify(function (callback) {
        callback(null, 1, 2, 3);
    }, params);
}
// {/fact}

// {fact rule=code-injection@v1.0 defects=0}
function ok1() {
// ok: multiargs-code-execution
    var promise = thenify(function (callback) {
        callback(null, 1, 2, 3);
    }, { multiArgs: false });
}
// {/fact}

// {fact rule=code-injection@v1.0 defects=0}
function ok2() {
// ok: multiargs-code-execution
    var params = { multiArgs: false };

    var promise = thenify(function (callback) {
        callback(null, 1, 2, 3);
    }, params);
}
// {/fact}