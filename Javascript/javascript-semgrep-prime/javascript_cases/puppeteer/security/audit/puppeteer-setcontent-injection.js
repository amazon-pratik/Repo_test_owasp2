const puppeteer = require('puppeteer');
const express = require("express");
const app = express();

function unverifiedInput() {
  app.get("/add/:userInput", function (req, res) {
    return req.params['userInput']
  });
}


// {fact rule=server-side-request-forgery@v1.0 defects=0}

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

// ok
  await page.setContent('<html></html>');
  // {/fact}

  // {fact rule=server-side-request-forgery@v1.0 defects=1}

  // ruleid:puppeteer-setcontent-injection
  await page.setContent(unverifiedInput());

  await page.screenshot({path: 'example.png'});
  await browser.close();
})();
// {/fact}