import {test,expect} from '@playwright/test';
test('test1',async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/')
page.on('dialog',async dialog=>{
    console.log(await dialog.defaultValue());//Fetching pre-filled Data
    
    await dialog.accept('Jack!!!');
    
    // await page.waitForTimeout(2000);
    // await expect(page.locator('//button[@id="promptBtn"]/following-sibling::p')).toBeVisible();
    let text=await page.locator('#demo').textContent()
  //  let text=await page.locator('//button[@id="promptBtn"]/following-sibling::p').textContent();
   console.log(text);
   
    await expect(text).toContain('Hello Jack!!!');
    
})
await page.getByRole('button',{name:'Prompt Alert'}).click();
// await page.waitForTimeout(3000)


})