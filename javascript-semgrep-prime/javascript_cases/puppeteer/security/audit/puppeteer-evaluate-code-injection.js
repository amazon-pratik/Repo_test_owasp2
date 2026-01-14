const puppeteer = require('puppeteer');
const express = require("express");
const app = express();

async function test2(userInput) {

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
// {fact rule=server-side-request-forgery@v1.0 defects=0}

  // ok:puppeteer-evaluate-code-injection
  await page.evaluate(x => console.log(x), 5);
  // {/fact}

// {fact rule=server-side-request-forgery@v1.0 defects=1}

  // ruleid:puppeteer-evaluate-code-injection
  await page.evaluate(`fetch(${userInput})`);
  // {/fact}

  await page.screenshot({path: 'example.png'});
  await browser.close();
}

function call() {
  app.get("/add/:userInput", function (req, res) {
    test2(req.params['userInput'])
  });
}

call()
