const express = require('express')
const app = express()
const port = 3000
const expat = require('node-expat');

// {fact rule=xml-external-entity@v1.0 defects=1}
app.get('/test', async (req, res) => {
    var parser = new expat.Parser('UTF-8')
    // ruleid: express-expat-xxe
    parser.parse(req.body)
    res.send('Hello World!')
})
// {/fact}

// {fact rule=xml-external-entity@v1.0 defects=1}
app.get('/test1', async (req, res) => {
    var parser = new expat.Parser('UTF-8')
    // ruleid: express-expat-xxe
    parser.write(req.query.value)
    res.send('Hello World!')
})
// {/fact}

// {fact rule=xml-external-entity@v1.0 defects=1}
app.get('/test2', async (req, res) => {
    var parser = new expat.Parser('UTF-8')
    var data = req.body.foo
    // ruleid: express-expat-xxe
    parser.write(data)
    res.send('Hello World!')
})
// {/fact}

// {fact rule=xml-external-entity@v1.0 defects=1}
const test3 = function func3(req, res) {
    var parser = new expat.Parser('UTF-8')
    // ruleid: express-expat-xxe
    parser.parse(req.body)
    res.send('Hello World!')
}
// {/fact}

// {fact rule=xml-external-entity@v1.0 defects=1}
const test4 = function (req, res) {
    var parser = new expat.Parser('UTF-8')
    // ruleid: express-expat-xxe
    parser.parse(req.body)
    res.send('Hello World!')
}
// {/fact}

// {fact rule=xml-external-entity@v1.0 defects=0}
app.get('/okTest1', async (req, res) => {
    var parser = new expat.Parser('UTF-8')
    // ok: express-expat-xxe
    parser.write('<xml>hardcoded</xml>')
    res.send('Hello World!')
})
// {/fact}

// {fact rule=xml-external-entity@v1.0 defects=0}
app.get('/okTest2', async (req, res) => {
    var parser = new expat.Parser('UTF-8')
    var data = foo()
    // ok: express-expat-xxe
    parser.write(data)
    res.send('Hello World!')
})
// {/fact}

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
