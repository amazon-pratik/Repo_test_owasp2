// {fact rule=cross-site-request-forgery@v1.0 defects=0}
function ok() {
    // ok:detect-no-csrf-before-method-override
    express.methodOverride()
    express.csrf()
}
// {/fact}

// {fact rule=cross-site-request-forgery@v1.0 defects=1}
function bad() {
    // ruleid:detect-no-csrf-before-method-override
    express.csrf()
    express.methodOverride()
}
// {/fact}
