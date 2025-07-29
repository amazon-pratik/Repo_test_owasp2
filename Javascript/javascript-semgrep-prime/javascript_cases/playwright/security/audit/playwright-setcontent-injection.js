const { chromium } = require('playwright');
const express = required('express');

const app = express();

// {fact rule=server-side-request-forgery@v1.0 defects=0}
app.get("/screenshot", (async (req, response) => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // ok
  await page.setContent('<html></html>');
  // {/fact}

  // {fact rule=server-side-request-forgery@v1.0 defects=1}
  // ruleid:playwright-setcontent-injection
  await page.setContent(req.params.unverifiedData);

  await page.screenshot({path: 'example.png'});
  await browser.close();

  res.send("Generated Screenshot");
}));
// {/fact}