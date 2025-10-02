import {test,expect} from '@playwright/test';
test('test1',async({page})=>{
   
    await page.goto('https://demoapps.qspiders.com/ui/mouseHover?sublist=0');
    await page.waitForLoadState('domcontentloaded')
   let  textfd=await page.getByPlaceholder('Enter Password');
   await textfd.fill('ghdgshdh')
    await page.locator('//img[contains(@src,"/assets/hide")] ').hover();
    await page.mouse.down();
    //=============================================
    await page.waitForSelector("[placeholder='Enter Password']",{state:'visible'});
    console.log(await textfd.getAttribute('value'));
    
   //==============================================================
    await page.mouse.up();
    await page.waitForTimeout(4000)
    // await page.keyboard.down('ArrowDown')
    // await page.keyboard.up('ArrowDown')
    // await page.waitForTimeout(3000)
    
    
})