import {test,expect} from '@playwright/test';
test.describe(()=>{
    test.beforeAll(async()=>{
        console.log("Executing beforeAll....");
        
    })
    test.beforeEach(async()=>{
        console.log("Executing beforeEach......");

    })
    test.afterEach(async()=>{
        console.log("Executing afterEach......");
    })
    test.afterAll(async()=>{
        console.log("Executing afterAll......");
    })
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
test('amazon',async({page})=>{
    await page.goto("https://www.amazon.in/");
    await page.locator('//a[@id="nav-cart"]/descendant::div[@id="nav-cart-text-container"]/span[contains(text(), "Cart")]').click();
    
})
test.skip('amazon_page',async({page})=>{
    await page.goto("https://www.amazon.in/");
    await page.locator('//a[@id="nav-cart"]/descendant::div[@id="nav-cart-text-container"]/span[contains(text(), "Cart")]').click();
    
})


})