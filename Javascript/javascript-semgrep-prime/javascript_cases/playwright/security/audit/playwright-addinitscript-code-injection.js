const { chromium } = require('playwright');

async function test4(userInput) {

  const browser = await chromium.launch();
  const page = await browser.newPage();
  const context = await browser.newContext();
// {fact rule=server-side-request-forgery@v1.0 defects=0}
  // ok:playwright-addinitscript-code-injection
  await context.addInitScript(x => console.log(x), 5);
  // {/fact}

// {fact rule=server-side-request-forgery@v1.0 defects=1}
  // ruleid:playwright-addinitscript-code-injection
  await context.addInitScript(`fetch(${userInput})`);
// {/fact}

  await page.screenshot({path: 'example.png'});
  await browser.close();
}
