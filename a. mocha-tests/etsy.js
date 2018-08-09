/**
 * @name Etsy shopping cart
 * @desc Goes to etsy.com, select the first knick knack and adds it to the shopping cart.
 */

const assert = require('assert')
const puppeteer = require('puppeteer')
let browser
let page

before(async () => {
  browser = await puppeteer.launch()
  page = await browser.newPage()
  await page.setExtraHTTPHeaders({ 'Accept-Language': 'en-GB,en-US;q=0.9,en;q=0.8' })
  await page.setViewport({ width: 1280, height: 800 })
})

describe('Etsy shopping cart', () => {
  it('shows the privacy modal', async () => {
    await page.goto('https://www.etsy.com/c/art-and-collectibles/collectibles/figurines?ref=catnav-66', { waitUntil: 'networkidle2' })
    await page.waitForSelector('[data-gdpr-single-choice-accept]')
    await page.click('[data-gdpr-single-choice-accept]')
  }).timeout(20000)

  it('selects a product', async () => {
    await page.waitForSelector('.placeholder-content')
    const products = await page.$$('.placeholder-content')
    await products[5].click()
    await page.waitForSelector('button.btn-buy-box')
    assert.ok('Add to cart button showing')
  }).timeout(10000)

  it('adds the product to the cart', async () => {
    await page.click('button.btn-buy-box')
    await page.waitForSelector('h1.item-count')
    const quantity = await page.$eval('h1.item-count', counter => { return counter.textContent.trim() })
    assert.equal(quantity, '1 item in your cart')
  }).timeout(10000)
})

after(async () => {
  await browser.close()
})
