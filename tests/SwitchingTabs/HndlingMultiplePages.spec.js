import {test,expect} from '@playwright/test';
test('test1',async({browser})=>{

    let context=await browser.newContext();
    let page= await context.newPage();
    await page.goto('https://demoapps.qspiders.com/ui/browser?sublist=0')
    let pagePromise=context.waitForEvent('page');//Waiting to Complete the event
    await page.getByRole('button',{name:'view more'}).first().click();
    let newpage=await pagePromise ;//Waiting for promise to get resolve
    await newpage.getByRole('button',{name:'Add to Cart'}).click();
    await newpage.waitForTimeout(3000);
   console.log( context.pages().length);
   let maintab=context.pages()[0];
   let childtab=await context.pages()[1];
   await maintab.bringToFront();//to bring main page at front
   await newpage.waitForTimeout(4000);
   console.log(await maintab.title());
   console.log(await childtab.title());
   
   ;
})