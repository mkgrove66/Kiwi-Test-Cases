import { test, expect } from '@playwright/test';

// test.use({
//     viewport: {
//         height: 1080,
//         width: 1920
//     }
// });

test('test', async ({ page }) => {
    test.setTimeout(360000);
    await page.goto('https://tftr.test.josce.mil/#/');
    await page.getByLabel('Username').click();
    await page.getByLabel('Username').fill('9677899107');
    await page.waitForTimeout(500);
    await page.getByLabel('Password', { exact: true }).click();
    await page.getByLabel('Password', { exact: true }).fill('myTr!an!ng_$A!C_10-09');
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.goto('https://tftr.test.josce.mil/#/Training/Profile');
    await page.getByLabel('Primary Navigation').locator('a').filter({ hasText: 'Manage' }).click();
    await page.waitForTimeout(500);
    await page.locator('a').filter({ hasText: 'Work Center' }).click();
    await page.waitForTimeout(500);
    await page.locator('a').filter({ hasText: 'Task Groups' }).click();
    await page.getByRole('button', { name: 'Add New Task Group' }).click();
    await page.waitForTimeout(500);
    await page.getByPlaceholder('Name of task group').fill('Test1a');
    await page.waitForTimeout(500);
    await page.getByLabel('Create').click();
    await page.waitForTimeout(500);
    await page.locator('tftr-task-group-selector').getByLabel('chevron-down-icon').locator('svg').click();
    await page.waitForTimeout(500);
    await page.getByText('Test1a').click();
    await page.waitForTimeout(500);
    await page.getByLabel('Select All').check();
    await page.getByRole('button', { name: 'Add', exact: true }).click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(500);
    await page.locator('#PageLoadingWrapper').click();
    await page.getByRole('button', { name: 'Last Name, First Name' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'All' }).click();
    await page.waitForTimeout(500);
    await page.getByLabel('Name').locator('path').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'EDIPI' }).click();
    await page.waitForTimeout(500);
    await page.getByPlaceholder('0000000000').click();
    await page.getByPlaceholder('0000000000').fill('9487857909');
    await page.waitForTimeout(500);
    await page.getByRole('cell', { name: 'Dixon, Steven', exact: true }).click();
    await page.locator('a').filter({ hasText: 'Manage ITR' }).click();
    await page.waitForTimeout(500);
    await page.locator('tftr-task-group-selector').getByLabel('chevron-down-icon').locator('svg').click();
    await page.getByText('Test1a').click();
    await page.waitForTimeout(500);
    await page.locator('#selectAllTaskGroupCheckbox-input').check();
    await page.getByRole('button', { name: 'Add' }).click();
    await page.getByRole('button', { name: 'Assign' }).click();
    await page.getByLabel('Primary Navigation').locator('a').filter({ hasText: 'Manage' }).click();
    await page.locator('a').filter({ hasText: 'Work Center' }).click();
    await page.waitForTimeout(500);
    await page.locator('a').filter({ hasText: 'Task Groups' }).click();
    await page.waitForTimeout(500);
    await page.locator('tftr-task-group-selector').getByLabel('chevron-down-icon').locator('svg').click();
    await page.getByText('Test1a').click();
    await page.waitForTimeout(500);
    await page.locator('.Form__CheckBoxWrap > .Form__Wrap').first().click();
    await page.locator('task-group-mtl-task-card').filter({ hasText: 'Organizational Structure Upload date: 06-Nov-24' }).getByLabel('').check();
    await page.getByRole('button', { name: 'Add', exact: true }).click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(500);
    await page.locator('task-group-task-card').filter({ hasText: 'Logistics enlisted' }).getByLabel('').check();
    await page.getByRole('button', { name: 'Remove' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(500);
});