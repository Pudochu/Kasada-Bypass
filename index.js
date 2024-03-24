const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    ignoreDefaultArgs: ["--enable-automation"],
    args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--no-first-run',
        '--disable-blink-features=AutomationControlled'
    ],
    defaultViewport: null,
    timeout: 10000, // 10 seconds
    protocolTimeout: 20000, // 20 seconds
    executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe", // If necessary, download Chrome to your computer. In some cases, this method works very well.
  });
  const page = await browser.newPage();
  await page.goto('https://example.com');
}
)();
