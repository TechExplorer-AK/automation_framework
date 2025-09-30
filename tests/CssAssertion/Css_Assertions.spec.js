import {test,expect} from '@playwright/test';
test('test1',async({page})=>{
    await page.goto('https://demoapps.qspiders.com/ui/button/buttonDisabled?sublist=4');
    //Validating checkbox is enabled or disabled 
    await expect(page.getByRole('checkbox',{name:'To submit please accept our'})).toBeDisabled();
    console.log(await page.getByText('terms & conditions').isEnabled());
    console.log(await page.getByRole('button',{name:'Yes'}).isEnabled());
    
    
})