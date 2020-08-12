/**
 * @name Github
 *
 * @desc Logs into Github. Provide your username and password as environment variables when running the script, i.e:
 * `GITHUB_USER=myuser GITHUB_PWD=mypassword node github.js`
 *
 */
const puppeteer = require('puppeteer')
const screenshot = 'github.png';
(async () => {
  const browser = await puppeteer.launch({ headless: true })
  const page = await browser.newPage()
  await page.goto('https://github.com/login')
  await page.type('#login_field', process.env.GITHUB_USER)
  await page.type('#password', process.env.GITHUB_PWD)
  await page.click('[name="commit"]')
  await page.waitForNavigation()
  await page.screenshot({ path: screenshot })
  browser.close()
  console.log('See screenshot: ' + screenshot)
})()
