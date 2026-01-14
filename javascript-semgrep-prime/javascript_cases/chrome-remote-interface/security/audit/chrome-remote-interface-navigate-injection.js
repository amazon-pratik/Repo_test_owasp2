const CDP = require('chrome-remote-interface');
const express = require("express");
const app = express();

async function example(userInput) {
    let client;
    try {
        client = await CDP();
        const {Network, Page} = client;
        Network.requestWillBeSent((params) => {
            console.log(params.request.url);
        });
        await Network.enable();
        await Page.enable();
        // {fact rule=server-side-request-forgery@v1.0 defects=0}
        // ok
        await Page.navigate({url: 'https://github.com'});
        // {/fact}

        // {fact rule=server-side-request-forgery@v1.0 defects=1}
        // ruleid:chrome-remote-interface-navigate-injection
        await Page.navigate({url: userInput});
        // {/fact}
        await Page.loadEventFired();
    } catch (err) {
        console.error(err);
    } finally {
        if (client) {
            await client.close();
        }
    }
}

function call() {
    app.get("/add/:userInput", function (req, res) {
      example(req.params.userInput)
    });
  }

  call()
