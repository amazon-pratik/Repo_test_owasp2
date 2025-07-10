const CDP = require('chrome-remote-interface');
const express = require("express");
const app = express();

function example(userInput) {
    CDP(async (client) => {
        const {Page} = client;
        try {
            const {frameId} = await Page.navigate({url: 'about:blank'});
            // {fact rule=server-side-request-forgery@v1.0 defects=0}
            const html = '<html>test</html>';
            // ok
            await Page.setDocumentContent({frameId, html});
            // {/fact}

            // {fact rule=server-side-request-forgery@v1.0 defects=1}
            // ruleid:chrome-remote-interface-setdocumentcontent-injection
            await Page.setDocumentContent({frameId, html: userInput});
            // {/fact}
        } catch (err) {
            console.error(err);
            client.close();
        }
    }).on('error', (err) => {
        console.error(err);
    });
}

function call() {
    app.get("/add/:userInput", function (req, res) {
      example(req.params.userInput)
    });
  }

  call()