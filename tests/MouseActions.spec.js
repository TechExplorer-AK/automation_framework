import{test,expect} from '@playwright/test';
test('test1',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html#')
    await page.locator('#draggable').hover();
    await page.mouse.down();
     await page.waitForTimeout(3000);
    let drop=await page.locator('#droppable').boundingBox();
    console.log(drop);
    // await drop.hover()  
    // await page.mouse.move(drop.x,drop.y);//will not work sometimes
    await page.mouse.move(drop.x + drop.width / 2, drop.y + drop.height / 2)//dropping element at the center
    await page.mouse.up();
    await page.waitForTimeout(4000);
    
})