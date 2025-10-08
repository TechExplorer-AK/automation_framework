import {test,expect} from '@playwright/test';
import cmdata from '../../TestData/common_data.json'  assert { type: 'json' };
import { Welcome } from '../../pageObjects/flipkart/Welcome.page.js';
import { Booking } from '../../pageObjects/flipkart/Booking.page.js'
import excel from 'exceljs' ;
import { readMultipleData } from '../../Utility/ReadMultipleData';

test('FlightBooking',async ({page})=>{
    let  wp=new Welcome(page);
    await page.goto(cmdata.url)
    await wp.flightBkUrl.click()
  let bp=new Booking(page);
  let edata= await readMultipleData('BookingDetails','./TestData/data1.xlsx')
  console.log(edata);
  
  await bp.fromTF.fill(edata[1][0])
  await page.waitForTimeout(2000)
  await bp.fromOpt.click()
  // await page.waitForTimeout(4000)
  await bp.toTF.fill(edata[1][1])
  await page.waitForTimeout(2000)
  await bp.toOpt.click()
  await page.waitForTimeout(2000)
  // await bp.dateTF.click()
  // await bp.selDate.click()
  // await page.waitForTimeout(2000)
  let oct=await bp.alldates;

  for(let d of oct){
      if(d.textContent()=='8'){
         await d.click()
         break;
      }
  }

     
})

