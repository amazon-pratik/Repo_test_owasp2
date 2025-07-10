// {fact rule=cwe-no-maifest-id@v1.0 defects=0}
// ok: lazy-load-module
const fs = require('fs')
// {/fact}

// {fact rule=cwe-no-maifest-id@v1.0 defects=1}
function smth() {
  // ruleid: lazy-load-module
  const mod = require('module-name')
  return mod();
}
// {/fact}
