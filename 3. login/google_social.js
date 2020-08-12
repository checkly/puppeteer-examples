/**
 * @name Google Social Login
 *
 * @desc Logs into Checkly using Google social Login. Provide your username and password as environment variables when running the script, i.e:
 * `GOOGLE_USER=myuser GOOGLE_PWD=mypassword node google_social.js`
 *
 */
const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()

  await page.setViewport({ width: 1280, height: 800 })
  await page.goto('https://app.checklyhq.com/login')

  const navigationPromise = page.waitForNavigation()

  await page.waitForSelector('.google-button')
  await page.click('.google-button')

  await navigationPromise
  await page.waitForSelector('input[type="email"]')
  await page.type('input[type="email"]', process.env.GOOGLE_USER)
  await page.click('#identifierNext')

  await page.waitForSelector('input[type="password"]', { visible: true })
  await page.type('input[type="password"]', process.env.GOOGLE_PWD)

  await page.waitForSelector('#passwordNext', { visible: true })
  await page.click('#passwordNext')

  await navigationPromise

  await browser.close()
})()
