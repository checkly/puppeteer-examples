/**
 * @name Amazon product search
 * @desc Searches Amazon.com for a product and checks if the results show up
 */

const puppeteer = require('puppeteer')
let browser
let page

beforeAll(async () => {
  browser = await puppeteer.launch()
  page = await browser.newPage()
})

describe('Amazon Homepage', async () => {
  test('has search input', async () => {
    await page.setViewport({ width: 1280, height: 800 })
    await page.goto('https://www.amazon.com', { waitUntil: 'networkidle0' })
    const searchInput = await page.$('#twotabsearchtextbox')
    expect(searchInput).toBeTruthy()
  })

  test('shows search results after search input', async () => {
    await page.type('#twotabsearchtextbox', 'nyan cat pullover')
    await page.click('input.nav-input')
    await page.waitForSelector('#resultsCol')
    const firstProduct = await page.$('a.a-link-normal.a-text-normal')
    expect(firstProduct).toBeTruthy()
  })

  afterAll(async () => {
    await browser.close()
  })
})
