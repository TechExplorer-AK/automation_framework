export class Organizations{
    /**
     * 
     * @param {import ('playwright').Page} page 
     */
    constructor(page){
        this.createOrgLink=page.getByTitle('Create Organization...');
        
    }
    
    
}