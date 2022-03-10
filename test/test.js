const PastebinPage = require('./../PastebinPage');
const { getDriver } = require('./../getDriver');
const chai = require('chai');
const expect = chai.expect;

describe('Do on pastebinpage.com new paste', () => {
  const pastebinPage = new PastebinPage(getDriver());
  it('should open pastebin.com', async () => {
    await pastebinPage.openPage('https://pastebin.com/');
  });
  it('should add some information in text area', async () => {
    await pastebinPage.typePaste(
      'git config --global user.name"New Sheriff in Town" git reset $(git commit - tree HEAD ^ { tree } - m "Legacy code" git push origin master--force'
    );
  });
  it('should close information window', async () => {
    await pastebinPage.clickOnTheButtonAgree('');
  });
  it('should click on "Syntax Higlighting"', async () => {
    await pastebinPage.clickOnSyntaxHiglighting('');
  });
  it('should select in "Syntax Higlighting" - Bash', async () => {
    await pastebinPage.selectSyntaxHiglighting('');
  });
  it('should click on "Expiration time"', async () => {
    await pastebinPage.clickOnExpirationTime('');
  });
  it('should select in "Expiration time" - 10 minute', async () => {
    await pastebinPage.selectExpirationTime('');
  });
  it('should add some information in "paste name/title " area', async () => {
    await pastebinPage.typeName('how to gain dominance among developers');
  });
  it('should click on the button "Create new paste"', async () => {
    await pastebinPage.clickTheButton('');
  });
  it('should close information window', async () => {
    await pastebinPage.clickOnTheButtonAgree('');
  });
  it('should have title "how to gain dominance among developers"', async () => {
    const title = await pastebinPage.getTitle();
    await expect(title).to.contain('how to gain dominance among developers');
  });
  it('should have syntax Bash', async () => {
    const bash = await pastebinPage.getTextFromElement(pastebinPage.bash);
    await expect(bash).to.equal('Bash');
  });
  it('should have text from text area', async () => {
    const noteArea = await pastebinPage.getTextFromElement(pastebinPage.noteArea);
    await expect(noteArea).to.equal(
      'git config --global user.name"New Sheriff in Town" git reset $(git commit - tree HEAD ^ { tree } - m "Legacy code" git push origin master--force'
    );
  });
  after(async () => pastebinPage.closeBrowser());
});
