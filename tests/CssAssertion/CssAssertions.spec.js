import {test,expect} from '@playwright/test';
import path from 'node:path';
test('test1',async({page})=>{
 
   await page.goto('https://demoapps.qspiders.com/ui/button?sublist=0')

   let yesbtn=await page.getByRole('button',{name:'Yes'})
   let yescolor=await yesbtn.evaluate(e1=> window.getComputedStyle(e1).getPropertyValue('background-color'))
   console.log(yescolor);//Before clicking
   
   await expect(yesbtn).toHaveCSS('background-color',yescolor);
   await yesbtn.click();
//    await yesbtn.waitFor({state: 'visible'})
   await page.waitForTimeout(2000)
   let yes_clr=await yesbtn.evaluate(e1=> window.getComputedStyle(e1).getPropertyValue('background-color'));
   console.log(yes_clr);//after clicking
   await expect(yesbtn).toHaveCSS('background-color',yes_clr);
//    console.log(yes_clr);
    await page.waitForTimeout(3000)
   let text=await page.getByText('You selected "Yes"');
   let textclr=await text.evaluate(e1=>window.getComputedStyle(e1).getPropertyValue('color'))
   console.log(textclr);
   await expect(text).toHaveCSS('color',textclr)

   
})