import {test,expect} from '@playwright/test';
test('test1',async({page})=>{
    await page.goto('https://demoapps.qspiders.com/ui/alert/prompt?sublist=1');
   page.on('dialog',async dialog=>{
        console.log(await dialog.type());
        await page.waitForTimeout(3000);
         console.log(dialog.message());
         await page.waitForTimeout(3000);
        await dialog.accept('confirmation popup');
        // await page.waitForTimeout(3000);
        //  await expect(dialog.message()).toContain('delete');
        const text = await page.locator('//div[@class="relative shadow-md sm:rounded-lg"]/section').textContent();
        await expect(text).toContain('confirmation popup');
                
        
   })
   await page.getByRole('checkbox',{value:false}).nth(0).click();
   await page.getByRole('button',{name:'Delete',exact:true}).click();
   await page.waitForTimeout(4000);
})