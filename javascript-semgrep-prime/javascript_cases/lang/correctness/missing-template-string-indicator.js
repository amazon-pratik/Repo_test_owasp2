// {fact rule=cwe-no-maifest-id@v1.0 defects=0}
function name() {
  // ok: missing-template-string-indicator
  return `this is ${start.line}`
}
// {/fact}

// {fact rule=cwe-no-maifest-id@v1.0 defects=0}
function ok() {
  // ok: missing-template-string-indicator
  `test`;
  if (true) { a = 3; }
  `test`;
}
// {/fact}

// {fact rule=cwe-no-maifest-id@v1.0 defects=1}
function name2() {
  // ruleid: missing-template-string-indicator
  return `this is {start.line}`
}
// {/fact}

// {fact rule=cwe-no-maifest-id@v1.0 defects=0}
function name3() {
  // ok: missing-template-string-indicator
  return "this is ${start.line}"
}
// {/fact}

// {fact rule=cwe-no-maifest-id@v1.0 defects=0}
function name3() {
  // ok: missing-template-string-indicator
  return "this is {start.line}"
}
// {/fact}
