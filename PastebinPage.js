const { By } = require('selenium-webdriver');

const BasicPage = require('./BasicPage');

class PastebinPage extends BasicPage {
  constructor(driver) {
    super(driver);

    this.pasteTextArea = By.id('postform-text');
    this.pasteNameField = By.id('postform-name');
    this.experationDropDown = By.xpath('//*[@id="select2-postform-expiration-container"]');
    this.experationTime10MinuteOption = By.xpath('//li[contains(text(), "10 Minutes")]');
    this.syntaxHighlightingDropDown = By.id('select2-postform-format-container');
    this.syntaxHighlightingBash = By.xpath('//li[contains(text(), "Bash")]');
    this.createNewPasteButton = By.xpath('//button[@type="submit"]');
    this.bash = By.xpath('//*[@class="btn -small h_800"]'); 
    this.noteArea = By.xpath('//div[@class="de1"]');
    this.buttonAgree = By.xpath('//*[@class="sc-ifAKCX ljEJIv"]');
  }
  async typePaste(paste) {
    await this.sendTextToElement(this.pasteTextArea, paste);
  }
  async typeName(name) {
    await this.sendTextToElement(this.pasteNameField, name);
  }
  async clickOnTheButtonAgree() {
    await this.clickElement(this.buttonAgree);
  }
  async clickOnExpirationTime() {
    await this.clickElement(this.experationDropDown);
  }
  async selectExpirationTime() {
    await this.clickElement(this.experationTime10MinuteOption);
  }
  async clickOnSyntaxHiglighting() {
    await this.clickElement(this.syntaxHighlightingDropDown);
  }
  async selectSyntaxHiglighting() {
    await this.clickElement(this.syntaxHighlightingBash);
  }
  async clickTheButton() {
    await this.clickElement(this.createNewPasteButton);
  }
}

module.exports = PastebinPage;
