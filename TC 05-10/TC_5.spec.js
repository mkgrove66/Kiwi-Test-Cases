import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://learn-doc.test.josce.mil/moodle/login/index.php?saml=off');
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill('automation_test');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('Seymour2024$!$!');
    await page.getByRole('button', { name: 'Log in' }).click();
});