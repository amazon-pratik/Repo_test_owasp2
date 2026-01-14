const wkhtmltopdf = require('wkhtmltopdf')
const express = require("express");
const app = express();


function input() {
  app.get("/add/:userInput", function (req, res) {
    return req.params['userInput']
  });
}
// {fact rule=server-side-request-forgery@v1.0 defects=1}
// ruleid: wkhtmltopdf-injection
wkhtmltopdf(input(), { output: 'vuln.pdf' })
// {/fact}

// {fact rule=server-side-request-forgery@v1.0 defects=1}
app.get("/add/:userInput", function (req, res) {
  // ruleid: wkhtmltopdf-injection
  return wkhtmltopdf(req.params['userInput'], { output: 'vuln.pdf' })
});
// {/fact}

// {fact rule=server-side-request-forgery@v1.0 defects=0}
// ok: wkhtmltopdf-injection
wkhtmltopdf('<html><html/>', { output: 'vuln.pdf' })
// {/fact}

// {fact rule=server-side-request-forgery@v1.0 defects=0}
function okTest(userInput) {
   var html = '<html><html/>';
   // ok: wkhtmltopdf-injection
   return wkhtmltopdf(html, { output: 'vuln.pdf' })
}
// {/fact}