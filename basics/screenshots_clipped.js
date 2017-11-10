/**
 * @name screenshots clipped
 *
 * @desc Grabs and clips out just the stock tickers on the Yahoo finance page
 *
 * @see {@link https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#screenshot}
 */

const viewPort = { width: 1280, height: 800 }
const options = {
  path: 'clipped_stocktickers.png',
  fullPage: false,
  clip: {
    x: 0,
    y: 240,
    width: 1000,
    height: 100
  }
}

const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.setViewport(viewPort)
  await page.goto('https://finance.yahoo.com/')
  await page.screenshot(options)
  await browser.close()
})()
