exports.handler = async (event) => {
    // {fact rule=code-injection@v1.0 defects=0}
    // ok:tainted-eval
    eval('alert')
    // {/fact}

    // {fact rule=code-injection@v1.0 defects=1}
    // ruleid:tainted-eval
    eval(event['smth'])
    // {/fact}

    // {fact rule=code-injection@v1.0 defects=1}
    // ruleid:tainted-eval
    var x = new Function('a', 'b', `return ${event['func']}(a,b)`)
    // {/fact}

    // {fact rule=code-injection@v1.0 defects=1}
    // ruleid:tainted-eval
    var y = Function('a', 'b', event['code'])
    // {/fact}
}