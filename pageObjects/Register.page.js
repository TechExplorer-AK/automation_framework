// import {text,expect} from '@playwright/test';

export class RegisterPage{
    /**
     * 
     * @param {import ('playwright').Page} page 
     */
    constructor(page){
        this.page=page;
        this.nameTF=page.getByPlaceholder('Enter your name');
        this.emailTF=page.getByPlaceholder('Enter Your Email');
        this.pwdTF=page.getByPlaceholder('Enter your password');
        this.rgtrbtn=page.getByRole('button',{name:'Register'});

    }
    async register(username,email,password){
        await this.nameTF.fill(username);
        await this.emailTF.fill(email);
        await this.pwdTF.fill(password);
        await this.rgtrbtn.click();
    }
}