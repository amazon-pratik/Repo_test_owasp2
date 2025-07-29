const puppeteer = require('puppeteer');

// {fact rule=server-side-request-forgery@v1.0 defects=1}

(async () => {
  // ruleid:puppeteer-exposed-chrome-devtools
  const browser = await puppeteer.launch({args:['--remote-debugging-address=123','--somethin-else']});
  const page = await browser.newPage();
  await page.goto('https://example.com');
  await browser.close();
})();
// {/fact}

// {fact rule=server-side-request-forgery@v1.0 defects=1}
(async () => {
  var port = 9222;
  // ruleid:puppeteer-exposed-chrome-devtools
  const browser = await puppeteer.launch({args:[`--remote-debugging-port=${port}`,'--somethin-else']});
  const page = await browser.newPage();
  await page.goto('https://example.com');
  await browser.close();
})();
// {/fact}

// {fact rule=server-side-request-forgery@v1.0 defects=0}
(async () => {
  // ok:puppeteer-exposed-chrome-devtools
  const browser = await puppeteer.launch({args:['--somethin-else', '--more-examples']});
  const page = await browser.newPage();
  await page.goto('https://example.com');
  await browser.close();
})();
// {/fact}
