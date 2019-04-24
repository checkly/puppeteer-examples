/**
 * @name Screenshots parallel pages
 *
 * @desc Allow parallel processing screenshot
 */

const puppeteer = require('puppeteer')
const parallel = [1, 2, 3, 4, 5];

(async () => {
  let browser = await puppeteer.launch()
  for (const number of parallel) {
    console.log('Page ID Spawned', number)
    let page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 })
    await page.goto(`https://en.wikipedia.org/wiki/${number}`)
    await page.screenshot({ path: `wikipedia_${number}.png` })
  }
  await browser.close()
})()
