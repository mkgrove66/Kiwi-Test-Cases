import { test, expect } from '@playwright/test';

test.use({
    viewport: {
        height: 1080,
        width: 1920
    }
});

test('test', async ({ page }) => {
    test.setTimeout(240000);
    await page.goto('https://learn-doc.test.josce.mil/moodle/login/index.php?saml=off');
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill('automation_test');
    await page.waitForTimeout(1000);
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('Seymour2024$!$!');
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Log in' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('menuitem', { name: 'Site administration' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('tab', { name: 'Users' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Assign system roles' }).click();
    await page.waitForTimeout(1000);
    // await page.getByLabel('SyntaxError').getByLabel('Close').click();
    await page.getByRole('link', { name: 'Common Unit Training Manager' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('cell', { name: 'Potential users   Search Clear' }).getByLabel('Search').click();
    await page.getByRole('cell', { name: 'Potential users   Search Clear' }).getByLabel('Search').fill('Dao Nguyen');
    await page.getByRole('cell', { name: 'Potential users   Search Clear' }).getByLabel('Search').press('Enter');
    // await page.setDefaultTimeout(60000);
    await page.getByLabel('Potential users').selectOption('1147368');
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: '◄ Add' }).click();
    await page.waitForTimeout(1000);
    await page.goto('https://learn-doc.test.josce.mil/moodle/admin/roles/assign.php?contextid=1&roleid=24');
    await page.getByRole('cell', { name: 'Existing users   Search Clear' }).getByLabel('Search', { exact: true }).click();
    await page.getByRole('cell', { name: 'Existing users   Search Clear' }).getByLabel('Search', { exact: true }).fill('Dao Nguyen');
    await page.getByRole('cell', { name: 'Existing users   Search Clear' }).getByLabel('Search', { exact: true }).press('Enter');
    await page.setDefaultTimeout(30000);
    await page.getByLabel('Existing users').selectOption('1147368');
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Remove ►' }).click();
    await page.waitForTimeout(1000);
    await page.goto('https://learn-doc.test.josce.mil/moodle/admin/roles/assign.php?contextid=1&roleid=24');
    await page.locator('#addselect_clearbutton').click();
    await page.waitForTimeout(1000);
    await page.locator('#removeselect_clearbutton').click();
    await page.waitForTimeout(1000);
    await page.getByLabel('User menu').click();
    await page.waitForTimeout(1000);
    await page.getByRole('menuitem', { name: 'Log out' }).click();
    await page.waitForTimeout(1000);
});