/**
 * @name codesandbox.io
 * @desc Goes to codesandbox.io, creates a new sandbox and selects the Vue.js template
 */
const puppeteer = require('puppeteer')

let browser
let page

beforeAll(async () => {
  browser = await puppeteer.launch({ headless: true })
  page = await browser.newPage()
})

describe('codesandbox.io', () => {
  test('creates a Vue.js sandbox', async () => {
    await page.setViewport({ width: 1280, height: 800 })
    await page.goto('https://codesandbox.io/', { waitUntil: 'networkidle2' })
    await page.waitForSelector('a[href="/s"]')
    await page.click('a[href="/s"]')
    await page.waitForSelector('a[href="/s/vue"]')
    await page.click('a[href="/s/vue"]')
    await page.waitForSelector('.react-monaco-editor-container')
    const editor = await page.$('.react-monaco-editor-container')
    await page.screenshot({ path: 'codesandbox.png' })
    expect(editor).toBeTruthy()
  }, 30000)
})

afterAll(async () => {
  await browser.close()
})
