// {fact rule=cwe-no-maifest-id@v1.0 defects=1}
// ruleid:eqeq-is-bad
x == x
// {/fact}

// {fact rule=cwe-no-maifest-id@v1.0 defects=0}
// ok:eqeq-is-bad
assert(x == x)
// {/fact}

// {fact rule=cwe-no-maifest-id@v1.0 defects=0}
// ok, harmless
1 == 1
// {/fact}

