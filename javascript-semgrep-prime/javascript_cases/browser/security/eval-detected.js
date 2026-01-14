/**
 * Only report `eval` when we provide it with non-constant parameters.
 */

/**
 * Negative matches
 */

// {fact rule=code-injection@v1.0 defects=0}
// ok:eval-detected
eval('var x = "static strings are okay";');
// {/fact}

// {fact rule=code-injection@v1.0 defects=0}
// ok:eval-detected
const constVar = "function staticStrings() { return 'static strings are okay';}";
eval(constVar);
// {/fact}

// {fact rule=code-injection@v1.0 defects=0}
// ok - const within another const
eval(`${constVar}`);
// {/fact}

// {fact rule=code-injection@v1.0 defects=0}
// ok - concatenating with another const okay
const secondConstVar = 'this is a const variable';
eval(constVar + secondConstVar);
// {/fact}

/**
 * Positive Matches
 */

// {fact rule=code-injection@v1.0 defects=1}
let dynamic = window.prompt() // arbitrary user input

// ruleid:eval-detected
eval(dynamic + 'possibly malicious code');
// {/fact}

// {fact rule=code-injection@v1.0 defects=1}
// ruleid:eval-detected
eval(`${dynamic} possibly malicious code`);
// {/fact}

// {fact rule=code-injection@v1.0 defects=1}
// ruleid:eval-detected
eval(dynamic.concat(''));
// {/fact}

// {fact rule=code-injection@v1.0 defects=1}
function evalSomething(something) {
    // ruleid:eval-detected
    eval(something);
}
// {/fact}
