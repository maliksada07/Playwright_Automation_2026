import { test } from "@playwright/test";

test('USPS Mouse Hover Test', async ({ page }) => {
    //navigate to usps.com
    await page.goto('https://www.usps.com/')


    //hover on the "Mail & Ship" menu item
    await page.locator("//*[text()='Quick Tools']").hover(); 


    //click on track a package link 
    await page.locator("//*[@alt='Tracking Icon']").click() 
});