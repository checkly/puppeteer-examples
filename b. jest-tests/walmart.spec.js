/**
 * @name Walmart shopping cart
 * @desc Goes to walmart.com and adds a Nintendo game to an empty shopping cart. Validates the correct amount.
 */

const puppeteer = require('puppeteer')
let browser
let page

beforeAll(async () => {
  browser = await puppeteer.launch()
  page = await browser.newPage()
  await page.tracing.start({path: 'trace.json'})
})

describe('Walmart shopping cart', () => {
  test('shows the correct product', async () => {
    await page.setViewport({ width: 1280, height: 800 })
    await page.goto('https://www.walmart.com/ip/Super-Mario-Odyssey-Nintendo-Switch/56011600', { waitUntil: 'networkidle2' })
    const productTitle = await page.$eval('h1.prod-ProductTitle', txt => txt.textContent)
    expect(productTitle).toBe('Super Mario Odyssey, Nintendo, Nintendo Switch, 045496590741')
  }, 20000)

  test('adds the product to the cart', async () => {
    await page.click('button.prod-ProductCTA--primary')
    await page.waitForSelector('.copy-mini.pos-item-qty')
    const quantity = await page.$eval('.copy-mini.pos-item-qty', txt => txt.textContent)
    expect(quantity).toBe('(1 item)')
  }, 10000)

  afterAll(async () => {
    await page.tracing.stop()
    await browser.close()
  })
})
