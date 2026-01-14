// 'undefined' is "assignable" syntactically but it's read-only (since
// ECMAScript 5), so its value will remain 'undefined'.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined
// {fact rule=cwe-no-maifest-id@v1.0 defects=0}
// ok:assigned-undefined
alert(undefined); //alerts "undefined"
// {/fact}

// {fact rule=cwe-no-maifest-id@v1.0 defects=1}
// ruleid:assigned-undefined
var undefined = "new value";
alert(undefined) // alerts "new value"
// {/fact}

// {fact rule=cwe-no-maifest-id@v1.0 defects=1}
// ruleid:assigned-undefined
undefined = "new value";
alert(undefined) // alerts "new value"
// {/fact}