/**
 * @name keyboard
 *
 * @desc types into a text editor
 *
 * @see {@link https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#pagehoverselector}
 */
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://google.com/')
  await page.focus('input.gLFyf.gsfi')
  await page.keyboard.type('just input a keyword')
  await page.screenshot({ path: 'keyboard-google.png' , fullPage: true})
  await browser.close()
})()
