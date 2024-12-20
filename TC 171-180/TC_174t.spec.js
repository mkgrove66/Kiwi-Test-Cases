import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    test.setTimeout(240000);
    await page.goto('https://tftr.test.josce.mil/#/');
    await page.getByLabel('Username').click();
    await page.getByLabel('Username').fill('9677899107');
    await page.waitForTimeout(500);
    await page.getByLabel('Password', { exact: true }).click();
    await page.getByLabel('Password', { exact: true }).fill('myTr!an!ng_$A!C_10-09');
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByLabel('Primary Navigation').locator('a').filter({ hasText: 'Manage' }).click();
    await page.waitForTimeout(500);
    await page.locator('a').filter({ hasText: 'Work Center' }).click();
    await page.waitForTimeout(500);
    await page.locator('mtl-task-card').filter({ hasText: 'Materiel In-Check Process -' }).getByLabel('').check();
    await page.locator('#taskCoverageRequirement').click();
    await page.locator('#taskCoverageRequirement').fill('3');
    await page.waitForTimeout(500);
    await page.locator('tftr-task-selection-footer').getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(500);
    await page.locator('mtl-task-card').filter({ hasText: 'Materiel In-Check Process -' }).getByLabel('').check();
    await page.getByRole('button', { name: 'Remove' }).click();
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(500);
    await page.locator('mtl-task-card').filter({ hasText: 'Nuclear Weapons Related' }).getByLabel('').check();
    await page.getByRole('button', { name: 'Remove' }).click();
    await page.waitForTimeout(500);
    await page.locator('[data-test="nav-logo"]').click();
    await page.locator('#PageLoadingWrapper').click();
    await page.waitForTimeout(500);
    await page.locator('a').filter({ hasText: 'Nicholas Taylor' }).click();
    await page.locator('a').filter({ hasText: 'Logout' }).click();
    await page.waitForTimeout(500);
});