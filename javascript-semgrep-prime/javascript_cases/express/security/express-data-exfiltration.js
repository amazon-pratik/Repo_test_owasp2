const express = require('express')
const app = express()
const port = 3000

// {fact rule=cross-site-scripting@v1.0 defects=1}
function testController1(req, res) {
    try {
        const defaultData = {foo: true}
        // ruleid: express-data-exfiltration
        let data = Object.assign(defaultData, req.query)
        doSmthWith(data)
    } catch (err) {
        this.log.error(err);
    }
    res.end('ok')
};
app.get('/test1', testController1)
// {/fact}

// {fact rule=cross-site-scripting@v1.0 defects=1}
let testController2 = function (req, res) {
    const defaultData = {foo: {bar: true}}
    // ruleid: express-data-exfiltration
    let data = Object.assign(defaultData, {foo: req.query})
    doSmthWith(data)
    return res.send({ok: true})

}
app.get('/test2', testController2)
// {/fact}

// {fact rule=cross-site-scripting@v1.0 defects=1}
var testController3 = null;
testController3 = function (req, res) {
    const defaultData = {foo: true}
    let newData = req.body
    // ruleid: express-data-exfiltration
    let data = Object.assign(defaultData, newData)
    doSmthWith(data)
    return res.send({ok: true})
}
app.get('/test3', testController3)
// {/fact}

// {fact rule=cross-site-scripting@v1.0 defects=1}
app.get('/ok-test', (req, res) => {
    const defaultData = {foo: req.body.foo}
    let newData = {bar: '123'}
    // ruleid: express-data-exfiltration
    let data = Object.assign(defaultData, newData)
    doSmthWith(data)
    return res.send(func())
})
// {/fact}

// {fact rule=cross-site-scripting@v1.0 defects=0}
let okController = function (req, res) {
    const defaultData = {foo: {bar: true}}
    // ok: express-data-exfiltration
    let data = Object.assign(defaultData, {foo: getFoo()})
    doSmthWith(data)
    return res.send({ok: true})
}
app.get('/ok-test2', okController)
// {/fact}

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
