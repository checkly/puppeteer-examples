/**
 * @name Duck Duck Go search
 */

const puppeteer = require('puppeteer')

(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://duckduckgo.com/', { waitUntil: 'networkidle2' })
  await page.type('#search_form_input_homepage', 'Puppeteer')
  const searchValue = await page.$eval('#search_form_input_homepage', el => el.value)
  console.log(searchValue)
  await browser.close()
})()
