export class Booking{
    /**
     * @param {import ('playwright').Page} page
     */
    constructor(page){
        this.fromTF=page.locator("//input[contains(@class,'ZjUTQC')]")
        this.fromOpt=page.locator("//div[contains(@class,'ecAhsD uzeEmI')]").first()
      this.toTF=page.locator("//input[contains(@class,'rLGgLC')]").last()
      this.toOpt=page.locator("//div[contains(@class,'ecAhsD uzeEmI')]").last()
      this.dateTF=page.locator('//input[contains(@class,"rOnAcM")]')
      this.selDate=page.locator('//button[contains(@fdprocessedid,"ays")]')
      this.alldates=page.locator('//table[@class="RYl+NW"]').first().all();
    }
}