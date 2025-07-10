// There is no method called unverifiedInput here. Need to update GT
import { chromium } from 'playwright';

const testFunc = async (userInput: any) => {
  const browser = await chromium.launch();
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
  // ruleid:playwright-goto-injection
  await page.goto(unverifiedInput());
// {/fact}

  const newUrl = userInput;
  // {fact rule=server-side-request-forgery@v1.0 defects=1}
  // ruleid:playwright-goto-injection
  await page.goto(newUrl);
// {/fact}

  await page.screenshot({path: 'example.png'});
  await browser.close();
};