// {fact rule=cwe-no-maifest-id@v1.0 defects=0}
// ok:detect-pseudoRandomBytes
crypto.randomBytes
// {/fact}

// {fact rule=cwe-no-maifest-id@v1.0 defects=1}
// ruleid:detect-pseudoRandomBytes
crypto.pseudoRandomBytes
// {/fact}
