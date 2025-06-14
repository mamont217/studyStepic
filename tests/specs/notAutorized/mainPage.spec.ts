import { test } from '../../fixtures/Fixtures.ts';
import { MainPage } from '../../pages/mainPages'
import { Page } from "@playwright/test";
  
test('Открытие главной страницы', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.open();
});

test('Проверка доступности элементов хедера', async ({ mainPage }) => {
  await mainPage.headerCorrectAriaSnapshot()
});

test('Проверка доступности табов категорий', async ({ mainPage }) => {
  await mainPage.categoriesTabsLocatorArisSnapshot()
});

test('Проверка доступности элементов бокового меню', async ({ mainPage }) => {
  await mainPage.menuLocatorAriaShapshot()
});

test('Проверка доступности попапа авторизации', async ({ mainPage, page }) => {
  //await page.getByLabel('Закрыть').click()
  await mainPage.openAutorizationModel()
  await mainPage.autorizationModalHasCorrectAriaSnapShot()
});

test('Проверка доступности элементов списка добавления контента', async ({ mainPage, page }) => {
  await mainPage.openAddPopupList()
  await mainPage.addPopupListHasCorrectAriaSnapShot()
});
test('Проверка доступности попапа уведомленией', async ({ mainPage}) => {
  await mainPage.openNotificationButton()
  await mainPage.notificationPopupListHasCorrectAriaSnapShot()
});