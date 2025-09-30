import {test,expect} from '@playwright/test';
test('test1',async({browser})=>{
    let context= await browser.newContext();
    let page=await context.newPage();
    await page.goto("https://www.amazon.in/");
    // test.slow(); 
    await page.locator('//a[@id="nav-cart"]/descendant::div[@id="nav-cart-text-container"]/span[contains(text(), "Cart")]').click();
    
})