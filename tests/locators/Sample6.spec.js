import {test,expect} from '@playwright/test';
// test.describe('Flipkart Suite',()=>{
    
//     test('test1',async({page})=>{
//     await page.goto("https://www.flipkart.com/");
//     await page.getByPlaceholder("Search for Products, Brands and More").fill("iphone 16");
//     await page.keyboard.press('Enter');
//     await page.waitForTimeout(2000);    
//     await expect(page,'Title is not displayed').toHaveTitle(await page.title());
//     console.log("Title is validated");  
    
// })
// })
test.describe('Amazon Suite',()=>{
    test('test1',async({page})=>{
    await page.goto("https://www.flipkart.com/");
    await page.getByPlaceholder("Search for Products, Brands and More").fill("iphone 16");
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000);    
    await expect(page,'Title is not displayed').toHaveTitle(await page.title());
    console.log("Title is validated");  
    
}),
    test('test2',async({page})=>{
    console.log(page.viewportSize());

    
    await page.goto("https://www.amazon.in/");
    await page.locator('//a[@id="nav-cart"]/descendant::div[@id="nav-cart-text-container"]/span[contains(text(), "Cart")]').click();
   
    await page.setViewportSize({width:500,height:800});
     await page.waitForTimeout(4000);
    console.log(page.viewportSize());
    let d=new Date().getTime();
    console.log(d);
    
    await page.screenshot({path:`screenshots/${d}.png`});
    
    
})
})

