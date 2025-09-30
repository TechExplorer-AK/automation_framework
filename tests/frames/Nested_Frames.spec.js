import {test,expect} from '@playwright/test';

test('frames',async({page})=>{
await page.on('dialog',async dialog=>{
    console.log(await dialog.type());
    console.log(dialog.message());
    await page.waitForTimeout(3000)
    await dialog.accept();

    
    
})
  await page.goto('https://demoapps.qspiders.com/ui/frames/frameAlert?sublist=4')
  let frame1=await page.frameLocator('iframe[class*="w-full h"]');
  await frame1.locator("//p[text()='A high-performance laptop with Retina display.']/following-sibling::button").click();
  await page.waitForTimeout(3000);
  await frame1.getByRole('button',{name:'Pay Now'}).click();
  //await page.waitForTimeout(3000);
 
})