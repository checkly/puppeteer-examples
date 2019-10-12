/**
 * @name Amazon search
 *
 * @desc Looks for a "nyan cat pullover" on amazon.com, goes two page two clicks the third one.
 */
const puppeteer = require('puppeteer')
const screenshot = 'amazon_nyan_cat_pullover.png'
try {
  (async () => {
    const browser = await puppeteer.launch({ headless: false})
    const page = await browser.newPage()
    await page.setViewport({ width: 1280, height: 800 })
    await page.goto('https://www.amazon.com')
    await page.type('#twotabsearchtextbox', 'nyan cat pullover')
    await page.click('input.nav-input')
    await page.waitFor(3000);
    await page.waitForSelector('#s-skipLinkTargetForMainSearchResults')
    await page.screenshot({path: 'amazon_nyan_cat_pullovers_list.png'})
    await page.click('li[class="a-last"] > a')
    await page.waitFor(3000);
    await page.waitForSelector('#s-skipLinkTargetForMainSearchResults')
    const pullovers = await page.$$('a.a-link-normal.a-text-normal')
    await pullovers[2].click()
    await page.waitForSelector('#ppd')
    await page.screenshot({path: screenshot})
    await browser.close()
    console.log('See screenshot: ' + screenshot)
  })()
} catch (err) {
  console.error(err)
}
