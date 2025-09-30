export class Login{
    /**
     * 
     * @param {import ('playwright').Page} page 
     */
    constructor(page){
        this.usernameTF=page.locator('[name="username"]')
        this.pwdTF=page.locator('[name="password"]')
        this.loginBtn=page.locator('[value="Log In"]')
    }
    async login(username,pwd){
        await this.usernameTF.fill(username)
        await this.pwdTF.fill(pwd)
        await this.loginBtn.click()
    }
}