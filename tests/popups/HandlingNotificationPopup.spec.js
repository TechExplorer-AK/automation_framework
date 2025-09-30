import {test,expect} from '@playwright/test';
test('test1',async({browser})=>{
    let context =await browser.newContext({
        permissions:['notifications']//overriding default permission by Allowing permission
    })
   let page=await context.newPage();
   await  page.goto('https://demoapps.qspiders.com/ui/browserNot?sublist=0');
   await page.locator('#browNotButton').click();
//    await page.waitForTimeout(3000);
   let res=await page.evaluate(()=>{ return Notification.permission})//validating permission
   console.log(res); 
 
   
   

})