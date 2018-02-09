const puppeteer = require('puppeteer');

(async () => {
const browser = await puppeteer.launch({ headless: false })
const page = await browser.newPage()

await page.setViewport({ width: 1280, height: 800 })
await page.goto('https://app.metadimensions.com/', { waitUntil: 'networkidle0' })

// log in
await page.waitForSelector('#username')
await page.waitForSelector('#password')
await page.type('#username', 'support@metadimensions.com')
await page.type('#password', 'doodlesack')
await page.click('button.md-raised.md-accent.md-button.ng-scope.md-metaDimensionsDark-theme.md-ink-ripple')

// get dashboard text
await page.waitForSelector('body > nav > div.ng-scope > ul > li:nth-child(1) > a > span.title.ng-binding')
const dashboardText = await page.evaluate(() => document.querySelector('body > nav > div.ng-scope > ul > li:nth-child(1) > a > span.title.ng-binding').textContent.trim())
console.log(dashboardText)
await browser.close()
})()