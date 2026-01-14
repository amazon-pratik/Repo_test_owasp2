const CDP = require('chrome-remote-interface');
const express = require("express");
const app = express();

async function example(userInput) {
    let client;
    try {
        client = await CDP();
        const {Runtime} = client;
        // {fact rule=server-side-request-forgery@v1.0 defects=0}
        const script1 = "document.querySelector('p').textContent"
        // ok
        const result = await Runtime.evaluate({expression: script1});
        // {/fact}

        // {fact rule=server-side-request-forgery@v1.0 defects=1}
        // ruleid:chrome-remote-interface-evaluate-injection
        const result2 = await Runtime.evaluate({expression: userInput});
        // {/fact}

        // {fact rule=server-side-request-forgery@v1.0 defects=1}
        // ruleid:chrome-remote-interface-evaluate-injection
        const result3 = await Runtime.evaluate({expression: 'var x = 123;' + userInput});
        // {/fact}
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
