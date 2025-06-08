import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';
export class MainPage extends BasePage {

private readonly headerLocator: Locator
private readonly categoriesTabsLocator: Locator
private readonly menuLocator: Locator

constructor(page: Page) {
  super(page);
  this.headerLocator = this.page.getByRole('banner');
  this.categoriesTabsLocator = this.page.locator('section').filter({ hasText: 'ГлавнаяРекомендацииФильмыСериалыТелешоуСпортБлогерыНовостиМузыкаПодкастыДетямТВ ' }).nth(1)
  this.menuLocator = this.page.getByLabel('Облегченная панель навигации')
}
  async open() {
   await this.page.goto('https://rutube.ru/');
  }  
  async headerCorrectAriaSnapshot() {
    await expect(this.headerLocator).toMatchAriaSnapshot()
  }
  async categoriesTabsLocatorArisSnapshot() {
    await expect(this.categoriesTabsLocator).toMatchAriaSnapshot()
  }
   async menuLocatorAriaShapshot() {
    await expect(this.menuLocator).toMatchAriaSnapshot()
  } 
  async closeCookies() {
    await this.page.getByLabel('Уведомление об использовании cookies').locator('button').click();
  }
}
