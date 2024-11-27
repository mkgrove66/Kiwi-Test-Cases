import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    test.setTimeout(240000);
    await page.goto('https://tftr.test.josce.mil/#/');
    await page.getByLabel('Username').click();
    await page.getByLabel('Username').fill('9677899107');
    await page.getByLabel('Username').click();
    await page.getByLabel('Password', { exact: true }).click();
    await page.getByLabel('Password', { exact: true }).fill('myTr!an!ng_$A!C_10-09');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByLabel('Primary Navigation').locator('a').filter({ hasText: 'Manage' }).click();
    await page.locator('a').filter({ hasText: 'Work Center' }).click();
    await page.locator('mtl-task-card').filter({ hasText: 'Nuclear Weapons Related' }).getByLabel('').check();
    await page.locator('#taskCoverageRequirement').click();
    await page.locator('#taskCoverageRequirement').fill('3');
    await page.locator('tftr-task-selection-footer').getByRole('button', { name: 'Save' }).click();
    await page.getByText('ORGANIZATION AND MISSION').click({    button: 'right'  });
    await page.locator('mtl-task-card').filter({ hasText: 'Suspect/Unsuitable materiel' }).getByLabel('').check();
    await page.getByText('Suspect/Unsuitable materiel').click({  button: 'right' });
    await page.getByRole('button', { name: 'Remove' }).click({  button: 'right' });
    await page.getByRole('button', { name: 'Remove' }).uncheck();
    await page.locator('mtl-task-card').filter({ hasText: 'Suspect/Unsuitable materiel' }).getByLabel('').uncheck();
  });