const express = require('express')
const app = express()
const port = 3000
const wkhtmltopdf = require('wkhtmltopdf')
const wkhtmltoimage = require('wkhtmltoimage')

// {fact rule=server-side-request-forgery@v1.0 defects=1}
app.get('/', async (req, res) => {
    // ruleid: express-wkhtmltopdf-injection
    const pdf = wkhtmltopdf(req.query.q, { output: 'vuln.pdf' })
    res.send(pdf)
})
// {/fact}

// {fact rule=server-side-request-forgery@v1.0 defects=0}
app.post('/ok', async (req, res) => {
    // ok: express-wkhtmltopdf-injection
    const pdf = wkhtmltopdf('<html></html>', { output: 'vuln.pdf' })
    res.send(pdf)
})
// {/fact}

// {fact rule=server-side-request-forgery@v1.0 defects=1}
app.post('/test', async (req, res) => {
    // ruleid: express-wkhtmltoimage-injection
    const img = wkhtmltoimage.generate(req.body, { output: 'vuln.pdf' })
    res.send(img)
})
// {/fact}

// {fact rule=server-side-request-forgery@v1.0 defects=0}
app.post('/test-ok', async (req, res) => {
    // ok: express-wkhtmltoimage-injection
    const data = '<html></html>'
    const img = wkhtmltoimage.generate(data, { output: 'vuln.pdf' })
    res.send(img)
})
// {/fact}

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
