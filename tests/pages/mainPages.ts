import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';
export class MainPage extends BasePage {

private readonly headerLocator: Locator
private readonly categoriesTabsLocator: Locator
private readonly menuLocator: Locator
private readonly buttorSearch: Locator
private readonly headerNotoficationButton: Locator
private readonly headerLoginButtonLocator: Locator
private readonly headerAddButtonPopupListLocator: Locator
private readonly headerNotificationButtonPopuplocator: Locator
private readonly headerReristratinnButtonPopuplocator: Locator
private readonly buttonRegistration: Locator
private readonly autorizationModalLocator: Locator
private readonly closePopup: Locator



constructor(page: Page) {
  super(page);
  this.headerLocator = this.page.getByRole('banner');
  this.categoriesTabsLocator = this.page.locator('section').filter({ hasText: 'ГлавнаяРекомендацииДень РоссииФильмыСериалыТелешоуСпортБлогерыНовостиМузыкаПодка' }).nth(1)
  this.menuLocator = this.page.getByLabel('Облегченная панель навигации')
  this.buttorSearch = this.page.getByLabel('Добавить')
  this.headerNotoficationButton = this.page.getByLabel('Уведомления')
  this.headerLoginButtonLocator = this.page.locator('.wdp-header-auth-button-module__button-wrapper button')
  this.headerAddButtonPopupListLocator = this.page.locator('.wdp-header-right-module__uploader ul')
  this.headerNotificationButtonPopuplocator = this.page.locator('.wdp-notifications-popup-module__wrapper')
  this.headerReristratinnButtonPopuplocator = this.page.locator('.labelledby')
  this.buttonRegistration = this.page.getByRole("button", {name: 'Вход и регистрация'})
  this.autorizationModalLocator = this.page.locator('iframe[title="Multipass"]').contentFrame().locator('div[role="form"]')
  this.closePopup = this.page.getByLabel('Закрыть')
  
}
  async onHaveButtonClose() {
  await expect(this.closePopup).toBeVisible()
}
  async open() {
    await this.page.goto('https://rutube.ru/');
  }  
  async headerCorrectAriaSnapshot() {
    await expect(this.headerLocator).toMatchAriaSnapshot({name: 'headerAriaSnapshot.yml'})
  }
  async categoriesTabsLocatorArisSnapshot() {
    await expect(this.categoriesTabsLocator).toMatchAriaSnapshot({name: 'categoriesTabsSnapshot.yml'})
  }
   async menuLocatorAriaShapshot() {
    await expect(this.menuLocator).toMatchAriaSnapshot({name: 'menuLSnapshot.yml'})
  } 
  async closeCookies() {
    await this.page.getByLabel('Уведомление об использовании cookies').locator('button').click();
  }
  async openAddPopupList() {
    this.buttorSearch.click()
  }
  async openNotificationButton() {
    this.headerNotoficationButton.click()
  }
  async openAutorizationModel() {
    this.headerLoginButtonLocator.click()
  }
  async switchToRegistrationModal() {
    this.buttonRegistration.click()
  }
  async closeFirstPopup() {
    this.closePopup.click()
  }
  async addPopupListHasCorrectAriaSnapShot() {
     await expect(this.headerAddButtonPopupListLocator).toMatchAriaSnapshot({name: 'addButtonPoput.yml'})
  }
  async notificationPopupListHasCorrectAriaSnapShot() {
     await expect(this.headerNotificationButtonPopuplocator).toMatchAriaSnapshot({name: 'NotificationPoput.yml'})
  }
  async autorizationModalHasCorrectAriaSnapShot() {
     await expect(this.autorizationModalLocator).toMatchAriaSnapshot({name: 'autorizationModal.yml'})
  }

}
 
