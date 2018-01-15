/**
 * @name Alibaba product search
 * @desc Searches Alibaba.com for a product and checks if the results show up
 */

const assert = require('assert')
const puppeteer = require('puppeteer')
let browser
let page

before(async () => {
  browser = await puppeteer.launch()
  page = await browser.newPage()
})

describe('Alibaba Search', () => {
  it('has search input', async () => {
    await page.setViewport({ width: 1280, height: 800 })
    await page.goto('https://www.alibaba.com', { waitUntil: 'networkidle0' })
    const searchInput = await page.$('input.ui-searchbar-keyword')
    assert.ok(searchInput)
  }).timeout(20000)

  it('shows search results after search input', async () => {
    await page.type('input.ui-searchbar-keyword', 'lucky cat')
    await page.click('input.ui-searchbar-submit')
    await page.waitForSelector('[data-content="abox-ProductNormalList"]')
    const firstProduct = await page.$('.item-content')
    await page.screenshot({ path: 'ali.png' })
    assert.ok(firstProduct)
  }).timeout(10000)
})

after(async () => {
  await browser.close()
})
