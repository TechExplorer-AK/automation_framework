import {test,expect} from '@playwright/test';
test('test1',async({browser})=>{
    let context=await browser.newContext();
    let page=await context.newPage();
    await page.goto('https://testautomationpractice.blogspot.com/');
    let pagePromise=context.waitForEvent('page');
    await page.getByText('New Tab').click();
    let newPage=await pagePromise;
   let text= await newPage.getByText('SQL Query:').nth(4).textContent();
   console.log(text);
   

})