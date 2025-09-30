import {test,expect} from '@playwright/test';
import path from 'node:path';
test('test1',async({page})=>{
 await page.goto('https://demoapps.qspiders.com/ui/fileUpload?sublist=0')
 await page.locator('#resume').setInputFiles(path.join(__dirname,'../TestScriptData.xlsx'));
 expect(await page.locator('#resume').textContent()).toContain('TestScriptData.xlsx');
   
})