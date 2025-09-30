import {test,expect} from '@playwright/test';
test('test1',async({page})=>{ 
    await page.goto('https://demoapps.qspiders.com/ui/alert?sublist=0');
   page.on('dialog',async dialog=>{
        console.log(await dialog.type());
        await dialog.accept();
         console.log(await  dialog.message());
         await expect(dialog.message()).toContain('delete');
         
   })
   await page.getByRole('checkbox',{value:true}).nth(0).click();
   await page.getByRole('button',{name:'Delete',exact:true}).click();
   await page.waitForTimeout(4000);
})