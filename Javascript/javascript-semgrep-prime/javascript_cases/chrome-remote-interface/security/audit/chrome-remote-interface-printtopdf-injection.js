const CDP = require('chrome-remote-interface');
const express = require("express");
const app = express();

function example(userInput) {

    CDP(async (client) => {
        const {Page} = client;
        try {
            await Page.enable();
            await Page.navigate({url: 'https://github.com'});
            await Page.loadEventFired();
            // {fact rule=server-side-request-forgery@v1.0 defects=0}
            // ok
            const result = await Page.printToPDF({landscape: true, printBackground: true, headerTemplate: '<h1>Title</h1>'});
            // {/fact}

            // {fact rule=server-side-request-forgery@v1.0 defects=1}
            // ruleid:chrome-remote-interface-printtopdf-injection
            const result2 = await Page.printToPDF({landscape: true, printBackground: true, footerTemplate: userInput});
            // {/fact}

            // {fact rule=server-side-request-forgery@v1.0 defects=1}
            // ruleid:chrome-remote-interface-printtopdf-injection
            const result3 = await Page.printToPDF({landscape: true, printBackground: true, headerTemplate: '<h1>' + userInput + '</h1>'});
            // {/fact}
            fs.writeFileSync('page.pdf', Buffer.from(data, 'base64'));
        } catch (err) {
            console.error(err);
        } finally {
            await client.close();
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
