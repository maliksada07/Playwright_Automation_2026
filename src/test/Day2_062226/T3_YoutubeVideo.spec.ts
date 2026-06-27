import { test } from "@playwright/test";

test('Youtube Video Test', async ({ page }) => {
    // navigate to youtube.com
    await page.goto('https://www.youtube.com/')

    // enter a keyword in the search field and submit
    await page.locator("//*[@name='search_query']").fill('cat videos')
    await page.keyboard.press('Enter')

    // wait for results 
    await page.waitForTimeout(3000) 

    //click on the video that says funniest cat videos ever
    const firstVideo = page.locator("//*[text()='The Funniest Cat Videos Ever']").first();
    await firstVideo.click();

    //wait for results 
    await page.waitForTimeout(3000)

    
});