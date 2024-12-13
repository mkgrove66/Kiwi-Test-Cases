import { test, expect } from '@playwright/test';

test.use({
    viewport: {
        height: 1080,
        width: 1920
    }
});
test('test', async ({ page }) => {
    test.setTimeout(120000);
    await page.goto('https://learn-doc.test.josce.mil/moodle/login/index.php?saml=off');
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill('Admin');
    await page.waitForTimeout(1000);
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('23wesdxc@#WESDXC');
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Log in' }).click();
    await page.getByRole('menuitem', { name: 'Site administration' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('tab', { name: 'Users' }).click();
    await page.getByRole('link', { name: 'User management' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'New user' }).click();
    await page.getByLabel('Username', { exact: true }).click();
    await page.getByLabel('Username', { exact: true }).fill('mkg2024');
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Click to enter text Edit' }).click();
    await page.getByLabel('New password', { exact: true }).fill('Seymour2024$!$!');
    await page.waitForTimeout(1000);
    await page.getByLabel('First name', { exact: true }).click();
    await page.getByLabel('First name', { exact: true }).fill('Mike');
    await page.waitForTimeout(1000);
    await page.getByLabel('Last name', { exact: true }).click();
    await page.getByLabel('Last name', { exact: true }).fill('Grove');
    await page.waitForTimeout(1000);
    await page.getByLabel('Email address', { exact: true }).click();
    await page.getByLabel('Email address', { exact: true }).fill('mkg@gmail.com');
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.getByRole('link', { name: 'Users' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Category: Accounts' }).click();
    await page.getByRole('link', { name: 'Browse list of users' }).click();
    await page.getByRole('button', { name: 'Filters' }).click();
    await page.getByLabel('Username operator').selectOption('1');
    await page.getByLabel('Username value').click();
    await page.getByLabel('Username value').fill('mkg');
    await page.getByRole('button', { name: 'Apply' }).click();
    await page.getByRole('button', { name: 'Filters (1)' }).click();
    await page.getByRole('checkbox', { name: 'Mike Grove' }).check();
    await page.getByRole('button', { name: 'Actions ' }).click();
    await page.getByLabel('Delete', { exact: true }).click();
    await page.getByRole('button', { name: 'Delete user' }).click();
    await page.waitForTimeout(1000);
    await page.getByLabel('User menu').click();
    await page.getByRole('menuitem', { name: 'Log out' }).click();
    await page.waitForTimeout(10000);
});