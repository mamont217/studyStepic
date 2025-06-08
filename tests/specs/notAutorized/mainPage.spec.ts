import test from '@playwright/test'
import { MainPage } from '../../pages/mainPages'

test('Открытие главной страницы', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.open();
});

test('Проверка доступности элементов хедера', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.open();
  await mainPage.closeCookies
  await mainPage.headerCorrectAriaSnapshot()
});
test('Проверка доступности табов категорий', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.open();
  await mainPage.closeCookies
  await mainPage.categoriesTabsLocatorArisSnapshot()
});
test('Проверка доступности элементов бокового меню', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.open();
  await mainPage.closeCookies
  await mainPage.menuLocatorAriaShapshot()
});
