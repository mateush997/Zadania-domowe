// @ts-check
import { test, expect } from '@playwright/test';
import { Playground } from './playground.js';

test.beforeEach(async ({ page }) => {
  const playground = new Playground(page);
  await playground.navigateTo();
});

test('has title', { tag: '@fajnetesty' }, async ({ page }) => {
  await expect(page).toHaveTitle('Komponenty Testowe');
});

test('check pressing button', { tag: ['@fajnetesty', '@stabilnetesty'] }, async ({ page }) => {
  await expect(page.locator('#btn-state')).toHaveText('Status: idle');
  await page.getByTestId('btn-click-me').click();
  await expect(page.locator('#btn-state')).toHaveText('Status: clicked');
});

test('check pressing button podejście 2', async ({ page }) => {
  const playground = new Playground(page);
  await expect(page.getByRole('heading', { name: "Button" })).toBeVisible();
  await expect(playground.sectionButton).toBeVisible();
  await playground.clickClickableButton();
  await playground.clickClickableButton();
});

const testDataArray = ['test', 'test2', 'coś'];

testDataArray.forEach(kolejnyElementTablicy => {
  test(`check input field for value: ${kolejnyElementTablicy}`, async ({ page }) => {
    const playground = new Playground(page);
    await playground.fillTextInputField(kolejnyElementTablicy);
    await playground.sendFilledText();
    await playground.checkOutputMessage(kolejnyElementTablicy);
  });
});

//TODO ZADANIE DOMOWE! - Refactor
test('check checkboxes', async ({ page }) => {
  const playground = new Playground(page);
  await playground.checkAllCheckboxes();
});

test('check email field: for only first part of email', async ({ page }) => {
  const playground = new Playground(page);
  await playground.fillEmailField('test');
  await playground.submitEmail();
  await expect(playground.emailValidationMessage).toContainText(playground.incorrectEmailMessage);
});

test('check email field: for first part plus @', async ({ page }) => {
  const playground = new Playground(page);
  await playground.fillEmailField('test@');
  await playground.submitEmail();
  await expect(playground.emailValidationMessage).toContainText(playground.incorrectEmailMessage);
});

test('check email field: for email without domain', async ({ page }) => {
  const playground = new Playground(page);
  await playground.fillEmailField('test@test');
  await playground.submitEmail();
  await expect(playground.emailValidationMessage).toContainText(playground.incorrectEmailMessage);
});

test('check email field: for correct email', async ({ page }) => {
  const playground = new Playground(page);
  await playground.fillEmailField('test@test.com');
  await playground.submitEmail();
  await expect(playground.emailValidationMessage).toContainText(playground.correctEmailMessage);
});