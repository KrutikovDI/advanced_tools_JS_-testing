import puppeteer from "puppeteer"

jest.setTimeout(30000);
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
    const afterArray = await page.$$('.mask')

    await page.waitForSelector('#visa.card');
    expect(afterArray.length).toBe(5);
  });

  afterEach(async () => {
    await browser.close();
  });
});