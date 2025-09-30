import {test} from'@playwright/test'
import { readMultipleData } from '../../Utility/ReadMultipleData'
test('test1',async({page})=>{
    const data=await readMultipleData('Login','./TestData/data1.xlsx')
    console.log(data);
    
})