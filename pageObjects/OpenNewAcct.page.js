export class OpenNewAcct{
    /**
     * 
     * @param {import ('playwright').Page} page 
     */
    constructor(page){
        this.accTypeDD=page.locator('#type')
        this.amtDepositDD=page.locator('#fromAccountId')
        this.openAcctBtn=page.locator('.button').nth(1)
    }
    async openAcc(opt1,opt2){
        await this.accTypeDD.selectOption(opt1)
        await this.amtDepositDD.selectOption(opt2)
        await this.openAcctBtn.click()
    }
    
}