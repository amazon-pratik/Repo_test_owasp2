const { chromium } = require('playwright');

async function test2(userInput) {

  const browser = await chromium.launch();
  const page = await browser.newPage();
// {fact rule=server-side-request-forgery@v1.0 defects=0}
  // ok:playwright-evaluate-code-injection
  await page.evaluate(x => console.log(x), 5);
  // {/fact}

// {fact rule=server-side-request-forgery@v1.0 defects=1}
  // ruleid:playwright-evaluate-code-injection
  await page.evaluate(`fetch(${userInput})`);
// {/fact}
  await page.screenshot({path: 'example.png'});
  await browser.close();
}
