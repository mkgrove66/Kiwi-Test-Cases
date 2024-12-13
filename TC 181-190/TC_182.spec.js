import { test, expect } from '@playwright/test';

test.use({
    viewport: {
        height: 1080,
        width: 1920
    }
});

test('test', async ({ page }) => {
    test.setTimeout(150000);
    await page.goto('https://learn-doc.test.josce.mil/moodle/login/index.php?saml=off');
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill('Admin');
    await page.waitForTimeout(500);
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('23wesdxc@#WESDXC');
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Log in' }).click();
    await page.getByRole('menuitem', { name: 'Site administration' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('link', { name: 'Manage badges' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Add a new badge' }).click();
    await page.getByLabel('Name', { exact: true }).click();
    await page.getByLabel('Name', { exact: true }).fill('MKG');
    await page.waitForTimeout(500);
    await page.getByLabel('Description').click();
    await page.getByLabel('Description').fill('MKG');
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Choose a file...' }).click();
    await page.getByLabel('Attachment').click();
    await page.getByLabel('Attachment').setInputFiles('Orioles.jpg');
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Upload this file' }).click();
    await page.getByRole('button', { name: 'Create badge' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('link', { name: 'Manage badges' }).click();
    await page.waitForTimeout(10000);
    await page.getByLabel('User menu').click();
    await page.waitForTimeout(500);
    await page.getByRole('menuitem', { name: 'Log out' }).click();
    await page.waitForTimeout(1000);
});