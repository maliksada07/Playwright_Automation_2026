import { test } from "@playwright/test";

test('Navigate to NBC Network', async ({ page }) => {
    //navigate to nbc.com
    await page.goto('https://www.nbc.com/')

    //wait for few seconds
    await page.waitForTimeout(3000)

    //capture the title of the page
    let title = await page.title()
    console.log("Title of the page is : " + title)
});