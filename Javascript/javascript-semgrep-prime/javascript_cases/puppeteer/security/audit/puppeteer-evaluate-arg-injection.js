const puppeteer = require('puppeteer');
const express = require('express')
const app = express()

app.get('/user/:userInput', async function (req, res) {

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
// {fact rule=server-side-request-forgery@v1.0 defects=0}
// ok
  await page.evaluate(x => console.log(x), 5);
  // {/fact}

// {fact rule=server-side-request-forgery@v1.0 defects=1}
  // ruleid:puppeteer-evaluate-arg-injection
  await page.evaluate(x => fetch(x), req.params.userInput);
// {/fact}
  await page.screenshot({path: 'example.png'});
  await browser.close();
});
