exports.handler = function (event, context) {
    const html = `<div>${event.name}</div>`;

    // {fact rule=cross-site-scripting@v1.0 defects=0}
    const someRandomStuff = {
        // ok: tainted-html-response
        data: event.foo
    }
    bar(someRandomStuff)
    // {/fact}

    // {fact rule=cross-site-scripting@v1.0 defects=1}
    const response = {
        statusCode: 200,
        // ruleid: tainted-html-response
        body: html,
        headers: {
            'Content-Type': 'text/html',
        }
    };

    return response
    // {/fact}
}
