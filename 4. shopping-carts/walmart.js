/**
 * @name Walmart shopping cart
 *
 * @desc Looks for a Nintendo's Mario Odyssey and adds it to the shopping cart.
 */
const puppeteer = require('puppeteer')
const screenshot = 'shopping_walmart.png'
try {
  puppeteer.launch().then(async browser => {
    const page = await browser.newPage()
    await page.setViewport({ width: 1280, height: 800 })
    await page.goto('https://www.walmart.com/ip/Super-Mario-Odyssey-Nintendo-Switch/56011600', { waitUntil: 'networkidle2' })
    await page.click('button.prod-ProductCTA--primary')
    await page.waitForSelector('.Cart-PACModal-ItemInfoContainer')
    await page.screenshot({path: screenshot})
    await browser.close()
    console.log('See screen shot: ' + screenshot)
  })
} catch (err) {
  console.error(err)
}
