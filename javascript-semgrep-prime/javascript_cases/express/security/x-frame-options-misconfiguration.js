var express = require('express'),
    app = express();

// {fact rule=header-injection@v1.0 defects=1}
app.get('/', function (req, res) {
    // ruleid: x-frame-options-misconfiguration
    res.set('X-Frame-Options', req.query.opts)
    res.send('ok')
})
// {/fact}

// {fact rule=header-injection@v1.0 defects=0}
app.get('/', function (req, res) {
    // ok: x-frame-options-misconfiguration
    res.set('X-Frame-Options', 'SAMEORIGIN')
    res.send('ok')
})
// {/fact}
