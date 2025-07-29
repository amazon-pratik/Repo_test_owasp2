const express = require('express')
const app = express()
const port = 3000

const hardcodedPath = 'lib/func.js'

// {fact rule=module-injection@v1.0 defects=1}
function testController1(req, res) {
    try {
        // ruleid: require-request
        require(req.query.controllerFullPath)(req, res);
    } catch (err) {
        this.log.error(err);
    }
    res.end('ok')
};
app.get('/test1', testController1)
// {/fact}

// {fact rule=module-injection@v1.0 defects=1}
let testController2 = function (req, res) {
    // ruleid: require-request
    const func = require(req.body)
    return res.send(func())
}
app.get('/test2', testController2)
// {/fact}

// {fact rule=module-injection@v1.0 defects=1}
var testController3 = null;
testController3 = function (req, res) {
    // ruleid: require-request
    const func = require(req.body)
    return res.send(func())
}
app.get('/test3', testController3)
// {/fact}

// {fact rule=module-injection@v1.0 defects=1}
(function (req, res) {
    // ruleid: require-request
    const func = require(req.body)
    return res.send(func())
})(req, res)
// {/fact}

// {fact rule=module-injection@v1.0 defects=0}
app.get('/ok-test', (req, res) => {
    // ok: require-request
    const func = require(hardcodedPath)
    return res.send(func())
})
// {/fact}

// {fact rule=module-injection@v1.0 defects=0}
let okController = function (req, res) {
    // ok: require-request
    const func = require('lib/func.js')
    return res.send(func())
}
app.get('/ok-test2', okController)
// {/fact}

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
