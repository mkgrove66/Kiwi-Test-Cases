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
    await page.getByRole('menuitem', { name: 'Site administration' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('tab', { name: 'Learning' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Manage courses and categories' }).click();
    await page.waitForTimeout(1000);
    await page.getByLabel('Miscellaneous - subcategory').click();
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Create new course' }).click();
    await page.waitForTimeout(1000);
    await page.getByLabel('Course full name', { exact: true }).click();
    await page.getByLabel('Course full name', { exact: true }).fill('National Football League');
    await page.waitForTimeout(1000);
    await page.getByLabel('Course short name', { exact: true }).click();
    await page.getByLabel('Course short name', { exact: true }).fill('NFL');
    await page.waitForTimeout(1000);
    await page.getByLabel('Enable', { exact: true }).uncheck();
    await page.locator('iframe[title="Rich text area"]').contentFrame().getByRole('paragraph').click();
    await page.waitForTimeout(1000);
    await page.locator('iframe[title="Rich text area"]').contentFrame().getByLabel('Rich text area. Press ALT-0').fill('blah, blah, blah');
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Save and display' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Proceed to course content' }).click();
    await page.waitForTimeout(1000);
    await page.getByLabel('Edit mode').check();
    await page.goto('https://learn-doc.test.josce.mil/moodle/course/view.php?id=15113');
    await page.getByRole('menuitem', { name: 'Settings' }).click();
    await page.waitForTimeout(1000);
    await page.getByLabel('Course full name', { exact: true }).click();
    await page.getByLabel('Course full name', { exact: true }).fill('Major League Baseball');
    await page.waitForTimeout(1000);
    await page.getByLabel('Course short name', { exact: true }).click();
    await page.getByLabel('Course short name', { exact: true }).fill('MLB');
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Save and display' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('menuitem', { name: 'Information' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('menuitem', { name: 'Settings' }).click();
    await page.getByLabel('User menu').click();
    await page.waitForTimeout(1000);
    await page.getByRole('menuitem', { name: 'Log out' }).click();
    await page.waitForTimeout(1000);
});