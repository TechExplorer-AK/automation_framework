import {test,expect} from '@playwright/test';
import path from 'node:path';
test('test1',async({page})=>{
 
   await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html')
   // await page.waitForTimeout(4000)
   let text=await page.locator('.firefox-memory')
    const textColor = await text.evaluate(el =>
    window.getComputedStyle(el).getPropertyValue('background-color')
  );

  console.log(textColor); 
   await expect(text).toHaveCSS('background-color',textColor);
   console.log('validated!!!');

   //=================================================================================
   let start=await page.getByText('START');

   let strtColor= await start.evaluate(e1=> window.getComputedStyle(e1).getPropertyValue('background-color'));
   console.log(strtColor);
   await expect(start).toHaveCSS('background-color',strtColor);
   await start.click();
   await page.waitForTimeout(3000)
   let stop=await page.getByText('STOP');
  let btColor= await stop.evaluate(e1=> window.getComputedStyle(e1).getPropertyValue('background-color'));
   //  expect()).toHaveCSS('color','rgb(255, 0, 0)');
   console.log(btColor);
   await expect(stop).toHaveCSS('background-color',btColor);
   
   
})