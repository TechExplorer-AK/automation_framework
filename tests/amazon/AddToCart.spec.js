import {test} from '@playwright/test';
import cdata from '../../TestData/commonData.json' ;
import { Home } from '../../pageObjects/amazon/Home.page';
import { readMultipleData } from '../../Utility/ReadMultipleData';
import path from 'path';
import { fileURLToPath } from 'url';

test('test1',async({page})=>{
   await page.goto(cdata.url)
   let hp=new Home(page);
    

   let edata=await readMultipleData('Amazon',path.join(__dirname,'../../TestData/data1.xlsx'))
   console.log(edata);
   //=========================================
   console.log("commmited changes")
   
//    await hp.searchTF.fill(edata[])
})
