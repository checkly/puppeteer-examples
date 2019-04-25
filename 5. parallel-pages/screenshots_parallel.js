/**
 * @name Screenshots parallel pages
 *
 * @desc Allow parallel processing screenshot
 */

const puppeteer = require('puppeteer')
const parallel = [1, 2, 3, 4, 5];

(async () => {
  let browser = await puppeteer.launch()
  let promises = parallel.map(async number => {
    let page = await browser.newPage();
      return Promise.all([
      page.setViewport({ width: 1280, height: 800 }),
      page.goto(`https://en.wikipedia.org/wiki/${number}`),
      page.screenshot({ path: `wikipedia_${number}.png` })
    ])
  })
  await Promise.all(promises)
  await browser.close()
})();