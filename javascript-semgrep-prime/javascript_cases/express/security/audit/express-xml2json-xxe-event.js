const expat = require('xml2json');

// {fact rule=xml-external-entity@v1.0 defects=1}
function test1() {
    var winston = require('winston'),
        express = require('express');

    var xmlParsingMiddleware = function(req, res, next) {
        var buf = '';
        req.setEncoding('utf8');
        req.on('data', function (chunk) {
            buf += chunk
        });
        // ruleid: express-xml2json-xxe-event
        req.on('end', function () {
            req.body = expat.toJson(buf, {coerce: true, object: true});
            next();
        });
    };
}
// {/fact}

// {fact rule=xml-external-entity@v1.0 defects=1}
function test2() {
    const express = require('express')
    const app = express()
    const port = 3000

    app.get('/', (req, res) => {
        var buf = '';
        req.setEncoding('utf8');
        req.on('data', function (chunk) {
            buf += chunk
        });
        // ruleid: express-xml2json-xxe-event
        req.on('end', function () {
            req.body = expat.toJson(buf, {coerce: true, object: true});
            next();
        });
    })

    app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
}
// {/fact}

// {fact rule=xml-external-entity@v1.0 defects=0}
function okTest() {
    const express = require('express')
    const app = express()
    const port = 3000
    const someEvent = require('some-event')

    // ok: express-xml2json-xxe-event
    someEvent.on('event', function (err, data) {
        req.body = expat.toJson(data, {coerce: true, object: true});
        next();
    });

    app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
}
// {/fact}
