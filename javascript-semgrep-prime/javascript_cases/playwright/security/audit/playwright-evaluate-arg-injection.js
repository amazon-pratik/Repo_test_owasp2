const { chromium } = require('playwright');

async function test3(userInput) {

  const browser = await chromium.launch();
  const page = await browser.newPage();
// {fact rule=server-side-request-forgery@v1.0 defects=0}
// ok
  await page.evaluate(x => console.log(x), 5);
  // {/fact}

// {fact rule=server-side-request-forgery@v1.0 defects=1}
  // ruleid:playwright-evaluate-arg-injection
  await page.evaluate(x => fetch(x), userInput);
// {/fact}
  await page.screenshot({path: 'example.png'});
  await browser.close();
}
