import {test} from '@playwright/test'
import { readExcelData } from '../../Utility/ReadDataExcel'
test('test1',async ({page})=>{
    let data=await readExcelData('sample','./TestData/data1.xlsx',1,1)
   console.log(data);
   
})