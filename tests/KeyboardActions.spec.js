import{chromium,test,expect} from '@playwright/test';
test('test1',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html#')
    for(let i=0;i<=10;i++){
        await page.keyboard.down('ArrowDown');
    }
    // await page.waitForTimeout(3000)
    await page.keyboard.up('ArrowDown')
    await page.getByText('Copy Text').click({clickCount:2});
    //    await page.waitForTimeout(3000)
       await page.locator('#draggable').hover();
       await page.mouse.down();
       
       await page.locator('#droppable').hover();
       await page.mouse.up();
       await page.waitForTimeout(4000)

})