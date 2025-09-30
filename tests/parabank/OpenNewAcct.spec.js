import {test,expect} from '@playwright/test';
import { Login } from '../../pageObjects/LoginPage.page';
import { HomePage } from '../../pageObjects/HomePage.page';
import { OpenNewAcct } from '../../pageObjects/OpenNewAcct.page';
import { readMultipleData } from '../../Utility/ReadMultipleData';
test('login',async ({page}) => {
    await page.goto('https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC')
    let lp=new Login(page)
    let data1=await readMultipleData('ParaBank_Login','./TestData/data1.xlsx')
    await lp.login(data1[1][0],data1[1][1])

    let hp=new HomePage(page);
    await hp.openAcctLink.click()
    let oa=new OpenNewAcct(page)
   
  let data2=await readMultipleData('OpenAcc','./TestData/data1.xlsx');
   console.log(data2);
    await oa.openAcc(data2[1][0],data2[1][1])

})