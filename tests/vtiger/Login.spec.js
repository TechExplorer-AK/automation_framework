import {test,expect} from '@playwright/test';
import { Login } from '../../pageObjects/Login.page';
test('login',async ({page}) => {
    await page.goto('http://49.249.28.218:8888/index.php?action=Login&module=Users')
   let lp=new Login(page) ;
   await lp.login('admin','admin');
})