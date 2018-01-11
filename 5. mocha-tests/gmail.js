/**
 * @name Gmail signup
 * @desc Checks the signup flow from the landing page. Clicks the
 */

const assert = require('assert')
const puppeteer = require('puppeteer')
let browser
let page

before(async () => {
  browser = await puppeteer.launch({ headless: false })
  page = await browser.newPage()
})

describe('Check Gmail signup', () => {
  it('Landing page has CTA button', async () => {
    await page.setViewport({ width: 1280, height: 800 })
    await page.goto('https://www.google.com/gmail/about/', { waitUntil: 'networkidle0' })
    const SignUpButton = await page.$('a.hero_home__link__desktop')
    assert.ok(SignUpButton)
  }).timeout(10000)

  it('Signup form opens in a new tab', async () => {
    await page.click('a.hero_home__link__desktop')
    const pages = await browser.pages()
    console.log(pages)
    const newPage = pages[1]
    await newPage.waitForSelector('div.sign-up')
    const form = await newPage.$('div.sign-up')
    await newPage.screenshot({ path: 'gmail.png' })
    assert.ok(form)
  }).timeout(30000)
})

after(async () => {
  await browser.close()
})
