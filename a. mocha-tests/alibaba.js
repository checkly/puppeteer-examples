/**
 * @name Alibaba product search
 * @desc Searches Alibaba.com for a product and checks if the results show up
 */

// Require the Puppeteer module and the built-in assert module
const assert = require('assert')
const puppeteer = require('puppeteer')
let browser
let page

// In the Mocha "before" hook, create the browser and page objects.
before(async () => {
  browser = await puppeteer.launch()
  page = await browser.newPage()
})

// Start a test suite with two tests.
describe('Alibaba Search', () => {
  it('has search input', async () => {
    // Set the view port size so we can "see" the whole page
    await page.setViewport({ width: 1280, height: 800 })
    await page.goto('https://www.alibaba.com', { waitUntil: 'networkidle0' })

    // Assert the search input is there
    const searchInput = await page.$('input.ui-searchbar-keyword')
    assert.ok(searchInput)
  }).timeout(20000)

  it('shows search results after search input', async () => {
    // search for the term "luck cat"
    await page.type('input.ui-searchbar-keyword', 'lucky cat')

    // click the first result and assert it returns something
    await page.click('input.ui-searchbar-submit')
    await page.waitForSelector('[data-content="abox-ProductNormalList"]')
    const firstProduct = await page.$('.item-content')
    assert.ok(firstProduct)
  }).timeout(10000)
})

after(async () => {
  await browser.close()
})
