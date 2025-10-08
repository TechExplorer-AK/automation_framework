export class Welcome{
    /**
     * @param {import ('playwright').Page} page
     */
    constructor(page){
        this.flightBkUrl= page.locator('//img[@alt="Flight Bookings"]')

    }
}