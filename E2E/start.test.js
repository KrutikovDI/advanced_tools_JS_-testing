import puppeteer from "puppeteer"

describe ('запуск страницы', () => {
  let browser;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    });

    page = await browser.newPage();
  });
  
  test('тест', async () => {
    await page.goto('http://localhost:8080');

    await page.waitForSelector('body');
  });

  afterAll(async () => {
    await browser.close();
  });
});