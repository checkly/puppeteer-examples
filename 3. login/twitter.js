/**
 * @name Twitter
 *
 * @desc Logs into Twitter. Provide your username and password as environment variables when running the script, i.e:
 * `TWITTER_USER=myuser TWITTER_PWD=mypassword node twitter.js`
 *
 */

const puppeteer = require('puppeteer');
const screenshot = 'twitter.png';

(async () => {
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()
  await page.setViewport({ width: 1280, height: 800 })  
  
  const navigationPromise = page.waitForNavigation()
  
  await page.goto('https://twitter.com/')  
  await page.waitForSelector('.StaticLoggedOutHomePage-cell > .StaticLoggedOutHomePage-login > .LoginForm > .LoginForm-username > .text-input')
  await page.type('.StaticLoggedOutHomePage-cell > .StaticLoggedOutHomePage-login > .LoginForm > .LoginForm-username > .text-input', 'tim_nolet')

  await page.type('.StaticLoggedOutHomePage-cell > .StaticLoggedOutHomePage-login > .LoginForm > .LoginForm-password > .text-input', 'spWF9G5%')
  await page.click('.StaticLoggedOutHomePage-content > .StaticLoggedOutHomePage-cell > .StaticLoggedOutHomePage-login > .LoginForm > .EdgeButton')
  await navigationPromise

  await page.waitForSelector('#timeline')
  await page.screenshot({ path: screenshot })
  await browser.close()
})()