export class Login{
    /**
     * 
     * @param {import ('playwright').Page} page 
     */
    constructor(page){
        this.usernameTF=page.locator('[name="user_name"]');
        this.pwdTF=page.locator('[name="user_password"]')
        this.loginButton=page.locator('#submitButton');
    }
    async login(username,password){
        await this.usernameTF.fill(username)
        await this.pwdTF.fill(password)
        await this.loginButton.click()
    }
}