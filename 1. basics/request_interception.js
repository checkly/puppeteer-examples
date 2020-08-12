
/**
 * @name request interception
 *
 * @desc Uses Puppeteer request interception, blocks images from loading, then snaps a basic screenshot of the full New York Time homepage and saves it a .png file.
 *
 * @see {@link https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#screenshot}
 * @see {@link https://github.com/puppeteer/puppeteer/blob/master/docs/api.md#pagesetrequestinterceptionvalue}
 */

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.setRequestInterception(true)
  page.on('request', async (request) => {
    if (request.resourceType() == 'image') {
      await request.abort()
    } else {
      await request.continue()
    }
  })
  await page.setViewport({ width: 1280, height: 800 })
  await page.goto('https://www.nytimes.com/')
  await page.screenshot({ path: 'nytimes.png', fullPage: true })
  await browser.close()
})()
