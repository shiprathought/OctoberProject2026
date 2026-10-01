import { test, expect } from '@playwright/test';
import * as allure from 'allure-js-commons';

test.skip('user can log in to OpenCart', async ({ page }) => {

 await page.goto('/opencart/index.php?route=account/login');
  await page.locator('input[name="email"]').fill('anabil44nbc@gmail.com');
  await page.locator('input[name="password"]').fill('ForhadM');
  await page.getByRole('button', { name: 'Login' }).click();
  console.log(await page.title(),': Homepage title');
  expect(await page.getByRole('link', { name: 'Logout' }).last().isVisible()).toBeTruthy();
  expect(await page.getByRole('heading', { name: 'My Account' }).first().isVisible()).toBeTruthy();

console.log(await page.getByRole('heading',{level:2}).allInnerTexts());
// await page.getByRole('textbox', { name: 'Search' }).fill('iphone');
// await page.locator('button.btn.btn-default.btn-lg').click();

console.log("hi");


});
