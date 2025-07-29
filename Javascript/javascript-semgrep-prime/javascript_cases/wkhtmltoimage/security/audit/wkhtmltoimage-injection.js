var wkhtmltoimage = require('wkhtmltoimage')

// {fact rule=server-side-request-forgery@v1.0 defects=0}
const html = '<html></html>'
// ok: wkhtmltoimage-injection
wkhtmltoimage.generate(html, { output: 'vuln.jpg' })
// {/fact}

// We can't decide convincingly if the userInput is not tainted or not.
// This case is intentionally commented out.
// {ex-fact rule=server-side-request-forgery@v1.0 defects=1}
// ruleid: wkhtmltoimage-injection
// wkhtmltoimage.generate(input(), { output: 'vuln.jpg' })
// {/ex-fact}

// We can't decide convincingly if the userInput is not tainted or not.
// This case is intentionally commented out.
// {ex-fact rule=server-side-request-forgery@v1.0 defects=1}
// function test(userInput) {
//     // ruleid: wkhtmltoimage-injection
//     wkhtmltoimage.generate(userInput, { output: 'vuln.jpg' })
// }
// {/ex-fact}
