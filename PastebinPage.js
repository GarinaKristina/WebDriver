const { By } = require('selenium-webdriver');

const BasicPage = require('./BasicPage');

class PastebinPage extends BasicPage {
  constructor(driver) {
    super(driver);

    this.pasteTextArea = By.id('postform-text');
    this.pasteNameField = By.id('postform-name');
    this.experationDropDown = By.id('select2-postform-expiration-container');
    this.experationTime10MinuteOption = By.xpath('//li[contains(text(), "10 Minutes")]');
    this.createNewPasteButton = By.xpath('//*[@id="w0"]/div[5]/div[1]/div[8]/button');
  }
  async typePaste(paste) {
    await this.sendTextToElement(this.pasteTextArea, paste);
  }
  async typeName(name) {
    await this.sendTextToElement(this.pasteNameField, name);
  }
  async setExpirationTime() {
    await this.clickElement(this.experationDropDown);
    await this.clickElement(this.experationTime10MinuteOption);
  }
  async clickTheButton() {
    await this.clickElement(this.createNewPasteButton);
  }
}

module.exports = PastebinPage;
