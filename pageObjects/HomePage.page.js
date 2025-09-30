export class HomePage{
    /**
     * 
     * @param {import ('playwright').Page} page 
     */
    constructor(page){
      this.openAcctLink=page.getByText('Open New Account')
    }
    
}