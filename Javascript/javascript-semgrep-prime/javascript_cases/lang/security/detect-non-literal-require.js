// {fact rule=cwe-no-maifest-id@v1.0 defects=0}
// ok:detect-non-literal-require
var a = require('b')
// {/fact}

// {fact rule=cwe-no-maifest-id@v1.0 defects=0}
// ok:detect-non-literal-require
var a = require(process.env.VAR)
// {/fact}

// {fact rule=cwe-no-maifest-id@v1.0 defects=1}
// ruleid:detect-non-literal-require
var a = require(c)
// {/fact}
