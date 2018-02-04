/**
 * @name Gmail signup
 * @desc Checks the signup flow from the landing page. Clicks the
 */

const assert = require('assert')
const puppeteer = require('puppeteer')
let browser
let page

before(async () => {
  browser = await puppeteer.launch()
  page = await browser.newPage()
})

describe('Check Gmail signup', () => {
  it('Landing page has CTA button', async () => {
    await page.setViewport({ width: 1280, height: 800 })
    await page.goto('https://www.google.com/gmail/about/', { waitUntil: 'networkidle0' })
    const SignUpButton = await page.$('a.hero_home__link__desktop')
    assert.ok(SignUpButton)
  }).timeout(10000)
})

after(async () => {
  await browser.close()
})
