import { test } from '@playwright/test';
import { HomePage } from '../pages_objects/homePage.pages'
import { LinksPage } from '../pages_objects/LinksPage.pages'
import { FormsPage } from '../pages_objects/formsPage.pages';
import { WidgetsPage } from '../pages_objects/widgetsPage.pages';
import { RadioPage } from '../pages_objects/RadiosPage.pages';
import { DynamicPropertiesPage } from '../pages_objects/dynamic_propertiesPage.pages';
import { ProfilePage } from '../pages_objects/profilePage.pages';

//npx playwright test tools_qa.spec.ts pour lancer le test 21/21 passed ;)

test('Navigate + Elements' , async ({ page }) => {
    const homepage = new HomePage(page);
    await homepage.Navigate();
    await homepage.goToElements();
});

test('GotoLinks + testLinks' , async ({ page }) => {
    const homepage = new HomePage(page);
    await page.goto('https://demoqa.com/');
    await homepage.Navigate();
    await homepage.goToElements();

    const elementslink = new LinksPage(page);
    await elementslink.clickLink();
    await elementslink.clickFollowingLinks();
});

test('GotoForms + testForms', async ({page}) => {
    const homepage = new HomePage(page);
    await homepage.Navigate();
    await homepage.goToElements();

    const elementsforms = new FormsPage(page);
    await elementsforms.clickForms();
    await elementsforms.fillForm();
});

test('GotoWidgets + testWidgetsMenu + testWidgetHovers', async ({page}) => {
    const homepage = new HomePage(page);
    await homepage.Navigate();
    await homepage.goToElements();
    const elementswidgets = new WidgetsPage(page);
    await elementswidgets.clickWidgetsMenu();
    await elementswidgets.goodWidgetsMenu();
    await elementswidgets.clickWidgetsHovers();
    await elementswidgets.Hovers();
});

test('GotoRadio + test Radio Button', async ({page}) => {
    const homepage = new HomePage(page);
    await homepage.Navigate();
    await homepage.goToElements();

    const elementsradio = new RadioPage(page);
    await elementsradio.clickRadio();
    await elementsradio.checkRadio();
});

test('GotoDynamicPropreties + test DynamicPropreties', async ({page}) => {
    const homepage = new HomePage(page);
    await homepage.Navigate();
    await homepage.goToElements();

    const elementsdyna = new DynamicPropertiesPage(page);
    await elementsdyna.clickDynamicProperties();
    await elementsdyna.changeColors();
});

test('GotoProfiles + test Profiles', async ({page}) => {
    const homepage = new HomePage(page);
    await homepage.Navigate();
    await homepage.goToElements();

    const profiles = new ProfilePage(page);
    await profiles.clickBookStoreApplicationMenu();
    await profiles.fillProfiles();
});





