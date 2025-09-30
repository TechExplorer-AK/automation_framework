import {test,expect} from '@playwright/test';
test('flipkart',async({page})=>{
    await page.goto("https://www.flipkart.com/");
    await page.getByPlaceholder("Search for Products, Brands and More").fill("iphone 16");
    // await page.getByPlaceholder("Search for Products, Brands and More").press('Enter');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000)
    // let tiltle=await page.title()
    // console.log(tiltle);
    
    await expect(page,'Title is not displayed').toHaveTitle(await page.title());
    console.log("Title is validated");
    
    
    
    
    
    
})

