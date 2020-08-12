/**
 * @name Staples shopping cart
 * @desc Goes to staples.com and adds a some facepaint to an empty shopping cart. Validates the correct amount.
 */

const assert = require('assert')
const puppeteer = require('puppeteer')
let browser
let page

before(async () => {
  browser = await puppeteer.launch()
  page = await browser.newPage()
})

describe('Staples shopping cart', () => {
  it('shows the painting category', async () => {
    await page.setViewport({ width: 1280, height: 800 })
    await page.goto('https://www.staples.com/Painting-Supplies/cat_CL140420/bww15', { waitUntil: 'networkidle2' })
    const category = await page.$eval('h1', txt => txt.textContent.trim())
    assert.equal(category, 'Painting')
  }).timeout(20000)

  it('adds the product to the cart', async () => {
    await page.click('button.add-to-cart-btn.addToCart')
    await page.waitForSelector('h4.cart-items-header')
    const quantity = await page.$eval('span.cart-count-msg', txt => txt.textContent.trim())
    assert.equal(quantity, '1')
  }).timeout(10000)
})

after(async () => {
  await browser.close()
})
