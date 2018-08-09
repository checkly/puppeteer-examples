/**
 * @name Google search
 * @desc Searches Google.com for a term and checks if the first link matches. This check should fail.
 */

const assert = require('assert')
const puppeteer = require('puppeteer')
let browser
let page

before(async () => {
  browser = await puppeteer.launch()
  page = await browser.newPage()
})

describe('Check Google Homepage', () => {
  it('has title "Google"', async () => {
    await page.goto('https://google.com', { waitUntil: 'networkidle0' })
    const title = await page.title()
    assert.equal(title, 'Google')
  }).timeout(10000)

  it('Third search result is my link', async () => {
    await page.type('input[name=q]', 'puppeteer', { delay: 100 })
    await page.click('input[type="submit"]')
    await page.waitForSelector('h3 a')
    const links = await page.$$eval('h3 a', anchors => { return anchors.map(a => { return a.textContent }) })
    assert.equal('This will fail...', links[2])
  }).timeout(10000)
})

after(async () => {
  await browser.close()
})
