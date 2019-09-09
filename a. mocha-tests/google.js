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
    await page.screenshot({path: "mocha-google.png"})
    await page.click('input[type="submit"]')
    await page.waitForSelector('h3 div')
    await page.screenshot({path: "mocha-google-results.png"})
    const links = await page.$$eval('h3 div', anchors => { return anchors.map(div => { return div.textContent }) })
    // Change output color:
    // https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color
    console.log('\x1b[36m%s\x1b[0m', links)
    // console.log('\x1b[0m%s\x1b[0m', links)
    // console.clear()
    console.log(links)
    assert.equal('This will fail...', links[3])
  }).timeout(10000)
})

after(async () => {
  await browser.close()
})
