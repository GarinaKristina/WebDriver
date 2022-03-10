const PastebinPage = require('./PastebinPage');
const { getDriver } = require('./getDriver');

(async function () {
  const pastebinPage = new PastebinPage(getDriver());
  await pastebinPage.openPage('https://pastebin.com/');
  await pastebinPage.clickOnTheButtonAgree('');
  await pastebinPage.typePaste(
    'git config --global user.name"New Sheriff in Town" git reset $(git commit - tree HEAD ^ { tree } - m "Legacy code" git push origin master--force'
  );
  await pastebinPage.typeName('how to gain dominance among developers');
  await pastebinPage.clickOnSyntaxHiglighting('');
  await pastebinPage.selectSyntaxHiglighting('');
  await pastebinPage.clickOnExpirationTime('');
  await pastebinPage.selectExpirationTime('');
  await pastebinPage.clickTheButton('');
  await pastebinPage.clickOnTheButtonAgree('');
  await pastebinPage.closeBrowser();
})();
