import {test} from '@playwright/test'
import { writeDataExcel } from '../../Utility/WriteDataExcel'
import path from 'node:path'

test('WriteData',async({page})=>{
   await writeDataExcel('Login2','./TestData/data1.xlsx',3,2)
})