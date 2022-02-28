const PastebinPage = require('./PastebinPage');
const { getDriver } = require('./getDriver');

(async function () {
  const pastebinPage = new PastebinPage(getDriver());
  await pastebinPage.openPage('https://pastebin.com/');
  await pastebinPage.typePaste('Hello from WebDriver');
  await pastebinPage.typeName('helloweb');
  await pastebinPage.setExpirationTime('');
  await pastebinPage.clickTheButton('');
  await pastebinPage.closeBrowser();
})();
