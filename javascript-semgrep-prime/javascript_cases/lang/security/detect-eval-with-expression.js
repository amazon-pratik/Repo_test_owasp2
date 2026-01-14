// {fact rule=new-function-detected@v1.0 defects=0}
// ok:detect-eval-with-expression
eval('alert')
// {/fact}

// {fact rule=new-function-detected@v1.00 defects=0}
// ok:detect-eval-with-expression
window.eval('alert')
// {/fact}

// {fact rule=new-function-detected@v1.0 defects=1}
// ruleid:detect-eval-with-expression
window.eval(`alert('${location.href}')`)
// {/fact}

// {fact rule=new-function-detected@v1.0 defects=1}
let funcName = new URLSearchParams(window.location.search).get('a')
// ruleid:detect-eval-with-expression
var x = new Function(`return ${funcName}(a,b)`)
// {/fact}
