import puppeteer from "puppeteer"

describe ('проверка номера карты', () => {
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
  
  test('список карт должен отображатьcя', async () => {
    await page.goto('http://localhost:8080');

    await page.waitForSelector('.card-conteiner');
  });

  test('вводим номер карты visa', async () => {
    await page.goto('http://localhost:8080');

    await page.waitForSelector('.card-conteiner');

    const form = await page.$('.form');
    const input = await form.$('.input');
    const button = await form.$('.button');

    await input.type('4929474218674270');
    await button.click();

    await page.waitForSelector('#visa.card');
  }, 40000);

  afterEach(async () => {
    await browser.close();
  });
});