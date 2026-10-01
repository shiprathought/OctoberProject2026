
import { test as base } from '@playwright/test';
import { BasePage } from '../pages/BasePage';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
type pageFixture = {
  basePage: BasePage,
  loginPage: LoginPage,
  homePage: HomePage
};

export const test = base.extend<pageFixture>({
  basePage: async ({ page }, use) => {
    let basePage=new BasePage(page);
    await use(basePage);
  },
  loginPage: async ({ page }, use) => {
    let loginPage= new LoginPage(page);
    await use(loginPage);
  },

   homePage: async ({ page }, use) => {
    let homePage= new HomePage(page);
    await use(homePage);
  }
});

export { expect } from '@playwright/test';
