const PastebinPage = require('./../PastebinPage');
const { getDriver } = require('./../getDriver');
const { expect } = require('chai');
const { driver } = require('selenium-webdriver/chrome');

describe('Open pastebin.com and create new paste', () => {
  const pastebinPage = new PastebinPage(getDriver());

  it('should do new paste', async () => {
    await pastebinPage.openPage('https://pastebin.com/');
  });
  it('should add some information in text area', async () => {
    await pastebinPage.typePaste('Hello from WebDriver');
  });
  it('should add some information in "paste name/title " area', async () => {
    await pastebinPage.typeName('helloweb');
  });
  it('should click on "Expiration time"', async () => {
    await pastebinPage.setExpirationTime('');
  });
  it('should click on the button "Create new paste"', async () => {
    await pastebinPage.clickTheButton('');
  });

  after(async () => pastebinPage.closeBrowser());
});
