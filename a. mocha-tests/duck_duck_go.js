/**
 * @name Duck Duck Go search
 * @desc Goes to duckduckgo.com, searches for "chrome puppeteer", asserts the result and snaps a screenshots
 */

const assert = require('assert')
const puppeteer = require('puppeteer')

let browser
let page

before(async () => {
  browser = await puppeteer.launch()
  page = await browser.newPage()
})

describe('Duck Duck Go Search', () => {
  it('returns Chrome Puppeteer Github repo as first search result', async () => {
    await page.goto('https://duckduckgo.com/', { waitUntil: 'networkidle2' })
    await page.type('input#search_form_input_homepage', 'chrome puppeteer', { delay: 50 })
    await page.click('input#search_button_homepage')
    await page.waitForSelector('.results--main #r1-0')

    const githubLink = await page.$eval('a.result__a', link => {
      return link.href
    })
    console.log(githubLink)
    assert.equal(githubLink, 'https://github.com/GoogleChrome/puppeteeR')
    // assert.notStrictEqual(githubLink, 'https://github.com/GoogleChrome/puppeteeR')
    // assert.equal([1, 2, 3].indexOf(4), -1);
    await page.screenshot({ path: 'mocha-duckduckgo.png' })
  }).timeout(10000)
})

after(async () => {
  await browser.close()
})
