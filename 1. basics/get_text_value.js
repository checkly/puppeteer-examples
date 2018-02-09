/**
 * @name get text value of an element
 *
 * @desc Gets the text value of an element by using the page.evaluate method
 *
 */
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://news.ycombinator.com/news')
  const name = await page.evaluate(() => document.querySelector('.hnname > a').innerText)
  console.log(name)
  await browser.close()
})()
