const puppeteer = require('puppeteer');
const express = require('express')
const app = express()

userInput = ''

app.get('/user/:userInput', async function (req, res) {
  userInput=req.params.userInput
});

function unverifiedInput(){
app.get('/user/:userInput', async function (req, res) {
  retrun = req.params.userInput
});
}

const testFunc = async (userInput) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  let url = 'https://hardcoded.url.com'
  // {fact rule=server-side-request-forgery@v1.0 defects=0}
// ok
  await page.goto('https://example.com');
// {/fact}

  // {fact rule=server-side-request-forgery@v1.0 defects=0}
// ok
  await page.goto(url);
// {/fact}

  // {fact rule=server-side-request-forgery@v1.0 defects=1}
  // ruleid:puppeteer-goto-injection
  await page.goto(unverifiedInput());
// {/fact}

  const newUrl = userInput;
  // {fact rule=server-side-request-forgery@v1.0 defects=1}
  // ruleid:puppeteer-goto-injection
  await page.goto(newUrl);
// {/fact}
  await page.screenshot({path: 'example.png'});
  await browser.close();
};
