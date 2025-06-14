# Test info

- Name: Проверка доступности элементов хедера
- Location: C:\Users\mamon\OneDrive\Рабочий стол\Сайт для теста\tests\specs\notAutorized\mainPage.spec.ts:10:5

# Error details

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByLabel('Закрыть')

    at Object.mainPage (C:\Users\mamon\OneDrive\Рабочий стол\Сайт для теста\tests\fixtures\Fixtures.ts:16:39)
```

# Page snapshot

```yaml
- img
- banner:
  - button "Открыть меню навигации":
    - img
  - button "RUTUBE":
    - img "RUTUBE"
  - textbox "Поиск"
  - button "Виртуальная клавиатура":
    - img
  - img
  - button "Добавить":
    - img
  - button "Уведомления":
    - img
  - button "Переключить на светлую тему"
  - button "Вход и регистрация":
    - paragraph: Вход и регистрация
- navigation "Облегченная панель навигации":
  - list:
    - listitem:
      - link "Главная": Главная …
    - listitem:
      - link "RUTUBE для блогеров …":
        - /url: /for_creators
    - listitem:
      - link "Каталог …":
        - /url: /categories/
    - listitem:
      - link "Популярное …":
        - /url: /feeds/popular/
    - listitem:
      - link "В топе …":
        - /url: /feeds/top/
    - listitem:
      - link "Shorts …":
        - /url: /shorts/
    - listitem:
      - link "ТВ онлайн …":
        - /url: /feeds/live/
    - listitem:
      - link "Трансляции …":
        - /url: /feeds/stream/
    - listitem:
      - link "Моё …":
        - /url: /my/
    - listitem:
      - link "Фильмы …":
        - /url: /feeds/movies/
    - listitem:
      - link "Анимация …":
        - /url: /feeds/animation/
    - listitem:
      - link "RUTUBE x PREMIER …":
        - /url: /feeds/premier/
    - listitem:
      - link "День России …":
        - /url: /feeds/12june/
  - separator
  - list:
    - listitem:
      - link "Подписки …":
        - /url: /my/subscriptions/
    - listitem:
      - link "История просмотра …":
        - /url: /my/history/
    - listitem:
      - link "Плейлисты …":
        - /url: /my/playlists/
    - listitem:
      - link "Смотреть позже …":
        - /url: /my/future/
    - listitem:
      - link "Комментарии …":
        - /url: /my/comments/
  - separator
- main:
  - button
  - button
  - list:
    - listitem:
      - link "Главная":
        - /url: /
    - listitem:
      - link "Рекомендации":
        - /url: /feeds/new_main_page/for-you/
    - listitem:
      - link "День России":
        - /url: /feeds/12june/
    - listitem:
      - link "Фильмы":
        - /url: /feeds/new_main_page/movies/
    - listitem:
      - link "Сериалы":
        - /url: /feeds/new_main_page/series/
    - listitem:
      - link "Телешоу":
        - /url: /feeds/new_main_page/tv/
    - listitem:
      - link "Спорт":
        - /url: /feeds/new_main_page/sport/
    - listitem:
      - link "Блогеры":
        - /url: /feeds/new_main_page/ugc/
    - listitem:
      - link "Новости":
        - /url: /feeds/new_main_page/news/
    - listitem:
      - link "Музыка":
        - /url: /feeds/new_main_page/music/
    - listitem:
      - link "Подкасты":
        - /url: /feeds/new_main_page/podcasts/
    - listitem:
      - link "Детям":
        - /url: /feeds/new_main_page/kids/
    - listitem:
      - link "ТВ онлайн":
        - /url: /feeds/new_main_page/lives/
  - button:
    - button "Следующий слайд":
      - img
  - button:
    - button "Предыдущий слайд":
      - img
  - list:
    - listitem:
      - link "16+ ТНТ_Караоке Клаб_промобаннер":
        - /url: /video/4c707fc85db56294020ac43ab430a829/
        - paragraph: 16+
        - img "ТНТ_Караоке Клаб_промобаннер"
    - listitem:
      - link "ДЕНЬ РОССИИ 2025_промобаннер":
        - /url: /feeds/12june/
        - img "ДЕНЬ РОССИИ 2025_промобаннер"
    - listitem:
      - link "PREMIER_Кракен_главная":
        - /url: https://premier.one/show/kraken?utm_source=rutube_banner-main&utm_medium=cpm&utm_campaign=media_mi_premier-kraken_media_2025-06&utm_content=media_ts_&erir_identifier=CQH36pWzJqLuYYVAqzTAk5b2xWcjGcd2gW
        - img "PREMIER_Кракен_главная"
    - listitem:
      - link "16+ Битва шефов. Звезды_промобаннер":
        - /url: /video/719a6eab5b2a98f31a817061597120e0/
        - paragraph: 16+
        - img "Битва шефов. Звезды_промобаннер"
    - listitem:
      - link "12+ RUTUBE ПО ИНТЕРЕСАМ":
        - /url: /profile/interests/
        - paragraph: 12+
        - img "RUTUBE ПО ИНТЕРЕСАМ"
    - listitem:
      - link "Суббота_Женись на мне немедленно_промобаннер":
        - /url: /video/ebabf21a8fd5ed50ed682733f390aa1c/
        - img "Суббота_Женись на мне немедленно_промобаннер"
    - listitem:
      - link "18+ Мистерия фильм_Первая на русском троне (2023)":
        - /url: /video/ff5a0d49efd4f1f64c835fb28c464057/
        - paragraph: 18+
        - img "Мистерия фильм_Первая на русском троне (2023)"
    - listitem:
      - link "12+ Трон, отмеченный Богом (Денцу)_промобаннер":
        - /url: /video/ea0842d53929abaa7ca7a09f7724f8e4/
        - paragraph: 12+
        - img "Трон, отмеченный Богом (Денцу)_промобаннер"
    - listitem:
      - link "18+ Злые языки | Выпуск 3, Сезон 5 | Тимур Хайдаров":
        - /url: /video/723d67df0439510fb9983a2b344326a7/
        - paragraph: 18+
        - img "Злые языки | Выпуск 3, Сезон 5 | Тимур Хайдаров"
  - region "Для вас":
    - link "Для вас":
      - /url: /feeds/for_you/
      - heading "Для вас" [level=2]
      - img
    - region "Галерея Для вас":
      - region "Для вас":
        - group:
          - button:
            - img
          - article:
            - 'link "Приколы для взрослых Лучшие приколы 2023 Час Приколов Смех Юмор #приколы #смех #юмор #fails Приколы для взрослых Лучшие приколы 2023 Час Приколов Смех Юмор #приколы #смех #юмор #fails 18+"':
              - /url: /video/814f8fef1ced20ce731f858a9e2f399c/
              - 'img "Приколы для взрослых Лучшие приколы 2023 Час Приколов Смех Юмор #приколы #смех #юмор #fails"'
              - 'img "Приколы для взрослых Лучшие приколы 2023 Час Приколов Смех Юмор #приколы #смех #юмор #fails"'
              - text: 18+
            - 'link "Приколы для взрослых Лучшие приколы 2023 Час Приколов Смех Юмор #приколы #смех #юмор #fails"':
              - /url: /video/814f8fef1ced20ce731f858a9e2f399c/
            - button:
              - img
            - button "Иконка канала FailTube Приколы Для Взрослых 18+":
              - img "Иконка канала FailTube Приколы Для Взрослых 18+"
            - link "FailTube Приколы Для Взрослых 18+":
              - /url: /video/person/23958112/
            - text: 334 тыс. просмотров 18 дней назад
        - group:
          - article:
            - 'link "Фильм Аватар 2: Путь воды, 2022 года, смотреть онлайн в хорошем качестве Фильм Аватар 2: Путь воды, 2022 года, смотреть онлайн в хорошем качестве 16+ 03:12:38"':
              - /url: /video/8efd61cf3a260d5e79c841d68fbf55d9/
              - 'img "Фильм Аватар 2: Путь воды, 2022 года, смотреть онлайн в хорошем качестве"'
              - 'img "Фильм Аватар 2: Путь воды, 2022 года, смотреть онлайн в хорошем качестве"'
              - text: 16+ 03:12:38
            - 'link "Фильм Аватар 2: Путь воды, 2022 года, смотреть онлайн в хорошем качестве"':
              - /url: /video/8efd61cf3a260d5e79c841d68fbf55d9/
            - button:
              - img
            - button "Иконка канала Александр Лапиков":
              - img "Иконка канала Александр Лапиков"
            - link "Александр Лапиков":
              - /url: /video/person/25644480/
            - img
            - img
            - text: 848 тыс. просмотров 11 дней назад
        - group:
          - article:
            - link "Minecraft в кино (2025) | A Minecraft Movie (Дубляж) Minecraft в кино (2025) | A Minecraft Movie (Дубляж) 12+ 01:41:41":
              - /url: /video/a547227132793b5cb6deb5a07fd35aa9/
              - img "Minecraft в кино (2025) | A Minecraft Movie (Дубляж)"
              - img "Minecraft в кино (2025) | A Minecraft Movie (Дубляж)"
              - text: 12+ 01:41:41
            - link "Minecraft в кино (2025) | A Minecraft Movie (Дубляж)":
              - /url: /video/a547227132793b5cb6deb5a07fd35aa9/
            - button:
              - img
            - button "Иконка канала КИНОЧИЛЛ — фильмы и сериалы":
              - img "Иконка канала КИНОЧИЛЛ — фильмы и сериалы"
            - link "КИНОЧИЛЛ — фильмы и сериалы":
              - /url: /video/person/56746813/
            - text: 556 тыс. просмотров Месяц назад
        - group:
          - article:
            - link "Хозяйка Медной горы | Дмитрий Геллер Хозяйка Медной горы | Дмитрий Геллер 18+":
              - /url: /video/158dd70178d8381a6d977039b22b83ba/
              - img "Хозяйка Медной горы | Дмитрий Геллер"
              - img "Хозяйка Медной горы | Дмитрий Геллер"
              - text: 18+
            - link "Хозяйка Медной горы | Дмитрий Геллер":
              - /url: /video/158dd70178d8381a6d977039b22b83ba/
            - button:
              - img
            - button "Иконка канала Телеканал 2x2":
              - img "Иконка канала Телеканал 2x2"
            - link "Телеканал 2x2":
              - /url: /video/person/581730/
            - img
            - text: 47,8 тыс. просмотров 17 дней назад
        - group:
          - article:
            - link "Comedy Club, 20 сезон, 19 выпуск Comedy Club, 20 сезон, 19 выпуск 16+ 47:43":
              - /url: /video/e910e96cc68846141737c276f448b467/
              - img "Comedy Club, 20 сезон, 19 выпуск"
              - img "Comedy Club, 20 сезон, 19 выпуск"
              - text: 16+ 47:43
            - link "Comedy Club, 20 сезон, 19 выпуск":
              - /url: /video/e910e96cc68846141737c276f448b467/
            - button:
              - img
            - button "Иконка канала PREMIER":
              - img "Иконка канала PREMIER"
            - link "PREMIER":
              - /url: /metainfo/tv/624463/
            - text: 169 тыс. просмотров 3 дня назад
        - group:
          - article:
            - link "МУЛЬТИКИ ДЛЯ ДЕТЕЙ ХОМЯК ИЗБЕГАЕТ ПАДАЮЩИЕ КУБИКИ мультики для детей МУЛЬТИКИ ДЛЯ ДЕТЕЙ ХОМЯК ИЗБЕГАЕТ ПАДАЮЩИЕ КУБИКИ мультики для детей 12+ 12:56":
              - /url: /video/ee2ccb4f83d47ec45b27e8cfebea6f9b/
              - img "МУЛЬТИКИ ДЛЯ ДЕТЕЙ ХОМЯК ИЗБЕГАЕТ ПАДАЮЩИЕ КУБИКИ мультики для детей"
              - img "МУЛЬТИКИ ДЛЯ ДЕТЕЙ ХОМЯК ИЗБЕГАЕТ ПАДАЮЩИЕ КУБИКИ мультики для детей"
              - text: 12+ 12:56
            - link "МУЛЬТИКИ ДЛЯ ДЕТЕЙ ХОМЯК ИЗБЕГАЕТ ПАДАЮЩИЕ КУБИКИ мультики для детей":
              - /url: /video/ee2ccb4f83d47ec45b27e8cfebea6f9b/
            - button:
              - img
            - button "Иконка канала Добрые мультики про машинки":
              - img "Иконка канала Добрые мультики про машинки"
            - link "Добрые мультики про машинки":
              - /url: /video/person/42340710/
            - img
            - img
            - text: 35,9 тыс. просмотров 18 дней назад
        - group:
          - article:
            - link "Последнее Королевство Семь Королей Должны Умереть Последнее Королевство Семь Королей Должны Умереть 18+ 01:53:39":
              - /url: /video/b7c4640778c1293dc2ed2bb8e3d6cca2/
              - img "Последнее Королевство Семь Королей Должны Умереть"
              - img "Последнее Королевство Семь Королей Должны Умереть"
              - text: 18+ 01:53:39
            - link "Последнее Королевство Семь Королей Должны Умереть":
              - /url: /video/b7c4640778c1293dc2ed2bb8e3d6cca2/
            - button:
              - img
            - button "Иконка канала Сериал Последнее Королевство":
              - img "Иконка канала Сериал Последнее Королевство"
            - link "Сериал Последнее Королевство":
              - /url: /video/person/33604771/
            - text: 207 тыс. просмотров 11 дней назад
        - group:
          - article:
            - link "Мама для Лаки – Готовим большой торт для гусениц! Игры для детей с Машей Капуки Мама для Лаки – Готовим большой торт для гусениц! Игры для детей с Машей Капуки 6+ 06:06":
              - /url: /video/d70df3e83ea138d4ecb2e36dd0ae5da0/
              - img "Мама для Лаки – Готовим большой торт для гусениц! Игры для детей с Машей Капуки"
              - img "Мама для Лаки – Готовим большой торт для гусениц! Игры для детей с Машей Капуки"
              - text: 6+ 06:06
            - link "Мама для Лаки – Готовим большой торт для гусениц! Игры для детей с Машей Капуки":
              - /url: /video/d70df3e83ea138d4ecb2e36dd0ae5da0/
            - button:
              - img
            - button "Иконка канала Капуки Девочки":
              - img "Иконка канала Капуки Девочки"
            - link "Капуки Девочки":
              - /url: /video/person/23593405/
            - img
            - text: 41,8 тыс. просмотров 17 дней назад
  - link:
    - /url: /page-2/
- img
- text: Откройте все возможности RUTUBE
- list:
  - listitem: • Персональные подборки
  - listitem: • Реакции и комментарии
  - listitem: • Просмотр видео в фоне
- button "Войти":
  - paragraph: Войти
- img
```

# Test source

```ts
   1 | import { test as base } from '@playwright/test';
   2 | import { MainPage } from '../pages/mainPages';
   3 | // Declare the types of your fixtures.
   4 | type MyFixtures = {
   5 |   mainPage: MainPage
   6 | };
   7 |
   8 | // Extend base test by providing "todoPage" and "settingsPage".
   9 | // This new "test" can be used in multiple test files, and each of them will get the fixtures.
  10 | export const test = base.extend<MyFixtures>({
  11 |   mainPage: async ({ page }, use) => {
  12 |     // Set up the fixture.
  13 |     const mainPage = new MainPage(page);
  14 |      await mainPage.open();
  15 |      await mainPage.closeCookies()
> 16 |      await page.getByLabel('Закрыть').click()
     |                                       ^ Error: locator.click: Test timeout of 30000ms exceeded.
  17 |     
  18 |
  19 |     // Use the fixture value in the test.
  20 |     await use(mainPage);
  21 |
  22 |
  23 |   },
  24 |
  25 | });
  26 | export { expect } from '@playwright/test';
```