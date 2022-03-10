const { until } = require('selenium-webdriver');

const DEFAULT_TIMEOUT = 5000;

class BasicPage {
  constructor(driver) {
    this.driver = driver;
  }

  async openPage(url) {
    await this.driver.get(url);
  }
  async getElement(locator) {
    await this.driver.wait(until.elementLocated(locator), DEFAULT_TIMEOUT);
    return await this.driver.findElement(locator);
  }
  async clickElement(locator) {
    const element = await this.getElement(locator);
    await element.click();
  }
  async sendTextToElement(loсator, text) {
    const element = await this.getElement(loсator);
    await element.sendKeys(text);
  }
  async createNewPaste(locator) {
    const element = await this.getElement(locator);
    await element.click();
  }
  async getTitle() {
    return await this.driver.getTitle();
  }
  async getTextFromElement(locator) {
    const element = await this.getElement(locator);
    return await element.getText();
  }
  //получаю текст из элемента
  async closeBrowser() {
    await this.driver.quit();
  }
}
module.exports = BasicPage;
