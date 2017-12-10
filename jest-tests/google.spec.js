const puppeteer = require('puppeteer')

let browser
let page

beforeAll(async () => {
  browser = await puppeteer.launch()
  page = await browser.newPage()
})

describe('Google Homepage', () => {
  test('has title "Google"', async () => {
    await page.goto('https://google.com', { waitUntil: 'networkidle0' })
    const title = await page.title()
    expect(title).toBe('Google')
  })

  afterAll( async () => {
    await browser.close()
  })
})
