const express = require('express')
const app = express()
const port = 3000

const hardcodedPath = 'lib/layout'

// {fact rule=cross-site-scripting@v1.0 defects=1}
function testController1(req, res) {
    // ruleid: res-render-injection
    return res.render(`tpl.${req.query.path}`, {foo: bar})
};

app.get('/test1', testController1)
// {/fact}

// {fact rule=cross-site-scripting@v1.0 defects=1}
app.get('/test2', (req, res) => {
    // ruleid: res-render-injection
    return res.render('tpl.' + req.query.path + '.smth-else', {foo: bar})
})
// {/fact}

// {fact rule=cross-site-scripting@v1.0 defects=0}
app.get('/ok-test', (req, res) => {
    // ok: res-render-injection
    return res.render(hardcodedPath, {foo: bar})
})
// {/fact}

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
