import { test, expect } from '@playwright/test';

// test.use({
//     viewport: {
//         height: 1080,
//         width: 1920
//     }
// });

test('test', async ({ page }) => {
    test.setTimeout(120000);
    await page.goto('https://tftr.test.josce.mil/#/');
    await page.getByLabel('Username').click();
    await page.getByLabel('Username').fill('9677899107');
    await page.getByLabel('Password', { exact: true }).click();
    await page.getByLabel('Password', { exact: true }).fill('myTr!an!ng_$A!C_10-09');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByLabel('Primary Navigation').locator('a').filter({ hasText: 'Manage' }).click();
    await page.locator('a').filter({ hasText: 'Personnel' }).click();
    await page.getByRole('button', { name: 'Last Name, First Name' }).click();
    await page.getByRole('button', { name: 'All' }).click();
    await page.locator('#mat-select-value-5').click();
    await page.getByText('EDIPI').click();
    await page.getByPlaceholder('0000000000').fill('9342971729');
    await page.getByRole('cell', { name: 'Tucker, Sienna', exact: true }).click();
    await page.locator('a').filter({ hasText: 'Manage ITR' }).click();
    await page.getByLabel('Secondary Navigation').locator('a').nth(1).click();
    await page.getByText('Responsibilities Upload date: 07-Nov-24', { exact: true }).click();
    await page.getByLabel('close-icon').locator('path').click();
    await page.getByText('Recall personnel Upload date').click();
    await page.getByLabel('Start Date').click();
    await page.getByLabel('Nov 26,').click();
    await page.getByLabel('Task Complete Date').click();
    await page.getByLabel('Nov 26,').click();
    await page.getByRole('button', { name: 'Sign' }).click();
    await page.getByText('Fundamentals Upload date: 07-Nov-').click();
    await page.getByLabel('Start Date').click();
    await page.getByLabel('Nov 26,').click();
    await page.getByLabel('Task Complete Date').click();
    await page.getByLabel('Nov 26,').click();
    await page.getByRole('button', { name: 'Sign' }).click();
    await page.locator('a').filter({ hasText: 'Nicholas Taylor' }).click();
    await page.locator('a').filter({ hasText: 'Logout' }).click();
    await page.goto('https://tftr.test.josce.mil/#/');
    await page.getByLabel('Username').click();
    await page.getByLabel('Username').fill('9342971729');
    await page.getByLabel('Password', { exact: true }).click();
    await page.getByLabel('Password', { exact: true }).fill('myTr!an!ng_$A!C_10-09');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.locator('a').filter({ hasText: 'ITR' }).click();
    await page.getByText('Recall personnel Upload date').click();
    await page.getByRole('button', { name: 'Sign' }).click();
    await page.locator('a').filter({ hasText: 'Tucker, Sienna' }).click();
    await page.locator('a').filter({ hasText: 'Logout' }).click();
    await page.getByLabel('Username').click();
    await page.getByLabel('Username').fill('9677899107');
    await page.getByLabel('Password', { exact: true }).click();
    await page.getByLabel('Password', { exact: true }).fill('myTr!an!ng_$A!C_10-09');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByLabel('Primary Navigation').locator('a').filter({ hasText: 'Manage' }).click();
    await page.locator('a').filter({ hasText: 'Work Center' }).click();
    await page.getByText('Recall personnel Upload date').click();
    await page.locator('mtl-task-card').filter({ hasText: 'Recall personnel Upload date' }).getByLabel('').check();
    await page.getByRole('button', { name: 'Remove' }).click();
    await page.locator('a').filter({ hasText: 'Manage' }).click();
    await page.locator('a').filter({ hasText: 'Personnel' }).click();
    await page.getByRole('button', { name: 'Last Name, First Name' }).click();
    await page.getByRole('button', { name: 'All' }).click();
    await page.locator('#mat-select-value-7').click();
    await page.getByText('EDIPI').click();
    await page.getByPlaceholder('0000000000').fill('9342971729');
    await page.getByRole('cell', { name: 'Tucker, Sienna', exact: true }).click();
    await page.locator('a').filter({ hasText: 'Manage ITR' }).click();
    await page.getByLabel('Secondary Navigation').locator('a').nth(1).click();
    await page.locator('.PageNav__Icon--container').click();
    await page.getByText('Archived').click();
    await page.locator('a').filter({ hasText: 'Nicholas Taylor' }).click();
    await page.locator('a').filter({ hasText: 'Logout' }).click();
});