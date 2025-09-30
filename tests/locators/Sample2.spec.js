import {test,expect} from '@playwright/test';
test('test1',async({page})=>{
    await page.goto("https://www.amazon.in/");
    await page.locator('//a[@id="nav-cart"]/descendant::div[@id="nav-cart-text-container"]/span[contains(text(), "Cart")]').click();
    
}) 