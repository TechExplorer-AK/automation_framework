import {test} from '@playwright/test';
import cmdata from '../../TestData/common_data.json' assert { type: 'json' };
import { Welcome } from '../../pageObjects/Welcome.page';
import { Booking } from '../../pageObjects/Booking.page'
import excel from 'exceljs' ;
import { readMultipleData } from '../../Utility/ReadMultipleData';
import { type } from 'os';
import path from 'path';

test('test1',async ({page})=>{
    let  wp=new Welcome(page);
    await page.goto(cmdata.url)
    await wp.flightBkUrl.click()
  let bp=new Booking(page);
  let edata= await readMultipleData('BookingDetails',path.join(__dirname,'../../TestData/data1.xlsx'))
  console.log(edata);
  
  await bp.fromTF.fill(edata[1][0])
  await page.waitForTimeout(2000)
  await bp.fromOpt.click()
  // await page.waitForTimeout(4000)
  await bp.toTF.fill(edata[1][1])
  await page.waitForTimeout(2000)
  await bp.toOpt.click()
  await page.waitForTimeout(2000)
  await bp.dateTF.click()
  await bp.selDate.click()
  await bp.searBtn.click()
   await page.waitForTimeout(2000)
  let opts=await page.locator('//div[contains(@class,"jvoo")] | //div[contains(@class,"O+irE")]').all();
  // console.log(opts);
  console.log(opts);
  
  for(let ele of opts){
    console.log(await ele.textContent());
    
  }
  
})

 