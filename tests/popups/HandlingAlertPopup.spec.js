import {test,expect} from '@playwright/test';
test('test1',async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/');
 page.on('dialog',async dialog=>{
    await dialog.accept();
 })
   await page.getByRole('button',{name:'Simple Alert'}).click();
   await page.waitForTimeout(3000)

})