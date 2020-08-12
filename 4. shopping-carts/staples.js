/**
 * @name Staples shopping cart
 *
 * @desc Goes to the face paint category and adds to the shopping cart.
 */
const puppeteer = require('puppeteer')
const screenshot = 'shopping_staples.png'
try {
  (async () => {
    const browser = await puppeteer.launch({ headless: true })
    const page = await browser.newPage()
    await page.setViewport({ width: 1280, height: 800 })
    await page.goto('https://www.staples.com/Painting-Supplies/cat_CL140420/bww15', { waitUntil: 'networkidle2' })
    await page.click('button.add-to-cart-btn.addToCart')
    await page.waitForSelector('h4.cart-items-header')
    await page.screenshot({ path: screenshot })
    await browser.close()
    console.log('See screen shot: ' + screenshot)
  })()
} catch (err) {
  console.error(err)
}
