import{chromium,test,expect} from '@playwright/test';
test('test1',async({browser})=>{
    let time=new Date().getTime();
    let browser_instance=await chromium.launch();//browser instance
    let browser_context=await browser_instance.newContext();
    let page=await browser_context.newPage();
    await page.goto('https://jqueryui.com/droppable/');
    await page.screenshot({path:`./screenshots/${time}.png`});
   let iframe=await page.frameLocator('.demo-frame');//switching window to frame
   await iframe.locator('#draggable').dragTo(await iframe.locator('#droppable'));
   await page.screenshot({path:`./screenshots/dragAndDrop.png`});
   await page.waitForTimeout(4000);
})